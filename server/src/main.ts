// @ts-expect-error
import { Deezer } from 'deezer-js'
// @ts-expect-error
import deemix from 'deemix'

export let settings: any = deemix.settings.load()
export const defaultSettings: any = deemix.settings.DEFAULTS
export let sessionDZ: any = {}
