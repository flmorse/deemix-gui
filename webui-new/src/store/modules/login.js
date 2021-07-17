const getDefaultState = () => ({
	arl: localStorage.getItem('arl') || '',
	accessToken: localStorage.getItem('accessToken') || '',
	status: null,
	user: {
		id: null,
		name: '',
		picture: ''
	},
	spotifyUser: {
		id: localStorage.getItem('spotifyUser'),
		name: null,
		picture: null
	},
	clientMode: false
})

const state = () => {
	return getDefaultState()
}

const actions = {
	login({ commit, dispatch }, payload) {
		const { arl, user, status } = payload

		dispatch('setARL', { arl })
		commit('SET_USER', user)
		commit('SET_STATUS', status)
	},
	logout({ commit }) {
		localStorage.removeItem('arl')
		localStorage.removeItem('accessToken')

		commit('RESET_LOGIN')
	},
	setARL({ commit }, payload) {
		let { saveOnLocalStorage } = payload
		const { arl } = payload

		saveOnLocalStorage = typeof saveOnLocalStorage === 'undefined' ? true : saveOnLocalStorage

		commit('SET_ARL', arl)

		if (saveOnLocalStorage) {
			localStorage.setItem('arl', arl)
		}
	},
	setAccessToken({ commit }, payload) {
		let { saveOnLocalStorage } = payload
		const { accessToken } = payload

		saveOnLocalStorage = typeof saveOnLocalStorage === 'undefined' ? true : saveOnLocalStorage

		commit('SET_ACCESS_TOKEN', accessToken)

		if (saveOnLocalStorage) {
			localStorage.setItem('accessToken', accessToken)
		}
	},
	removeARL({ commit }) {
		commit('SET_ARL', '')

		localStorage.removeItem('arl')
	},
	removeAccessToken({ commit }) {
		commit('SET_ACCESS_TOKEN', '')

		localStorage.removeItem('accessToken')
	},
	setUser({ commit }, payload) {
		commit('SET_USER', payload)
	},
	setClientMode({ commit }, payload) {
		commit('SET_CLIENT_MODE', payload)
	}
}

const getters = {
	getARL: state => state.arl,
	getAccessToken: state => state.accessToken,
	getUser: state => state.user,
	getSpotifyUser: state => state.spotifyUser,
	getClientMode: state => state.clientMode,

	isLoggedIn: state => !!state.arl,
	isLoggedWithSpotify: state => !!state.spotifyUser.id
}

const mutations = {
	SET_ARL(state, payload) {
		state.arl = payload
	},
	SET_ACCESS_TOKEN(state, payload) {
		state.accessToken = payload
	},
	SET_STATUS(state, payload) {
		state.status = payload
	},
	SET_USER(state, payload) {
		state.user = payload
	},
	SET_CLIENT_MODE(state, payload) {
		state.clientMode = payload
	},
	RESET_LOGIN(state) {
		// Needed for reactivity
		const clientMode = state.clientMode
		Object.assign(state, getDefaultState())
		state.clientMode = clientMode
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}
