const pt = {
	globals: {
		welcome: 'Bem-vindo ao deemix',
		back: 'voltar',
		loading: 'A carregar',
		download: 'Transferir {thing}',
		by: 'por {artist}',
		in: 'em {album}',
		download_hint: 'Transferir',
		play_hint: 'Tocar',
		toggle_download_tab_hint: 'Expandir/Recolher',
		clean_queue_hint: 'Limpar Finalizados',
		cancel_queue_hint: 'Cancelar Tudo',
		listTabs: {
			empty: '',
			all: 'Tudo',
			top_result: 'melhor resultado',
			album: 'álbum | álbums',
			artist: 'artista | artistas',
			single: 'single | singles',
			title: 'título | títulos',
			track: 'faixa | faixas',
			trackN: '0 faixas | {n} faixa | {n} faixas',
			releaseN: '0 lançamentos | {n} lançamento | {n} lançamento',
			playlist: 'lista de reprodução | listas de reprodução',
			compile: 'compilação | compilações',
			ep: 'ep | eps',
			spotifyPlaylist: 'lista de reprodução spotify | listas de reprodução spotify',
			releaseDate: 'data de lançamento',
			error: 'erro'
		}
	},
	about: {
		titles: {
			usefulLinks: 'Links Úteis',
			bugReports: 'Relatório de erros',
			contributing: 'Contribuir',
			donations: 'Doações',
			license: 'Licenças'
		},
		subtitles: {
			bugReports: 'Existe alguma coisa que não funciona no deemix? Informa-nos!',
			contributing: 'Queres contribuir para o projecto? Podes fazê-lo de diferentes formas!',
			donations: 'Desejas contribuir monetariamente? Faz uma doação!'
		},
		usesLibrary:
			'Esta aplicação usa a biblioteca <strong>deemix</strong>, que poderás usar para desenvolver o teu proprio UI para o deemix.',
		thanks: `Agradeço a <strong>rtonno</strong>, <strong>uhwot</strong> and <strong>lollilol</strong> por me ajudarem neste projeto e a <strong>BasCurtiz</strong> por elaborarem o ícone.`,
		upToDate: {
			text: `Mantem-te atualizado seguindo o {newsChannel} no Telegram.`,
			newsChannel: 'canal de notícias'
		},
		officialWebsite: 'Site Oficial',
		officialRepo: 'Repositório Oficial da Biblioteca',
		officialWebuiRepo: 'Repositório Oficial WebUI',
		officialSubreddit: 'Subreddit Oficial',
		newsChannel: 'Canal de Notícias',
		questions: {
			text: `Caso tenhas alguma duvida ou problema com a app, primeiro procura por uma solução no {subreddit}. Caso não encontres nada podes criar um post com a tua questão no subreddit.`,
			subreddit: 'subreddit'
		},
		beforeReporting: `Antes de reportares um bug certifica-te que estás a correr a versão mais recente e que o que queres reportar é mesmo um bug e não algo que apenas não funciona do teu lado.`,
		beSure: `Certifica-te que o erro é reprodutivel noutros dispositivos e <strong>NÃO</strong> reportes um bug que já tenha sido reportado.`,
		duplicateReports: 'Bug reports duplicados serão fechados, mantém-te atento a isso.',
		dontOpenIssues: `<strong>NÃO</strong> abras issues para colocar questões, existe um subreddit para isso.`,
		newUI: {
			text: `Caso sejas fluente em python podes tentar criar um novo UI para a aplicação recorrendo à biblioteca base , ou corrigir erros na biblioteca com um pull request no {repo}.`,
			repo: 'repositório'
		},
		acceptFeatures: `Também aceito funcionalidades não complexas caso possam ser implementadas directamente na app e não na biblioteca.`,
		otherLanguages: `Caso sejas fluente noutra linguagem de programação podes tentar migrar o deemix para outra linguagem de programação!`,
		understandingCode: `Precisas de ajuda a entender o código? Acede a RemixDev no Telegram ou no Reddit.`,
		contributeWebUI: {
			text: `Caso saibas Vue.js (JavaScript), HTML ou CSS podes contribuir para o {webui}.`,
			webui: 'WebUI'
		},
		itsFree: `Deves ter em conta que <strong>que este projecto é gratuito</strong> e <strong>deverás apoiar os artistas que aprecias</strong> antes de apoiares os programadores.`,
		notObligated: `Não te sintas obrigado a doar, agradeço-te na mesma!`,
		lincensedUnder: {
			text: `Este trabalho esta licenciado sobre a {gpl3}.`,
			gpl3: 'GNU Licença publica geral 3.0'
		}
	},
	charts: {
		title: 'Tabelas',
		changeCountry: 'Alterar país',
		download: 'Transferir tabela'
	},
	errors: {
		title: 'Erros para {name}',
		ids: {
			invalidURL: 'URL não reconhecido',
			unsupportedURL: 'URL ainda não suportado',
			ISRCnotOnDeezer: 'Faixa ISRC não disponível no deezer',
			notYourPrivatePlaylist: 'Nao podes baixar listas de reprodução privadas de outros.',
			spotifyDisabled: 'Funcionalidades do Spotify não estão definidas corretamente.',
			trackNotOnDeezer: 'Faixa não encontrada no deezer!',
			albumNotOnDeezer: 'Álbum não encontrado no deezer!',
			notOnDeezer: 'Faixa não encontrada no Deezer!',
			notEncoded: 'Faixa ainda não codificada!',
			notEncodedNoAlternative: 'Faixa ainda não codificada e não foi encontrada alternativa!',
			wrongBitrate: 'Faixa não encontrada no bitrate desejado.',
			wrongBitrateNoAlternative: 'Faixa não encontrada no bitrate desejado e não foi encontrada alternativa!',
			no360RA: 'Faixa não disponível em Reality Audio 360.',
			notAvailable: 'Faixa não disponível nos servidores do deezer!',
			notAvailableNoAlternative: 'Faixa não disponível nos servidores do deezer e não foi encontrada alternativa!'
		}
	},
	favorites: {
		title: 'Favoritos',
		noPlaylists: 'Listas de reprodução não encontradas',
		noAlbums: 'Álbuns favoritos não encontrados',
		noArtists: 'Artistas favoritos não encontrados',
		noTracks: 'Faixas favoritas não encontradas'
	},
	home: {
		needTologin: 'Antes de iniciar transferências é necessário efectuar autenticação na conta Deezer.',
		openSettings: 'Abrir Definições',
		sections: {
			popularPlaylists: 'Listas de reprodução populares',
			popularAlbums: 'Álbuns mais ouvidos'
		}
	},
	linkAnalyzer: {
		info: 'Podes usar esta secção para obteres mais informação sobre o link que estás a tentar transferir.',
		useful:
			'Isto é útil caso estejas a tentar transferir faixas que não estão disponíveis no teu país e queres saber onde estão disponíveis, por exemplo.',
		linkNotSupported: 'Este link ainda não é suportado',
		linkNotSupportedYet: 'Parece que este link ainda não é suportado, tenta analisar outro.',
		table: {
			id: 'ID',
			isrc: 'ISRC',
			upc: 'UPC',
			duration: 'Duração',
			diskNumber: 'Número do disco',
			trackNumber: 'Número da faixa',
			releaseDate: 'Data de lançamento',
			bpm: 'BPM',
			label: 'Editora',
			recordType: 'Tipo de Disco',
			genres: 'Géneros',
			tracklist: 'Lista de faixas'
		}
	},
	search: {
		startSearching: 'Começa a pesquisar!',
		description:
			'Podes perquisar uma música, um álbum inteiro, um artista, uma lista de reprodução... tudo! Também podes colar um link do Deezer',
		fans: '{n} fãs',
		noResults: 'Sem resultados',
		noResultsTrack: 'Faixa não encontrada',
		noResultsAlbum: 'Álbum não encontrado',
		noResultsArtist: 'Artista não encontrado',
		noResultsPlaylist: 'Lista de reprodução não encontrada'
	},
	searchbar: 'Pesquisa o que quiseres (ou cola um link)',
	downloads: 'transferências',
	toasts: {
		addedToQueue: '{item} adicionados à fila',
		alreadyInQueue: '{item} já está na fila!',
		finishDownload: '{item} foi transferido.',
		allDownloaded: 'Todas as transferências terminadas!',
		refreshFavs: 'Actualizar terminados!',
		loggingIn: 'A autenticar',
		loggedIn: 'Autenticado',
		alreadyLogged: 'Já estás autenticado',
		loginFailed: 'Nao foi possivel iniciar sessão',
		loggedOut: 'Desconectado',
		cancellingCurrentItem: 'A cancelar item actual.',
		currentItemCancelled: 'Item actual cancelado.',
		startAddingArtist: 'A adicionar {artist} álbuns à fila',
		finishAddingArtist: 'Adicionados {artist} álbuns à fila',
		startConvertingSpotifyPlaylist: 'A converter faixas do spotify em faixas do deezer',
		finishConvertingSpotifyPlaylist: 'Lista de reprodução do Spotify convertida.'
	},
	settings: {
		title: 'Definições',
		languages: 'Idioma',
		login: {
			title: 'Inicio de Sessão',
			loggedIn: 'Estás autenticado como {username}',
			arl: {
				question: 'Como obter o meu ARL?',
				update: 'Actualizar ARL'
			},
			logout: 'Sair'
		},
		appearance: {
			title: 'Aspecto',
			slimDownloadTab: 'Aba de transferências estreita'
		},
		downloadPath: {
			title: 'Caminho das transferências'
		},
		templates: {
			title: 'Formatos',
			tracknameTemplate: 'Formato do nome de faixa',
			albumTracknameTemplate: 'Formato do nome de Álbum',
			playlistTracknameTemplate: 'Formato do nome de lista de reprodução'
		},
		folders: {
			title: 'Pastas',
			createPlaylistFolder: 'Criar pasta para lista de reprodução',
			playlistNameTemplate: 'Formato da pasta de lista de reprodução',
			createArtistFolder: 'Criar pasta para artista',
			artistNameTemplate: 'Formato da pasta de artista',
			createAlbumFolder: 'Criar pasta para álbum',
			albumNameTemplate: 'Formato da pasta de álbum',
			createCDFolder: 'Criar pasta para CDs',
			createStructurePlaylist: 'Criar estrutura de pastas para listas reprodução',
			createSingleFolder: 'Criar estrutura de pastas para singles'
		},
		trackTitles: {
			title: 'Título',
			padTracks: 'Bloco de Faixas',
			paddingSize: 'Substituir tamanho do preenchimento',
			illegalCharacterReplacer: 'Substituir caractere inválido'
		},
		downloads: {
			title: 'Transferências',
			queueConcurrency: 'Transferências concorrentes',
			maxBitrate: {
				title: 'Bitrate preferencial',
				9: 'FLAC 1411kbps',
				3: 'MP3 320kbps',
				1: 'MP3 128kbps'
			},
			overwriteFile: {
				title: 'Ficheiros existentes. Substituir?',
				y: 'Sim, substituir o ficheiro',
				n: 'Não substituir o ficheiro',
				t: 'Subescrever apenas as etiquetas'
			},
			fallbackBitrate: 'Bitrate fallback',
			fallbackSearch: 'Fallback de pesquisa',
			logErrors: 'Criar histórico para erros',
			logSearched: 'Criar histórico para faixas pesquisadas',
			createM3U8File: 'Criar ficheiro de lista de reprodução',
			syncedLyrics: 'Criar ficheiro .lyr (Letra Sincronizada)',
			playlistFilenameTemplate: 'Formato do nome de ficheiro da lista de reprodução',
			saveDownloadQueue: 'Guardar fila de transferências ao fechar a aplicação'
		},
		covers: {
			title: 'Capas do Álbum',
			saveArtwork: 'Guardar capas',
			coverImageTemplate: 'Modelo do nome da capa',
			saveArtworkArtist: 'Salvar imagem do artista',
			artistImageTemplate: 'Modelo de imagem do artista',
			localArtworkSize: 'Tamanho do trabalho artístico local',
			embeddedArtworkSize: 'Tamanho do trabalho artístico incorporado',
			localArtworkFormat: {
				title: 'Em que formato desejas o trabalho artístico local?',
				jpg: 'Em imagem jpeg',
				png: 'Em imagem png',
				both: 'Em jpeg e em png'
			},
			jpegImageQuality: 'Qualidade de imagem JPEG'
		},
		tags: {
			head: 'Etiquetas a guardar',
			title: 'Título',
			artist: 'Artista',
			album: 'Álbum',
			cover: 'Capa',
			trackNumber: 'Número de faixa',
			trackTotal: 'Total de faixas',
			discNumber: 'Número do Disco',
			discTotal: 'Total de Discos',
			albumArtist: 'Artista do Álbum',
			genre: 'Género',
			year: 'Ano',
			date: 'Data',
			explicit: 'Letra Explícita',
			isrc: 'ISRC',
			length: 'Duração da faixa',
			barcode: 'Código de barras do álbum (UPC)',
			bpm: 'BPM',
			replayGain: 'ReplayGain',
			label: 'Editora do álbum',
			lyrics: 'Letra da música não sincronizada',
			copyright: 'Direitos de Autor',
			composer: 'Compositor',
			involvedPeople: 'Pessoas envolvidas'
		},
		other: {
			title: 'Outros',
			savePlaylistAsCompilation: 'Guardar listas de reprodução como compilação',
			useNullSeparator: 'Usar separador nulo',
			saveID3v1: 'Também guardar ID3v1',
			multiArtistSeparator: {
				title: 'Como queres separarar os artistas?',
				nothing: 'Guardar apenas o artista principal',
				default: 'Usar especificação padrão',
				andFeat: 'Usar & e feat.',
				using: 'Usar "{separator}"'
			},
			singleAlbumArtist: 'Guardar apenas o artista principal do álbum',
			albumVariousArtists: 'Manter "Various Artists" nos Artistas do Álbum',
			removeAlbumVersion: 'Remover "Album Version" do título da faixa',
			removeDuplicateArtists: 'Remover combinação de artistas',
			dateFormat: {
				title: 'Formato de data nos ficheiros FLAC',
				year: 'AAAA',
				month: 'MM',
				day: 'DD'
			},
			featuredToTitle: {
				title: 'O que devo fazer com artistas convidados/participações?',
				0: 'Nada',
				1: 'Remover do título',
				3: 'Remover do título e do título do album',
				2: 'Movê-lo para o título'
			},
			titleCasing: 'Caixa do Título',
			artistCasing: 'Caixa do Artista',
			casing: {
				nothing: 'Manter inalterado',
				lower: 'minusculas',
				upper: 'MAIÚSCULAS',
				start: 'Início De Cada Palavra',
				sentence: 'Como uma frase'
			},
			previewVolume: 'Volume de Pré-visualização',
			executeCommand: {
				title: 'Comando a executar após transferir',
				description: 'Deixar em branco para nenhuma acção'
			}
		},
		spotify: {
			title: 'Funcionalidades Spotify',
			clientID: 'Spotify clientID',
			clientSecret: 'Spotify Client Secret',
			username: 'nome de utilizador Spotify'
		},
		reset: 'Repor configurações padrão',
		save: 'Guardar',
		toasts: {
			init: 'Configurações carregadas!',
			update: 'Configurações actualizadas',
			ARLcopied: 'ARL copiado para area de transferencia'
		}
	},
	sidebar: {
		home: 'início',
		search: 'pesquisa',
		charts: 'tabelas',
		favorites: 'favoritos',
		linkAnalyzer: 'analizador de links',
		settings: 'definições',
		about: 'sobre'
	},
	tracklist: {
		downloadSelection: 'Transferir seleccionados'
	}
}

export default pt
