import { Server as WsServer } from 'ws'
import { consoleInfo } from '../../helpers/errors'
import { saveSettings, listener } from '../../main'

const eventName = 'saveSettings'

const cb = (data: any, _: any, __: WsServer) => {
	const { settings, spotifySettings } = data
	saveSettings(settings)
	consoleInfo('Settings saved')
	listener.send('updateSettings', { settings, spotifySettings })
}

export default { eventName, cb }
