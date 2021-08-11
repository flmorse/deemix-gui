import fs from 'fs'
import express from 'express'
// @ts-expect-error
import { Deezer } from 'deezer-js'
import { GUI_PACKAGE } from '../helpers/paths'
import { sessionDZ, getQueue, deemixVersion, isDeezerAvailable, plugins } from '../main'

const router = express.Router()
let update: any = null

router.get('/connect', async (req, res) => {
	if (!sessionDZ[req.session.id]) sessionDZ[req.session.id] = new Deezer()
	const dz = sessionDZ[req.session.id]

	if (!update) {
		const currentVersion = JSON.parse(String(fs.readFileSync(GUI_PACKAGE))).version
		console.log(currentVersion)
		update = {
			currentCommit: currentVersion === '0.0.0' ? 'continuous' : currentVersion,
			latestCommit: null,
			updateAvailable: false,
			deemixVersion
		}
	}

	const result: any = {
		update,
		autologin: !dz.logged_in,
		currentUser: dz.current_user,
		deezerAvailable: await isDeezerAvailable(),
		spotifyEnabled: plugins.spotify.enabled
	}

	const queue = getQueue()

	if (Object.keys(queue.queue).length > 0) {
		result.queue = queue
	}

	res.send(result)
})

export default router
