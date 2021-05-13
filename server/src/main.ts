// @ts-expect-error
import deemix from 'deemix'

export const loadSettings = deemix.settings.load
export const defaultSettings: any = deemix.settings.DEFAULTS
export let settings: any = loadSettings()
export let sessionDZ: any = {}

export function saveSettings(newSettings: any) {
  deemix.settings.save(newSettings)
  settings = newSettings
}
