import Vue from 'vue'

import '@/plugins/composition-api.js'

import '@/styles/vendor/material-icons.css'
import '@/styles/vendor/OpenSans.css'

import '@/styles/css/tailwind.css'

import '@/styles/css/normalize.css'
import '@/styles/css/base.css'
import '@/styles/css/components.css'
import '@/styles/css/helpers.css'
import '@/styles/css/typography.css'

import '@/styles/scss/tables.scss'

import App from '@/App.vue'
import i18n from '@/plugins/i18n'
import router from '@/router'
import store from '@/store'

import { socket } from '@/utils/socket'
import { fetchData, postToServer, SERVER_ENDPOINT } from '@/utils/api'
import { toast } from '@/utils/toasts'
import { isValidURL } from '@/utils/utils'
import { sendAddToQueue } from '@/utils/downloads'

/* ===== App initialization ===== */
async function startApp() {
	new Vue({
		store,
		router,
		i18n,
		render: h => h(App)
	}).$mount('#app')

	const connectResponse = await (await fetch(`${SERVER_ENDPOINT}/connect`, { credentials: 'include' })).json()
	if (!connectResponse.deezerAvailable) document.getElementById('deezer_not_available').classList.remove('hide')

	store.dispatch('setAppInfo', connectResponse.update).catch(console.error)

	let arl = localStorage.getItem('arl')
	const accessToken = localStorage.getItem('accessToken')

	if (connectResponse.autologin) {
		console.info('Autologin')
		const accountNum = localStorage.getItem('accountNum')

		async function login(arl, accountNum) {
			toast(i18n.t('toasts.loggingIn'), 'loading', false, 'login-toast')
			arl = arl.trim()
			let result

			if (accountNum !== 0) {
				result = await fetchData('login-arl', { arl, force: true, child: accountNum || 0 }, 'POST')
			} else {
				result = await fetchData('login-arl', { arl }, 'POST')
			}

			return result
		}

		if (arl) {
			let result = await login(arl, accountNum)
			if (result.status === 0 && accessToken) {
				const { arl: newArl } = await postToServer('loginWithCredentials', { accessToken })
				if (newArl && newArl !== arl) {
					arl = newArl
					store.dispatch('setARL', { arl })
				}
				result = await login(newArl, accountNum)
			}
			loggedIn(result)
		}
	} else {
		loggedIn({ status: 3, user: connectResponse.currentUser, arl })
	}
}

function initClient() {
	store.dispatch('setClientMode', true)
	setClientModeKeyBindings()
}

document.addEventListener('DOMContentLoaded', startApp)
if (window.api) {
	initClient()
}

/* ===== Global shortcuts ===== */

document.addEventListener('paste', pasteEvent => {
	if (pasteEvent.target.localName === 'input') return

	let pastedText = pasteEvent.clipboardData.getData('Text')

	if (isValidURL(pastedText)) {
		if (router.currentRoute.name === 'Link Analyzer') {
			socket.emit('analyzeLink', pastedText)
		} else {
			if (pastedText.includes('\n')) pastedText = pastedText.replace(/\n/g, ';')
			sendAddToQueue(pastedText)
		}
	} else {
		const searchbar = document.querySelector('#searchbar')
		searchbar.select()
		searchbar.setSelectionRange(0, 99999)
	}
})

/**
 * Sets up key bindings that already work in the browser (server mode)
 */
function setClientModeKeyBindings() {
	document.addEventListener('keyup', keyEvent => {
		// ALT + left
		if (keyEvent.altKey && keyEvent.key === 'ArrowLeft') {
			router.back()
		}

		// ALT + right
		if (keyEvent.altKey && keyEvent.key === 'ArrowRight') {
			router.forward()
		}
	})
}

/* ===== Socketio listeners ===== */

// Debug messages for socketio
socket.on('message', function (msg) {
	console.log(msg)
})

function loggedIn(data) {
	const { status, user } = data

	switch (status) {
		case 1:
		case 3:
			// Login ok
			toast(i18n.t('toasts.loggedIn'), 'done', true, 'login-toast')

			store.dispatch('login', data)
			break
		case 2:
			// Already logged in
			toast(i18n.t('toasts.alreadyLogged'), 'done', true, 'login-toast')

			store.dispatch('setUser', user)
			break
		case 0:
			// Login failed
			toast(i18n.t('toasts.loginFailed'), 'close', true, 'login-toast')

			store.dispatch('removeARL')
			break
		case -1:
			toast(i18n.t('toasts.deezerNotAvailable'), 'close', true, 'login-toast')

		// TODO
		// $('#open_login_prompt').show()
		// document.getElementById('logged_in_info').classList.add('hide')
		// $('#settings_username').text('Not Logged')
		// $('#settings_picture').attr('src', `https://e-cdns-images.dzcdn.net/images/user/125x125-000000-80-0-0.jpg`)
		// document.getElementById('home_not_logged_in').classList.remove('hide')
	}
}

socket.on('restoringQueue', function () {
	toast(i18n.t('toasts.restoringQueue'), 'loading', false, 'restoring_queue')
})

socket.on('cancellingCurrentItem', function (uuid) {
	toast(i18n.t('toasts.cancellingCurrentItem'), 'loading', false, 'cancelling_' + uuid)
})

socket.on('currentItemCancelled', function (uuid) {
	toast(i18n.t('toasts.currentItemCancelled'), 'done', true, 'cancelling_' + uuid)
})

socket.on('startAddingArtist', function (data) {
	toast(i18n.t('toasts.startAddingArtist', { artist: data.name }), 'loading', false, 'artist_' + data.id)
})

socket.on('finishAddingArtist', function (data) {
	toast(i18n.t('toasts.finishAddingArtist', { artist: data.name }), 'done', true, 'artist_' + data.id)
})

socket.on('startConvertingSpotifyPlaylist', function (id) {
	toast(i18n.t('toasts.startConvertingSpotifyPlaylist'), 'loading', false, 'spotifyplaylist_' + id)
})

socket.on('finishConvertingSpotifyPlaylist', function (id) {
	toast(i18n.t('toasts.finishConvertingSpotifyPlaylist'), 'done', true, 'spotifyplaylist_' + id)
})

socket.on('errorMessage', function (error) {
	toast(error, 'error')
})

socket.on('queueError', function (queueItem) {
	if (queueItem.errid) {
		toast(queueItem.link + ' - ' + i18n.t(`errors.ids.${queueItem.errid}`), 'error')
	} else {
		toast(queueItem.link + ' - ' + queueItem.error, 'error')
	}
})

socket.on('alreadyInQueue', function (data) {
	toast(i18n.t('toasts.alreadyInQueue', { item: data.title }), 'playlist_add_check')
})

socket.on('loginNeededToDownload', function () {
	toast(i18n.t('toasts.loginNeededToDownload'), 'report')
})

socket.on('startGeneratingItems', function (data) {
	toast(i18n.t('toasts.startGeneratingItems', { n: data.total }), 'loading', false, 'batch_' + data.uuid)
})

socket.on('finishGeneratingItems', function (data) {
	toast(i18n.t('toasts.finishGeneratingItems', { n: data.total }), 'done', true, 'batch_' + data.uuid)
})
