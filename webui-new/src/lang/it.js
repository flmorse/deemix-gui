const it = {
	globals: {
		welcome: 'Benvenuto su deemix',
		back: 'indietro',
		loading: 'caricamento',
		download: 'Scarica {thing}',
		by: 'di {artist}',
		in: 'in {album}',
		download_hint: 'Scarica',
		play_hint: 'Riproduci',
		toggle_download_tab_hint: 'Espandi/Riduci',
		clean_queue_hint: 'Pulisci Lista',
		cancel_queue_hint: 'Cancella tutti i download',
		open_downloads_folder: 'Apri la cartella di download',
		cut: 'taglia',
		copy: 'copia',
		copyLink: 'copia link',
		copyImageLink: 'copia link immagine',
		copyDeezerLink: 'copia link deezer',
		paste: 'incolla',
		listTabs: {
			all: 'tutto',
			top_result: 'miglior risultato',
			album: 'album',
			artist: 'artista | artisti',
			single: 'singolo | singoli',
			title: 'titolo | titoli',
			track: 'brano | brani',
			releaseN: '0 dischi | {n} disco | {n} dischi',
			playlist: 'playlist',
			compile: 'compilation',
			bundle: 'collezione | collezioni',
			ep: 'ep',
			more: 'Altri album',
			featured: 'Compare in',
			spotifyPlaylist: 'playlist spotify',
			releaseDate: 'data di uscita',
			error: 'errore',
			empty: '',
			trackN: '0 brani | {n} brano | {n} brani',
			albumN: '{n} album',
			artistN: '0 artisti | {n} artista | {n} artisti',
			playlistN: '{n} playlist'
		}
	},
	about: {
		appStatus: {
			online: 'app online',
			offline: 'app offline'
		},
		updates: {
			currentVersion: 'Versione attuale',
			currentWebuiVersion: 'Versione WebUI attuale',
			versionNotAvailable: 'N/A',
			updateAvailable: `Non stai usando l'ultima versione disponibile: {version}`,
			deemixVersion: 'Versione libreria deemix'
		},
		titles: {
			usefulLinks: 'Link Utili',
			bugReports: 'Segnalazione di bug',
			contributing: 'Contribuire al progetto',
			donations: 'Donazioni',
			license: 'Licenza'
		},
		subtitles: {
			bugReports: "C'è qualcosa di deemix che non funziona? Faccelo sapere!",
			contributing: 'Vuoi contribuire a questo progetto? Puoi farlo in più modi!',
			donations: 'Vuoi dare una mano economicamente? Puoi fare una donazione!'
		},
		usesLibrary:
			'Questa app utilizza la libreria <strong>deemix</strong>, che puoi utilizzare per creare la tua Interfaccia Utente per deemix.',
		thanks: `Un ringraziamento a <strong>rtonno</strong>, <strong>uhwot</strong> e <strong>lollilol</strong> per l'aiuto che mi stanno dando in questo progetto e a <strong>BasCurtiz</strong> per aver creato l'icona.`,
		upToDate: {
			text: `Rimani al passo con gli ultimi aggiornamenti seguendo il {newsChannel} su Telegram.`,
			newsChannel: 'canale delle news'
		},
		officialWebsite: 'Sito Ufficiale',
		officialRepo: 'Repository Ufficiale della Libreria',
		officialWebuiRepo: `Repository Ufficiale dell'Interfaccia Web`,
		officialSubreddit: 'Subreddit Ufficiale',
		newsChannel: 'Canale delle news',
		questions: {
			text: `Se dovessi avere domande o problemi con l'app, cerca prima una soluzione nel {subreddit}. Se non trovi nulla, puoi postare li il tuo problema.`,
			subreddit: 'subreddit ufficiale'
		},
		beforeReporting: `Prima di segnalare un problema controlla che quella che stai usando sia l'ultima versione dell'app e che ciò che vuoi segnalare sia effettivamente un problema e non qualcosa che non funziona solamente a te.`,
		beSure: `Assicurati che il problema sia riproducibile su altri PC e <strong>NON</strong> segnalare un problema che è già stato segnalato.`,
		duplicateReports: 'Le segnalazioni doppie verranno chiuse, tienilo presente.',
		dontOpenIssues: `<strong>NON</strong> aprire issues per porre domande, per quello esiste un subreddit.`,
		newUI: {
			text: `Se te la cavi in python puoi provare a creare una nuova Interfaccia Utente per l'app usando la libreria base, oppure puoi correggere dei problemi nella libreria con una pull request nella {repo}.`,
			repo: 'repo'
		},
		acceptFeatures: `Accetto anche funzionalità, ma non cose complesse, dato che possono essere implementate direttamente nell'app invece che nella libreria.`,
		otherLanguages: `Se te la cavi in altri linguaggi di programmazione, puoi provare a scrivere deemix in quei linguaggi!`,
		understandingCode: `Serve aiuto per capire il codice? Scrivi a RemixDev su Telegram o Reddit`,
		contributeWebUI: {
			text: `Se te la cavi con Vue.js (JavaScript), HTML o CSS, puoi contribuire alla {webui}.`,
			webui: 'WebUI'
		},
		itsFree: `Ricordati che <strong>questo è un progetto gratuito</strong> e che <strong>dovresti supportare gli artisti che ami</strong> prima di supportare gli sviluppatori.`,
		notObligated: `Non sentirti obbligato a donare, mi stai simpatico lo stesso!`,
		lincensedUnder: {
			text: `Questo progetto è sotto la licenza {gpl3}.`,
			gpl3: 'GNU General Public License 3.0'
		}
	},
	charts: {
		title: 'Classifiche',
		changeCountry: 'Cambia Paese',
		download: 'Scarica Classifica'
	},
	errors: {
		title: 'Errori riguardanti {name}',
		ids: {
			invalidURL: 'URL non riconosciuto',
			unsupportedURL: 'URL non ancora supportato',
			ISRCnotOnDeezer: 'Questo ISRC non è disponibile su Deezer',
			notYourPrivatePlaylist: 'Non puoi scaricare le playlist private degli altri.',
			spotifyDisabled: 'Spotify Features non è impostato correttamente.',
			trackNotOnDeezer: 'Brano non trovato su Deezer!',
			albumNotOnDeezer: 'Album non trovato su Deezer!',
			notOnDeezer: 'Brano non disponibile su Deezer!',
			notEncoded: 'Brano non ancora codificato!',
			notEncodedNoAlternative: 'Brano non ancora codificato e nessuna alternativa trovata!',
			wrongBitrate: 'Brano non trovato con il bitrate specificato.',
			wrongBitrateNoAlternative: 'Brano non trovato con il bitrate specificato e nessuna alternativa trovata!',
			no360RA: 'Brano non disponibile in Reality Audio 360.',
			notAvailable: 'Brano non presente sui server di Deezer!',
			notAvailableNoAlternative: 'Brano non presente sui server di Deezer e nessuna alternativa trovata!',
			noSpaceLeft: 'Spazio su disco esaurito!',
			albumDoesntExists: 'Il brano non ha nessun album, impossibile ottenere informazioni'
		}
	},
	favorites: {
		title: 'Preferiti',
		noPlaylists: 'Nessuna Playlist preferita trovata',
		noAlbums: 'Nessun Album preferito trovato',
		noArtists: 'Nessun Artista preferito trovato',
		noTracks: 'Nessun Brano preferito trovato'
	},
	home: {
		needTologin: 'Devi accedere al tuo account Deezer, fino a quel momento non potrai scaricare nulla.',
		openSettings: 'Apri le impostazioni',
		sections: {
			popularPlaylists: 'Playlist Popolari',
			popularAlbums: 'Album più riprodotti'
		}
	},
	linkAnalyzer: {
		info:
			'Puoi utilizzare questa sezione per avere più informazioni riguardanti il link che stai cercando di scaricare.',
		useful:
			'Ciò può esserti utile se stai cercando di scaricare brani che non sono disponibili nel tuo Paese e vuoi sapere in quale Paese sono invece disponibili, per esempio.',
		linkNotSupported: 'Questo link non è ancora supportato',
		linkNotSupportedYet: 'Sembra che questo link non sia ancora supportato, prova ad analizzarne un altro.',
		table: {
			id: 'ID',
			isrc: 'ISRC',
			upc: 'UPC',
			duration: 'Durata',
			diskNumber: 'Numero Disco',
			trackNumber: 'Numero Traccia',
			releaseDate: 'Data di uscita',
			bpm: 'BPM',
			label: 'Etichetta',
			recordType: 'Tipologia di registrazione',
			genres: 'Generi',
			tracklist: 'Lista tracce'
		}
	},
	search: {
		startSearching: 'Inizia a cercare!',
		description:
			'Puoi cercare un brano, un intero album, un artista, una playlist.... quello che vuoi! Puoi anche incollare un link di Deezer',
		fans: '{n} fan',
		noResults: 'Nessun risultato',
		noResultsTrack: 'Nessun brano trovato',
		noResultsAlbum: 'Nessun album trovato',
		noResultsArtist: 'Nessun artista trovato',
		noResultsPlaylist: 'Nessuna playlist trovata'
	},
	searchbar: 'Cerca qualsiasi cosa (o incolla semplicemente un link)',
	downloads: 'download',
	toasts: {
		restoringQueue: 'Ripristinando la coda di download...',
		queueRestored: 'Coda di download ripristinata!',
		addedToQueue: '{item} aggiunto alla coda',
		addedMoreToQueue: '{n} oggetti aggiunti alla coda',
		alreadyInQueue: '{item} è già nella coda!',
		finishDownload: '{item} ha finito di scaricarsi.',
		allDownloaded: 'Tutti i download completati!',
		refreshFavs: 'Preferiti ricaricati!',
		loggingIn: 'Effettuando il login...',
		loggedIn: 'Login effettuato',
		alreadyLogged: 'Sei già loggato',
		loginFailed: 'Impossibile loggarsi',
		loggedOut: 'Disconnesso',
		cancellingCurrentItem: 'Cancellando download corrente.',
		currentItemCancelled: 'Download corrente cancellato.',
		startAddingArtist: 'Aggiungendo gli album di {artist} alla coda',
		finishAddingArtist: 'Aggiunto gli album di {artist} alla coda',
		startConvertingSpotifyPlaylist: 'Convertendo i brani da spotify a deezer',
		finishConvertingSpotifyPlaylist: 'Playlist di spotify convertita',
		loginNeededToDownload: 'Devi accedere prima di poter scaricare brani!',
		deezerNotAvailable: 'Deezer non è disponibile nel tuo paese. Dovresti usare una VPN.',
		startGeneratingItems: 'Elaborando {n} oggetti...',
		finishGeneratingItems: '{n} oggetti generati.'
	},
	settings: {
		title: 'Impostazioni',
		languages: 'Lingue',
		login: {
			title: 'Login',
			loggedIn: 'Sei loggato come {username}',
			arl: {
				question: 'Come ottengo il mio ARL?',
				update: 'Aggiorna ARL'
			},
			logout: 'Disconnettiti',
			login: 'Accedi tramite deezer.com'
		},
		loginWithCredentials: {
			title: 'Login con credentiali',
			login: 'Login'
		},
		appearance: {
			title: 'Aspetto',
			slimDownloadTab: 'Tab dei download slim',
			slimSidebar: 'Sidebar slim'
		},
		downloadPath: {
			title: 'Cartella di download'
		},
		templates: {
			title: 'Template',
			tracknameTemplate: 'Template nome brano',
			tracknameAvailableVariables: 'Variabili nome brano disponibili',
			albumTracknameTemplate: 'Template nome brano negli Album',
			albumTracknameAvailableVariables: 'Variabili nome brano negli Album disponibili',
			playlistTracknameTemplate: 'Template nome brano nelle Playlist',
			playlistTracknameAvailableVariables: 'Variabili nome brano nelle Playlist disponibili'
		},
		folders: {
			title: 'Cartelle',
			createPlaylistFolder: 'Crea cartelle per le Playlist',
			playlistNameTemplate: 'Template nome della cartella Playlist',
			createArtistFolder: 'Crea cartelle per gli Artisti',
			artistNameTemplate: 'Template nome della cartella Artista',
			createAlbumFolder: 'Crea cartelle per gli Album',
			albumNameTemplate: 'Template nome della cartella Album',
			createCDFolder: 'Crea cartelle per i CD',
			createStructurePlaylist: 'Crea la struttura di cartelle per le Playlist',
			createSingleFolder: 'Crea la struttura di cartelle per i brani singoli'
		},
		trackTitles: {
			title: 'Titoli brani',
			padTracks: 'Aggiungi zeri ai numeri di traccia',
			paddingSize: 'Sovrascrivi il numero di zeri da aggiungere',
			illegalCharacterReplacer: 'Rimpiazza caratteri illegali con'
		},
		downloads: {
			title: 'Download',
			queueConcurrency: 'Download simultanei',
			maxBitrate: {
				title: 'Bitrate preferito',
				9: 'FLAC 1411kbps',
				3: 'MP3 320kbps',
				1: 'MP3 128kbps'
			},
			overwriteFile: {
				title: 'Dovrei sovrascrivere i file già scaricati?',
				y: 'Si, sovrascrivi i file',
				n: 'No, non sovrascrivere i file',
				t: 'Sovrascrivi solo i tag',
				b: 'No, mantieni entrambi i file e aggiungi un numero al duplicato',
				e: 'No, e non tener conto della estensione del file'
			},
			fallbackBitrate: 'Utilizza bitrate più bassi se il bitrate preferito non è disponibile',
			fallbackSearch: 'Cerca il brano se il link originale non è disponibile',
			logErrors: 'Crea file di log per gli errori',
			logSearched: 'Crea file di log per le alternative cercate',
			syncedLyrics: 'Crea i file .lyr (Testi Sincronizzati)',
			createM3U8File: 'Crea i file playlist',
			playlistFilenameTemplate: 'Template nome del file playlist',
			saveDownloadQueue: "Salva la coda di download quando chiudi l'app"
		},
		covers: {
			title: 'Copertine',
			saveArtwork: 'Salva copertina album',
			coverImageTemplate: 'Template nome copertina album',
			saveArtworkArtist: 'Salva copertina artista',
			artistImageTemplate: 'Template nome copertina artista',
			localArtworkSize: 'Dimensioni copertine locali',
			embeddedArtworkSize: 'Dimensioni copertine incorporate',
			localArtworkFormat: {
				title: 'Come vuoi salvare le copertine locali?',
				jpg: 'In jpeg',
				png: 'In png',
				both: 'Sia in jpeg che in png'
			},
			jpegImageQuality: 'Qualità immagine JPEG',
			embeddedArtworkPNG: 'Salva copertina incorporata come PNG',
			embeddedPNGWarning: 'Le immagini PNG non sono usate ufficialmente da Deezer e potrebbero dare problemi',
			imageSizeWarning:
				'Dimensioni maggiori di x1200 non sono usate ufficialmente da Deezer, potresti incontrare problemi',
			coverDescriptionUTF8: 'Salva la descrizione della copertina in UTF8 (iTunes Cover Fix)'
		},
		tags: {
			head: 'Quali tag salvare',
			title: 'Titolo',
			artist: 'Artista',
			album: 'Album',
			cover: 'Copertina',
			trackNumber: 'Numero Traccia',
			trackTotal: 'Tracce Totali',
			discNumber: 'Numero Disco',
			discTotal: 'Dischi Totali',
			albumArtist: "Artista dell'album",
			genre: 'Genere',
			year: 'Anno',
			date: 'Data',
			explicit: 'Testo Esplicito',
			isrc: 'ISRC',
			length: 'Durata Traccia',
			barcode: "Barcode dell'album (UPC)",
			bpm: 'BPM',
			replayGain: 'Replay gain',
			label: 'Casa Discografica',
			lyrics: 'Testo non Sincronizzato',
			syncedLyrics: 'Testo Sincronizzato',
			copyright: 'Copyright',
			composer: 'Compositori',
			involvedPeople: 'Persone Coinvolte',
			source: 'Sorgente e ID brano'
		},
		other: {
			title: 'Altro',
			savePlaylistAsCompilation: 'Salva le playlist come Compilation',
			useNullSeparator: 'Usa il carattere NULL come separatore',
			saveID3v1: "Salva anche l'ID3v1",
			multiArtistSeparator: {
				title: 'Come vuoi separare gli artisti?',
				nothing: "Salva solo l'artista principale",
				default: 'Usando la specificazione standard',
				andFeat: 'Usando & e feat.',
				using: 'Usando "{separator}"'
			},
			singleAlbumArtist: "Salva solo l'artista dell'album principale",
			albumVariousArtists: 'Lascia "Artisti Vari" negli artisti dell\'album',
			removeAlbumVersion: 'Rimuovi "Album Version" dal titolo del brano',
			removeDuplicateArtists: 'Rimuovi le combinazioni di artisti',
			dateFormat: {
				title: 'Formato della data per i file FLAC',
				year: 'AAAA',
				month: 'MM',
				day: 'GG'
			},
			featuredToTitle: {
				title: 'Cosa dovrei fare con i feat?',
				0: 'Niente',
				1: 'Rimuovili dal titolo',
				3: "Rimuovili dal titolo e dal nome dell'album",
				2: 'Spostali sul titolo'
			},
			titleCasing: 'Formato testo dei titoli',
			artistCasing: 'Formato testo degli artisti',
			casing: {
				nothing: 'Non cambiare',
				upper: 'TUTTO MAIUSCOLO',
				lower: 'tutto minuscolo',
				start: 'Prima Lettera Maiuscola',
				sentence: 'Come una frase'
			},
			previewVolume: 'Volume Anteprime',
			executeCommand: {
				title: 'Comando da eseguire dopo il download',
				description: 'Lascia vuoto per nessuna azione'
			}
		},
		spotify: {
			title: 'Spotify Features',
			clientID: 'Spotify clientID',
			clientSecret: 'Spotify Client Secret',
			username: 'Spotify username',
			question: 'Come attivo le Spotify Features?'
		},
		reset: 'Reimposta Default',
		resetMessage: 'Sei sicuro di voler tornare alle impostazioni di default?',
		save: 'Salva',
		toasts: {
			init: 'Impostazioni caricate!',
			update: 'Impostazioni aggiornate!',
			reset: 'Impostazioni di default ripristinate!',
			ARLcopied: 'ARL copiato negli appunti'
		},
		logs: {
			title: 'Log',
			areLogsActive: 'Attivi'
		}
	},
	sidebar: {
		home: 'home',
		search: 'ricerca',
		charts: 'classifiche',
		favorites: 'preferiti',
		linkAnalyzer: 'analizza link',
		settings: 'impostazioni',
		logs: 'log',
		about: 'info'
	},
	tracklist: {
		downloadSelection: 'Scarica selezionati'
	},
	logs: {
		event: 'Evento',
		data: 'Dati'
	}
}

export default it
