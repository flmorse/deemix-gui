// @ts-expect-error
import { Deezer } from 'deezer-js'
import { ApiHandler } from '../../../types'
import { sessionDZ, addToQueue, settings, listener } from '../../../main'

const path: ApiHandler['path'] = '/addToQueue'

const handler: ApiHandler['handler'] = async (req, res) => {
	if (!sessionDZ[req.session.id]) sessionDZ[req.session.id] = new Deezer()
	const dz = sessionDZ[req.session.id]

	const url = req.query.url
	let bitrate = req.query.bitrate
	if (bitrate === 'null') bitrate = settings.maxBitrate
	let obj: any

	try {
		obj = await addToQueue(dz, url, bitrate)
	} catch (e) {
		switch (e.name) {
			case 'AlreadyInQueue':
				res.send({ result: false, errid: e.name, data: { url, bitrate, obj: e.item } })
				listener.send('alreadyInQueue', e.item)
				break
			case 'NotLoggedIn':
				res.send({ result: false, errid: e.name, data: { url, bitrate } })
				listener.send('loginNeededToDownload')
				break
			default:
				console.error(e)
				res.send({ result: false, errid: e.name, data: { url, bitrate } })
				break
		}
		return
	}

	res.send({ result: true, data: { url, bitrate, obj } })
}

const apiHandler: ApiHandler = { path, handler }

export default apiHandler
