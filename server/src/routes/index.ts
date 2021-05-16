import express from 'express'
// @ts-expect-error
import { Deezer } from 'deezer-js'
import { sessionDZ, queue, queueOrder, currentJob } from '../main'

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

	let result: any = {
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

	if (Object.keys(queue).length > 0){
		result.queue = {
			queue,
			queueOrder
		}
		if (currentJob && currentJob !== true){
			result.queue.current = currentJob.downloadObject.uuid
		}
	}

	res.send(result)
})

export default router
