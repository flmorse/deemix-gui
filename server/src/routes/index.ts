import express from 'express'
// @ts-expect-error
import { Deezer } from 'deezer-js'
import { consoleInfo } from '../helpers/errors'
import { sessionDZ, getQueue, deemixVersion, currentVersion, isDeezerAvailable, plugins, getSettings } from '../main'

const router = express.Router()
let update: any = null

router.get('/connect', async (req, res) => {
	if (!sessionDZ[req.session.id]) sessionDZ[req.session.id] = new Deezer()
	const dz = sessionDZ[req.session.id]

	if (!update) {
		consoleInfo(`Currently running deemix-gui version ${currentVersion}`)
		consoleInfo(`deemix-lib version ${deemixVersion}`)
		update = {
			currentCommit: currentVersion,
			deemixVersion
		}
	}

	const result: any = {
		update,
		autologin: !dz.logged_in,
		currentUser: dz.current_user,
		deezerAvailable: await isDeezerAvailable(),
		spotifyEnabled: plugins.spotify.enabled,
		settingsData: getSettings()
	}

	if (result.settingsData.settings.autoCheckForUpdates) result.checkForUpdates = true

	const queue = getQueue()

	if (Object.keys(queue.queue).length > 0) {
		result.queue = queue
	}

	res.send(result)
})

export default router
