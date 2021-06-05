import express from 'express'
// @ts-expect-error
import { Deezer } from 'deezer-js'
import { sessionDZ, getQueue } from '../main'

const router = express.Router()

/**
 * GET home page
 *
 * @since	0.0.0
 */
router.get('/', (_, res) => {
	res.render('index', { title: 'deemix' })
})

router.get('/connect', (req, res) => {
	if (!sessionDZ[req.session.id]) sessionDZ[req.session.id] = new Deezer()
	const dz = sessionDZ[req.session.id]

	const result: any = {
		update: {
			currentCommit: 'testing',
			latestCommit: 'testing',
			updateAvailable: false,
			deemixVersion: '3.0_beta'
		},
		autologin: !dz.logged_in,
		currentUser: dz.current_user,
		deezerNotAvailable: false
	}

	const queue = getQueue()

	if (Object.keys(queue.queue).length > 0) {
		result.queue = queue
	}

	res.send(result)
})

export default router
