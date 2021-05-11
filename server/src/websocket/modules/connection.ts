import { consoleInfo } from '../../helpers/errors'

const eventName = 'message'

const cb = (message: string) => {
	consoleInfo(`received: ${message}`)
}

export default { eventName, cb }
