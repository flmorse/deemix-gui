const de = {
	globals: {
		welcome: 'Willkommen bei deemix',
		back: 'zurück',
		loading: 'lädt',
		download: 'Download {thing}',
		by: 'von {artist}',
		in: 'in {album}',
		download_hint: 'Download',
		play_hint: 'Play',
		toggle_download_tab_hint: 'Erweitern/Minimieren',
		clean_queue_hint: 'Entferne vollständige',
		cancel_queue_hint: 'Alle abbrechen',
		listTabs: {
			empty: '',
			all: 'alle',
			top_result: 'Top Ergebnis',
			album: 'Album | Alben',
			artist: 'Künstler | Künstler',
			single: 'Single | Singles',
			title: 'Titel | Titel',
			track: 'Track | Tracks',
			trackN: '0 Tracks | {n} Track | {n} Tracks',
			releaseN: '0 Releases | {n} Release | {n} Releases',
			playlist: 'Playlist | Playlists',
			compile: 'Sammlung | Sammlungen',
			ep: 'EP | EPs',
			spotifyPlaylist: 'Spotify Playlist | Spotify Playlists',
			releaseDate: 'Veröffentlichungsdatum',
			error: 'Fehler'
		}
	},
	about: {
		titles: {
			usefulLinks: 'Nützliche Links',
			bugReports: 'Fehlermeldung',
			contributing: 'Mitwirkende',
			donations: 'Spenden',
			license: 'Lizenz'
		},
		subtitles: {
			bugReports: 'Funktioniert etwas in Deemix nicht? Sag uns bescheid!',
			contributing: 'Du möchtest bei dem Projekt helfen? Das kannst du auf verschiedene Arten machen!',
			donations: 'Du möchtest deemix finanziell unterstützen? Dann lasse eine kleine Spende da!'
		},
		usesLibrary:
			'Dieses Programm nutzt die <strong>deemix</strong> Bibliothek, die du dazu nutzen kannst deine eigene deemix UI zu erstellen.',
		thanks:
			'Ein Dankeschön geht an <strong>rtonno</strong>, <strong>uhwot</strong> and <strong>lollilol</strong> für die Hilfe bei diesem Projekt und an <strong>BasCurtiz</strong> für die Erstellung des Logos.',
		upToDate: {
			text: 'Bleib auf dem Laufenden mit den Updates indem du dem {newsChannel} auf Telegram folgst.',
			newsChannel: 'News Channel'
		},
		officialWebsite: 'Offizielle Website',
		officialRepo: 'Offizielle Library Repository',
		officialWebuiRepo: 'Offizielle WebUI Repository',
		officialSubreddit: 'Offizieller Subreddit',
		newsChannel: 'News Channel',
		questions: {
			text:
				'Bei Fragen oder Problemen mit der App, suche als erstes nach einer Lösung im {subreddit}. Wenn du da nichts findest, kannst du einen Beitrag mit deinen Problem auf dem Subreddit verfassen.',
			subreddit: 'Subreddit'
		},
		beforeReporting:
			'Bevor du einen Bug meldest, stelle sicher, dass du die neueste Version der App hast und dass das, was du melden möchtest, tatsächlich ein Bug ist und nicht nur bei dir falsch ist.',
		beSure:
			'Stelle sicher, dass der Bug auf anderen Computern auch vorhanden ist <strong>MELDEN NICHT</strong> einen Bug, wenn er schon gemeldet worden ist.',
		duplicateReports: 'Doppelte Fehlerberichte werden geschlossen, achte darauf.',
		dontOpenIssues:
			'<strong>ERSTELLE KEINE</strong> Fehlermeldungen um Fragen zu stellen, es gibt einen Subreddit dafür.',
		newUI: {
			text:
				'Wenn du Python fließend beherrschst, kannst du versuchen, mit hilfe der base library eine neue Benutzeroberfläche für die App zu erstellen oder Fehler in der Bibliothek mit einem Pull-Request in der {repo} zu beheben.',
			repo: 'deemix Repo'
		},
		acceptFeatures:
			'Ich akzeptiere auch Funktionen, aber keine komplexen Dinge, da sie direkt in der App und nicht in der Bibliothek implementiert werden können.',
		otherLanguages:
			'Wenn du eine andere Programmiersprache fließend beherrschst, kannst du versuchen, deemix in andere Programmiersprachen zu portieren!',
		understandingCode: 'Du benötigst Hilfe beim verstehen des Codes? Frag einfach RemixDev auf Telegram oder Reddit.',
		contributeWebUI: {
			text: 'Wenn du Vue.js (JavaScript) oder HTML und CSS kennst, könntest du etwas zum {webui} beitragen.',
			webui: 'WebUI'
		},
		itsFree:
			'Du solltest im Kopf behalten das <strong>dies ein kostenloses Projekt ist</strong> und <strong>Du solltest die Künstler unterstützen, die du magst </strong> bevor du die Entwickler unterstützt.',
		notObligated: 'Fühle dich nicht gezwungen zu spenden, danke, dass du deemix verwendest!',
		lincensedUnder: {
			text: 'Diese Arbeit ist lizensiert unter der {gpl3}.',
			gpl3: 'GNU General Public License 3.0'
		}
	},
	charts: {
		title: 'Charts',
		changeCountry: 'Land wechseln',
		download: 'Download Chart'
	},
	errors: {
		title: 'Errors für {name}',
		ids: {
			invalidURL: 'URL nicht erkannt',
			unsupportedURL: 'URL noch nicht unterstützt',
			ISRCnotOnDeezer: 'Track ISRC ist auf deezer nicht verfügbar',
			notYourPrivatePlaylist: 'Du kannst keine privaten Playlisten anderer herunterladen.',
			spotifyDisabled: 'Spotify-Funktionen sind nicht richtig eingerichtet',
			trackNotOnDeezer: 'Track ist nicht verfügbar auf Deezer!',
			albumNotOnDeezer: 'Album auf Deezer nicht gefunden!',
			notOnDeezer: 'Track auf Deezer nicht verfügbar!',
			notEncoded: 'Track noch nicht codiert!',
			notEncodedNoAlternative: 'Track noch nicht codiert und keine Alternative gefunden!',
			wrongBitrate: 'Track mit gewünschter Bitrate nicht gefunden.',
			wrongBitrateNoAlternative: 'Track mit gewünschter Bitrate nicht gefunden und keine Alternative gefunden!',
			no360RA: 'Track ist nicht verfügbar in Reality Audio 360.',
			notAvailable: 'Track ist noch nicht verfügbar auf den Servern von Deezer!',
			notAvailableNoAlternative:
				'Track ist noch nicht verfügbar auf den Servern von Deezer und keine Alternativen gefunden!!'
		}
	},
	favorites: {
		title: 'Favoriten',
		noPlaylists: 'Keine Playlist gefunden',
		noAlbums: 'Keine favorisierten Alben gefunden',
		noArtists: 'Keine favorisierten Künstler gefunden',
		noTracks: 'Keine favorisierten Tracks gefunden'
	},
	home: {
		needTologin: 'Du musst dich in deinem Deezer-Account anmelden bevor du mit dem Download starten kannst.',
		openSettings: 'Einstellungen öffnen',
		sections: {
			popularPlaylists: 'Beliebte Playlists',
			popularAlbums: 'Meistgestreamte Alben'
		}
	},
	linkAnalyzer: {
		info:
			'Diesen Abschnitt kannst du nutzen, um weitere Informationen über den gewünschten Link zu erhalten, den du herunterladen möchtest.',
		useful:
			'Dies ist z.B. nützlich, wenn du versuchst einige Titel herunterzuladen, welche in deinem Land nicht verfügbar sind, und du wissen möchtest, wo sie verfügbar sind.',
		linkNotSupported: 'Dieser Link wird noch nicht unterstützt',
		linkNotSupportedYet:
			'Es scheint so, als ob dieser Link noch nicht unterstützt wird. Versuche einen anderen Link zu analysieren.',
		table: {
			id: 'ID',
			isrc: 'ISRC',
			upc: 'UPC',
			duration: 'Dauer',
			diskNumber: 'CD Nummer',
			trackNumber: 'Track Nummer',
			releaseDate: 'Veröffentlichungsdatum',
			bpm: 'BPM',
			label: 'Label',
			recordType: 'Art der Aufnahme',
			genres: 'Genres',
			tracklist: 'Trackliste'
		}
	},
	search: {
		startSearching: 'Suche starten!',
		description:
			'Du kannst einen Titel, ein ganzes Album, einen Künstler, eine Playlist suchen ... alles! Du kannst auch einen Deezer-Link einfügen',
		fans: '{n} Fans',
		noResults: 'Keine Ergebnisse',
		noResultsTrack: 'Keine Tracks gefunden',
		noResultsAlbum: 'Keine Alben gefunden',
		noResultsArtist: 'Keinen Künstler gefunden',
		noResultsPlaylist: 'Keine Playlist gefunden'
	},
	searchbar: 'Suche nach allem, was dir gefällt (oder füge einfach einen Link ein)',
	downloads: 'Downloads',
	toasts: {
		addedToQueue: '{item} zur Warteschlange hinzugefügt',
		alreadyInQueue: '{item} ist bereits in der Warteschlange!',
		finishDownload: '{item} vollständig heruntergeladen.',
		allDownloaded: 'Alle Downloads abgeschlossen!',
		refreshFavs: 'Abgeschlossene Downloads neu laden!',
		loggingIn: 'Einloggen',
		loggedIn: 'Eingeloggt',
		alreadyLogged: 'Bereits eingeloggt',
		loginFailed: 'Login fehlgeschlagen',
		loggedOut: 'Ausgeloggt',
		cancellingCurrentItem: 'Aktuelle Auswahl abbrechen.',
		currentItemCancelled: 'Aktuelle Auswahl wurde abgebrochen',
		startAddingArtist: '{artist} Alben werden hinzugefügt',
		finishAddingArtist: '{artist} Alben wurden hinzugefügt',
		startConvertingSpotifyPlaylist: 'Konvertierern von Spotify-Tracks zu Deezer-Tracks',
		finishConvertingSpotifyPlaylist: 'Spotify Playlist convertiert'
	},
	settings: {
		title: 'Einstellungen',
		languages: 'Sprachen',
		login: {
			title: 'Login',
			loggedIn: 'Du bist eingeloggt als {username}',
			arl: {
				question: 'Wie bekomme ich meine eigene ARL?',
				update: 'Update ARL'
			},
			logout: 'Logout'
		},
		appearance: {
			title: 'Design',
			slimDownloadTab: 'schmaler Download-Tab'
		},
		downloadPath: {
			title: 'Download Pfad'
		},
		templates: {
			title: 'Vorlagen',
			tracknameTemplate: 'Vorlage für den Tracknamen',
			albumTracknameTemplate: 'Vorlage für Tracks in einem Album',
			playlistTracknameTemplate: 'Vorlage für Tracks in einer Playlist'
		},
		folders: {
			title: 'Folders',
			createPlaylistFolder: 'Ordner für Playlist erstellen',
			playlistNameTemplate: 'Vorlage für Playlist-Ordner',
			createArtistFolder: 'Ordner für Künstler erstellen',
			artistNameTemplate: 'Vorlage für Künstler-Ordner',
			createAlbumFolder: 'Ordner für Album erstellen',
			albumNameTemplate: 'Vorlage für Album-Ordner',
			createCDFolder: 'Ordner für CDs erstellen',
			createStructurePlaylist: 'Erstellen von Künstler-, Alben- und CD-Ordnern auch für Playlists',
			createSingleFolder: 'Ordner für einzelne Titel erstellen'
		},
		trackTitles: {
			title: 'Songtitel',
			padTracks: 'Einheitliche Länge der Titelnummern (voranstehende Nullen werden ergänzt)',
			paddingSize: 'Innenabstand überschreiben',
			illegalCharacterReplacer: 'Unzulässige Zeichen ersetzen'
		},
		downloads: {
			title: 'Downloads',
			queueConcurrency: 'Gleichzeitige Downloads',
			maxBitrate: {
				title: 'Bevorzugte Bitrate',
				9: 'FLAC 1411kbps',
				3: 'MP3 320kbps',
				1: 'MP3 128kbps'
			},
			overwriteFile: {
				title: 'Soll ich die Dateien überchreiben?',
				y: 'Ja überschreibe die Dateien',
				n: 'Nein überschreibe die Dateien nicht',
				t: 'Überschreibe nur die Tags',
				b: 'Nein, behalte beide Dateien und füge der Kopie eine Nummer hinzu'
			},
			fallbackBitrate: 'Falls gewünschte Bitrate nicht verfügbar, auf niedrigere Bitrate zurückgreifen',
			fallbackSearch: 'Zur Suche zurückkehren, wenn der Song nicht verfügbar ist',
			logErrors: 'Protokolldatei für Fehler im Download-Ordner erstellen',
			logSearched: 'Protokolldatei für gesuchte Titel erstellen',
			createM3U8File: 'Erstelle Playlist-Datei (M3U8)',
			syncedLyrics: 'Erstelle synchrone Lyrics-Datei (.lyr)',
			playlistFilenameTemplate: 'Vorlage für den Namen der Playlist',
			saveDownloadQueue: 'Download-Warteschlange beim Schließen der App speichern'
		},
		covers: {
			title: 'Album Cover',
			saveArtwork: 'Cover speichern',
			coverImageTemplate: 'Vorlage für den Covernamen',
			saveArtworkArtist: 'Speichere das Künstlerbild',
			artistImageTemplate: 'Vorlage des Künstlerbildes',
			localArtworkSize: 'Lokale Grafikgröße',
			embeddedArtworkSize: 'Eingebettete Grafikgröße',
			localArtworkFormat: {
				title: 'Welches Datei-Format soll das Cover haben?',
				jpg: 'Ein jpg Bild',
				png: 'Ein png Bild',
				both: 'Beides (jpg + png)'
			},
			jpegImageQuality: 'JPEG Qualität'
		},
		tags: {
			head: 'Welche Tags sollen gespeichert werden?',
			title: 'Titel',
			artist: 'Künstler',
			album: 'Album',
			cover: 'Cover',
			trackNumber: 'Titelnummer',
			trackTotal: 'Titelanzahl',
			discNumber: 'CD Nummer',
			discTotal: 'CDs insgesamt',
			albumArtist: 'Album Künstler',
			genre: 'Genre',
			year: 'Jahr',
			date: 'Datum',
			explicit: 'Explizite Lyrics',
			isrc: 'ISRC',
			length: 'Titel Länge',
			barcode: 'Album Barcode (UPC)',
			bpm: 'BPM',
			replayGain: 'Wiedergabe Lautstärke',
			label: 'Album Plattenlabel',
			lyrics: 'Nicht synchronisierte Texte',
			copyright: 'Copyright',
			composer: 'Komponist',
			involvedPeople: 'Mitwirkende Personen'
		},
		other: {
			title: 'Sonstige',
			savePlaylistAsCompilation: 'Speichere Playlist als Zusammenstellung',
			useNullSeparator: 'Verwende Nulltrennzeichen',
			saveID3v1: 'Speichere ID3v1 ebenfalls',
			multiArtistSeparator: {
				title: 'Wie möchtest du die Künstler trennen?',
				nothing: 'Speichere nur den Hauptkünstler',
				default: 'Verwende Standard Spezifikationen',
				andFeat: 'Verwende & und feat.',
				using: 'Verwende "{separator}"'
			},
			singleAlbumArtist: 'Nur den Hauptkünstler speichern',
			albumVariousArtists: 'Verschiedene Künstler" im Album Künstler Tag behalten',
			removeAlbumVersion: 'Entferne die "Album Version" vom Songtitel',
			removeDuplicateArtists: 'Kombinationen von Künstlern entfernen',
			dateFormat: {
				title: 'Datumsformatierung für FLAC Dateien',
				year: 'JJJJ',
				month: 'MM',
				day: 'TT'
			},
			featuredToTitle: {
				title: 'Was soll ich mit featured Artists machen?',
				0: 'Nichts',
				1: 'Vom Titel entfernen',
				3: 'Vom Titel und Albumtitel entfernen',
				2: 'Zu dem Titel hinzufügen'
			},
			titleCasing: 'Titel-Schreibweise',
			artistCasing: 'Künstler-Schreibweise',
			casing: {
				nothing: 'Unbearbeitet lassen',
				lower: 'klein',
				upper: 'GROSS',
				start: 'Wortanfang Gross',
				sentence: 'Satzanfang gross'
			},
			previewVolume: 'Vorschau der Lautstärke',
			executeCommand: {
				title: 'Befehl, der nach dem Download ausgeführt werden soll',
				description: 'Leer lassen ohne Aktion'
			}
		},
		spotify: {
			title: 'Spotify Features',
			clientID: 'Spotify Client ID',
			clientSecret: 'Spotify Client Secret',
			username: 'Spotify Benutzername'
		},
		reset: 'Auf Standardwerte zurücksetzen',
		save: 'Speichern',
		toasts: {
			init: 'Einstellungen geladen!',
			update: 'Einstellungen aktualisiert!',
			ARLcopied: 'ARL wurde in die Zwischenablage kopiert'
		}
	},
	sidebar: {
		home: 'Home',
		search: 'Suche',
		charts: 'Charts',
		favorites: 'Favoriten',
		linkAnalyzer: 'Link Analyse',
		settings: 'Einstellungen',
		about: 'Info'
	},
	tracklist: {
		downloadSelection: 'Downloads'
	}
}

export default de
