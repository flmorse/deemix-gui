import express from 'express'
// @ts-expect-error
import { Deezer } from 'deezer-js'
import { sessionDZ, getQueue, deemixVersion, isDeezerAvailable } from '../main'

const router = express.Router()
let update: any = null

router.get('/connect', async (req, res) => {
	if (!sessionDZ[req.session.id]) sessionDZ[req.session.id] = new Deezer()
	const dz = sessionDZ[req.session.id]

	if (!update) {
		update = {
			currentCommit: 'testing',
			latestCommit: 'testing',
			updateAvailable: false,
			deemixVersion
		}
	}

	const result: any = {
		update,
		autologin: !dz.logged_in,
		currentUser: dz.current_user,
		deezerAvailable: await isDeezerAvailable()
	}

	const queue = getQueue()

	if (Object.keys(queue.queue).length > 0) {
		result.queue = queue
	}

	res.send(result)
})

export default router
