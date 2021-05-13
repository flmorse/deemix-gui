import { Server as WsServer } from 'ws'
import { consoleInfo } from '../../helpers/errors'
import { saveSettings } from '../../main'
import { broadcast } from '../index'

const eventName = 'saveSettings'

const cb = (data: any, ws: any, wss: WsServer) => {
  const {settings, spotifySettings} = data
  saveSettings(settings)
  consoleInfo('Settings saved')
  broadcast(wss, 'updateSettings', {settings, spotifySettings})
}

export default { eventName, cb }
