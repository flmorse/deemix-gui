import { ApiHandler } from '../../../types'
import { saveSettings, listener } from '../../../main'
import { Settings, SpotifySettings } from '../../../types'

const path = '/saveSettings'

export interface SaveSettingsData {
	settings: Settings
	spotifySettings: SpotifySettings
}

const handler: ApiHandler['handler'] = async (req, res) => {
  const { settings, spotifySettings }: SaveSettingsData = req.query
  saveSettings(settings, spotifySettings)
	listener.send('updateSettings', { settings, spotifySettings })
	res.send({ result: true })
}

const apiHandler = { path, handler }

export default apiHandler
