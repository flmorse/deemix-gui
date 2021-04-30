// @ts-expect-error
import { Deezer } from 'deezer-js'
// @ts-expect-error
import deemix from 'deemix'

export let settings: any = deemix.settings.load()
export const dz = new Deezer(settings.tagsLanguage)
