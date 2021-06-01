import { ApiHandler, Settings, SpotifySettings } from '../../../types'
import { saveSettings, listener } from '../../../main'

const path = '/saveSettings'

export interface SaveSettingsData {
	settings: Settings
	spotifySettings: SpotifySettings
}

const handler: ApiHandler['handler'] = (req, res) => {
	const { settings, spotifySettings }: SaveSettingsData = req.query
	saveSettings(settings, spotifySettings)
	listener.send('updateSettings', { settings, spotifySettings })
	res.send({ result: true })
}

const apiHandler = { path, handler }

export default apiHandler
