import { ApiHandler } from '../../../types'
// @ts-expect-error
import { Deezer } from 'deezer-js'
import { sessionDZ } from '../../../main'

const path: ApiHandler['path'] = '/getUserArtists'

const handler: ApiHandler['handler'] = async (req, res) => {
	if (!sessionDZ[req.session.id]) sessionDZ[req.session.id] = new Deezer()
	let dz = sessionDZ[req.session.id]
  let data

  if (dz.logged_in){
    let userID = dz.current_user.id
    try {
      data = await dz.api.get_user_artists(userID, {limit: -1})
      data = data.data
    } catch {
      data = await dz.gw.get_user_artists(userID, {limit: -1})
    }
  } else {
    data = {error: "notLoggedIn"}
  }
  res.send(data)
}

const apiHandler: ApiHandler = { path, handler }

export default apiHandler
