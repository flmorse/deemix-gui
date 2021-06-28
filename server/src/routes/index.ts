import express from 'express'
// @ts-expect-error
import { Deezer } from 'deezer-js'
import { sessionDZ, getQueue, deemixVersion, isDeezerAvailable, deezerAvailable } from '../main'

const router = express.Router()
let update: any = null

/**
 * GET home page
 *
 * @since	0.0.0
 */
router.get('/', (_, res) => {
	res.render('index', { title: 'deemix' })
})

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
	if (deezerAvailable === null) await isDeezerAvailable()

	const result: any = {
		update,
		autologin: !dz.logged_in,
		currentUser: dz.current_user,
		deezerAvailable
	}

	const queue = getQueue()

	if (Object.keys(queue.queue).length > 0) {
		result.queue = queue
	}

	res.send(result)
})

export default router
