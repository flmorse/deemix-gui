import express from 'express'
// @ts-expect-error
import { Deezer } from 'deezer-js'
import { sessionDZ } from '../main'

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
	let dz = sessionDZ[req.session.id]

	res.send({
		update: {
			currentCommit: "testing",
			latestCommit: "testing",
			updateAvailable: false,
			deemixVersion: "3.0_beta"
		},
		autologin: !dz.logged_in,
		currentUser: dz.current_user,
		deezerNotAvailable: false
	})
})

export default router
