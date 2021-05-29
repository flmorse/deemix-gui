import { Server as WsServer } from 'ws'
import { consoleInfo } from '../../helpers/errors'
import { saveSettings, listener } from '../../main'
import { Settings, SpotifySettings } from '../../types'

const eventName = 'saveSettings'

export interface SaveSettingsData {
	settings: Settings
	spotifySettings: SpotifySettings
}

const cb = (data: SaveSettingsData, _: any, __: WsServer) => {
	const { settings, spotifySettings } = data
	saveSettings(settings, spotifySettings)
	consoleInfo('Settings saved')
	listener.send('updateSettings', { settings, spotifySettings })
}

export default { eventName, cb }
