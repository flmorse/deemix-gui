import { RequestHandler } from 'express'

/* === Utilities === */
// https://github.com/Microsoft/TypeScript/issues/25760#issuecomment-614417742
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<T>

export type Port = number | string | boolean

export interface ApiHandler {
	path: string
	handler: RequestHandler<any, any, any, any>
}

export interface Tags {
	title: boolean
	artist: boolean
	album: boolean
	cover: boolean
	trackNumber: boolean
	trackTotal: boolean
	discNumber: boolean
	discTotal: boolean
	albumArtist: boolean
	genre: boolean
	year: boolean
	date: boolean
	explicit: boolean
	isrc: boolean
	length: boolean
	barcode: boolean
	bpm: boolean
	replayGain: boolean
	label: boolean
	lyrics: boolean
	syncedLyrics: boolean
	copyright: boolean
	composer: boolean
	involvedPeople: boolean
	source: boolean
	savePlaylistAsCompilation: boolean
	useNullSeparator: boolean
	saveID3v1: boolean
	multiArtistSeparator: string
	singleAlbumArtist: boolean
	coverDescriptionUTF8: boolean
}

export interface Settings {
	downloadLocation: string
	tracknameTemplate: string
	albumTracknameTemplate: string
	playlistTracknameTemplate: string
	createPlaylistFolder: boolean
	playlistNameTemplate: string
	createArtistFolder: boolean
	artistNameTemplate: string
	createAlbumFolder: boolean
	albumNameTemplate: string
	createCDFolder: boolean
	createStructurePlaylist: boolean
	createSingleFolder: boolean
	padTracks: boolean
	paddingSize: string
	illegalCharacterReplacer: string
	queueConcurrency: number
	maxBitrate: string
	fallbackBitrate: boolean
	fallbackSearch: boolean
	logErrors: boolean
	logSearched: boolean
	saveDownloadQueue: boolean
	overwriteFile: string
	createM3U8File: boolean
	playlistFilenameTemplate: string
	syncedLyrics: boolean
	embeddedArtworkSize: number
	embeddedArtworkPNG: boolean
	localArtworkSize: number
	localArtworkFormat: string
	saveArtwork: boolean
	coverImageTemplate: string
	saveArtworkArtist: boolean
	artistImageTemplate: string
	jpegImageQuality: number
	dateFormat: string
	albumVariousArtists: boolean
	removeAlbumVersion: boolean
	removeDuplicateArtists: boolean
	tagsLanguage: string
	featuredToTitle: string
	titleCasing: string
	artistCasing: string
	executeCommand: string
	tags: Tags
}

// TODO
export interface SpotifySettings {}
