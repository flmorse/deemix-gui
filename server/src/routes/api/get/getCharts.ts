import { ApiHandler } from '../../../types'
import { dz } from '../../../main'

const path: ApiHandler['path'] = '/getCharts'

let chartsCache: any

const handler: ApiHandler['handler'] = async (_, res) => {
	if (!chartsCache) {
		const chartsData = await dz.api.get_countries_charts()
		const countries: any[] = []
		chartsData.forEach((country: any) => {
			countries.push({
				title: country.title.replace('Top ', ''),
				id: country.id,
				picture_small: country.picture_small,
				picture_medium: country.picture_medium,
				picture_big: country.picture_big
			})
		})
		chartsCache = { data: countries }
	}
	res.send(chartsCache)
}

const apiHandler: ApiHandler = { path, handler }

export default apiHandler
