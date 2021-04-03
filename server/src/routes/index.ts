import express from 'express'

const router = express.Router()

/**
 * GET home page
 *
 * @since	0.0.0
 */
router.get('/', (_, res) => {
	res.render('index', { title: 'Express' })
})

export default router
