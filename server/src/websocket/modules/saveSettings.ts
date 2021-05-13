import { Server as WsServer } from 'ws'
import { consoleInfo } from '../../helpers/errors'
import { saveSettings, listener } from '../../main'

const eventName = 'saveSettings'

const cb = (data: any, ws: any, wss: WsServer) => {
  const {settings, spotifySettings} = data
  saveSettings(settings)
  consoleInfo('Settings saved')
  listener.send('updateSettings', {settings, spotifySettings})
}

export default { eventName, cb }
