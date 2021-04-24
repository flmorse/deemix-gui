import request from 'supertest'
import { app } from '../../../app'

describe('albumSearch requests', () => {
	it('should respond 200 to calls with term', async () => {
		const responseStatusCollector: number[] = []
		const batchCalls = [
			'/api/album-search/?term=eminem',
			'/api/album-search/?term=eminem?start=10',
			'/api/album-search/?term=eminem?ack=aa',
			'/api/album-search/?term=eminem?ack=aa?start=10',
			'/api/album-search/?term=eminem?ack=aa?start=10?nb=34'
		]

		for (const uri of batchCalls) {
			responseStatusCollector.push((await request(app).get(uri).send()).status)
		}

		expect(responseStatusCollector).toMatchObject(new Array(batchCalls.length).fill(200))
		expect(responseStatusCollector).toMatchObject(new Array(responseStatusCollector.length).fill(200))
	})

	it('should respond 400 to calls without term', async () => {
		const responseStatusCollector: number[] = []
		const batchCalls = [
			'/api/album-search/',
			'/api/album-search/?start=10',
			'/api/album-search/?ack=aa',
			'/api/album-search/?ack=aa?start=10',
			'/api/album-search/?ack=aa?start=10?nb=34'
		]

		for (const uri of batchCalls) {
			responseStatusCollector.push((await request(app).get(uri).send()).status)
		}

		expect(responseStatusCollector).toMatchObject(new Array(responseStatusCollector.length).fill(400))
	})

	it.todo('should respond the desired search result')
})
