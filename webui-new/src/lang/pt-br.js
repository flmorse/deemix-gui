const pt_br = {
	globals: {
		welcome: 'bem vindo ao deemix',
		back: 'voltar',
		loading: 'carregando',
		download: 'Baixar {thing}',
		by: 'por {artist}',
		in: 'em {album}',
		download_hint: 'Baixar',
		play_hint: 'Reproduzir',
		toggle_download_tab_hint: 'Expandir/Diminuir',
		clean_queue_hint: 'Limpar',
		cancel_queue_hint: 'Cancelar Todos',
		listTabs: {
			empty: '',
			all: 'todos',
			top_result: 'resultado principal',
			album: 'álbum | álbuns',
			artist: 'artista | artistas',
			single: 'single | singles',
			title: 'título | títulos',
			track: 'faixa | faixas',
			trackN: '0 faixas | {n} faixa | {n} faixas',
			releaseN: '0 lançamento | {n} lançamento | {n} lançamentos',
			playlist: 'playlist | playlists',
			compile: 'compilação | compilações',
			ep: 'ep | eps',
			spotifyPlaylist: 'playlist do spotify | playlists do spotify',
			releaseDate: 'data de lançamento',
			error: 'erro'
		}
	},
	about: {
		titles: {
			usefulLinks: 'Links Úteis',
			bugReports: 'Relatar Bugs',
			contributing: 'Contribuições',
			donations: 'Doações',
			license: 'Licença'
		},
		subtitles: {
			bugReports: 'Há algo não funcionando no deemix? Nos diga!',
			contributing: 'Você quer contribuir para este projeto? Você pode fazer isso de diferentes maneiras!',
			donations: 'Você quer contribuir monetariamente? Você pode fazer uma doação!'
		},
		usesLibrary:
			'Esse app usa a biblioteca do <strong>deemix</strong>, no qual você pode usar para criar sua própria UI para o deemix',
		thanks: `Agradecimentos para <strong>rtonno</strong>, <strong>uhwot</strong> e <strong>lollilol</strong> por ajudar neste projeto, e para <strong>BasCurtiz</strong> por fazerem o ícone`,
		upToDate: {
			text: `Para mais novidades siga o {newsChannel} no Telegram.`,
			newsChannel: 'news channel'
		},
		officialWebsite: 'Site Oficial',
		officialRepo: 'Repositório da Biblioteca Oficial',
		officialWebuiRepo: 'Repositório da WebUI Oficial',
		officialSubreddit: 'Subreddit Oficial',
		newsChannel: 'Canal de Notícias',
		questions: {
			text: `Se você tiver dúvidas ou problemas com o app, procure uma solução em {subreddit} primeiro. Caso você não encontre, você pode fazer um post explicando seu problema no subreddit.`,
			subreddit: 'subreddit'
		},
		beforeReporting: `Antes de reportar um bug, tenha certeza que você está rodando a versão mais recente do app, e o que você quer reportar seja realmente um bug e não algo que esteja acontecendo especialmente com você.`,
		beSure: `Certifique-se que o bug é reproduzivel em outras máquinas e também <strong>NÃO</strong> reporte um bug se ele já foi reportado.`,
		duplicateReports: 'Reportes de bugs duplicados serão fechados, então fique atento a isso.',
		dontOpenIssues: `<strong>NÃO</strong> abra tópicos para fazer perguntas, há o subreddit para isso.`,
		newUI: {
			text: `Se você é fluente em Phython, você pode tentar fazer uma nova UI para o app usando a biblioteca base, ou consertar bugs da biblioteca com um pull request em {repo}.`,
			repo: 'repo'
		},
		acceptFeatures: `Eu aceito funcionalidades extras também, mas nada de coisas complexas, desde que ela possa ser implementada no app, e não na biblioteca.`,
		otherLanguages: `Se você for fluente em outra linguagem de programação, você pode tentar portar o deemix para outra linguagem!`,
		understandingCode: `Você precisa de ajuda para entender o código? Mande mensagem no RemixDex pelo Telegram ou pelo Reddit.`,
		contributeWebUI: {
			text: `Se você souber Vue.js (JavaScript), HTML ou CSS você pode contribuir para o {webui}.`,
			webui: 'WebUI'
		},
		itsFree: `Lembre-se que <strong>este projeto é livre</strong> e <strong>você deve dar suporte aos artistas que você ama</strong> antes de dar suporte aos desenvolvedores.`,
		notObligated: `Não se sinta na obrigação de doar, eu agradeço de qualquer maneira!`,
		lincensedUnder: {
			text: `Esse é um projeto licenciado através da {gpl3}.`,
			gpl3: 'GNU General Public License 3.0'
		}
	},
	charts: {
		title: 'Charts',
		changeCountry: 'Mudar País',
		download: 'Download Chart'
	},
	errors: {
		title: 'Erros para {name}',
		ids: {
			invalidURL: 'URL inválida',
			unsupportedURL: 'URL não suportada ainda',
			ISRCnotOnDeezer: 'Faixa ISRC não está disponível ainda no deezer',
			notYourPrivatePlaylist: 'Você não pode baixar playlists privadas.',
			spotifyDisabled: 'Os Recursos do Spotify não foram configurados corretamente.',
			trackNotOnDeezer: 'Faixa não encontrada no deezer!',
			albumNotOnDeezer: 'Album not found on deezer! Álbum não encontrado no deezer!',
			notOnDeezer: 'Faixa indisponível no deezer!',
			notEncoded: 'Faixa ainda não codificada!',
			notEncodedNoAlternative: 'Faixa ainda não codificada e sem alternativas encontradas!',
			wrongBitrate: 'Faixa não encontrada no bitrate desejado.',
			wrongBitrateNoAlternative: 'Faixa não encontrada no bitrate desejado e nenhuma outra alternativa encontrada!',
			no360RA: 'Faixa não disponível na qualidade Reality Audio 360.',
			notAvailable: 'Faixa não disponível nos servidores do deezer!',
			notAvailableNoAlternative: 'Faixa não disponível nos servidores do deezer e nenhuma outra alternativa encontrada!'
		}
	},
	favorites: {
		title: 'Favoritos',
		noPlaylists: 'Nenhuma Playlist encontrada',
		noAlbums: 'Nenhum Álbum Favorito encontrado',
		noArtists: 'Nenhum Artista Favorito encontrado',
		noTracks: 'Nenhuma Faixa Favorita encontrada'
	},
	home: {
		needTologin: 'Você precisa logar na sua conta do deezer antes de começar a baixar músicas.',
		openSettings: 'Abrir Configurações',
		sections: {
			popularPlaylists: 'Playlists Populares',
			popularAlbums: 'Álbuns mais ouvidos'
		}
	},
	linkAnalyzer: {
		info: 'Você pode usar essa seção para encontrar mais informações sobre o link que você quer baixar.',
		useful:
			'Isso é útil se você está tentando baixar algumas faixas que não estão disponíveis no seu país, e quer saber onde elas estão disponíveis, por exemplo.',
		linkNotSupported: 'Esse link não é suportado ainda',
		linkNotSupportedYet: 'Parece que esse link não é suportado ainda, tente analizar outro.',
		table: {
			id: 'ID',
			isrc: 'ISRC',
			upc: 'UPC',
			duration: 'Duração',
			diskNumber: 'Número do Disco',
			trackNumber: 'Número da Faixa',
			releaseDate: 'Data de Lançamento',
			bpm: 'BPM',
			label: 'Gravadora',
			recordType: 'Tipo de Gravação',
			genres: 'Gêneros',
			tracklist: 'Tracklist'
		}
	},
	search: {
		startSearching: 'Comece pesquisando!',
		description:
			'Você pode pesquisar uma música, um álbum, um artista, uma playlist.... tudo! Você também pode colar um link do Deezer',
		fans: '{n} fãs',
		noResults: 'Sem resultados',
		noResultsTrack: 'Nenhuma Faixa encontrada',
		noResultsAlbum: 'Nenhum Álbum encontrado',
		noResultsArtist: 'Nenhum Artista encontrado',
		noResultsPlaylist: 'Nenhuma Playlist encontrada'
	},
	searchbar: 'Pesquise algo (ou apenas cole um link)',
	downloads: 'downloads',
	toasts: {
		addedToQueue: '{item} adicionado à fila',
		alreadyInQueue: '{item} já está na fila!',
		finishDownload: '{item} download terminado.',
		allDownloaded: 'Todos os downloads foram feitos!',
		refreshFavs: 'Atualização completa!',
		loggingIn: 'Logando',
		loggedIn: 'Logado',
		alreadyLogged: 'Você já está logado',
		loginFailed: 'Não foi possivel entrar',
		loggedOut: 'Desconectando',
		cancellingCurrentItem: 'Cancelando item atual.',
		currentItemCancelled: 'Item atual cancelado.',
		startAddingArtist: 'Adicionando {artist} álbuns à fila',
		finishAddingArtist: '{artist} álbuns adicionados a fila',
		startConvertingSpotifyPlaylist: 'Convertendo faixas do spotify para faixas do deezer',
		finishConvertingSpotifyPlaylist: 'Playlists do Spotify convertidas'
	},
	settings: {
		title: 'Configurações',
		languages: 'Idiomas',
		login: {
			title: 'Login',
			loggedIn: 'Você está logado como {username}',
			arl: {
				question: 'Como eu consigo o meu ARL?',
				update: 'Atualizar ARL'
			},
			logout: 'Sair'
		},
		appearance: {
			title: 'Aparência',
			slimDownloadTab: 'Aba de download slim'
		},
		downloadPath: {
			title: 'Diretório de Downloads'
		},
		templates: {
			title: 'Templates',
			tracknameTemplate: 'Template do nome da faixa',
			albumTracknameTemplate: 'Template da faixa do álbum',
			playlistTracknameTemplate: 'Template da faixa da playlist'
		},
		folders: {
			title: 'Pastas',
			createPlaylistFolder: 'Criar pasta para playlists',
			playlistNameTemplate: 'Template da pasta de playlist',
			createArtistFolder: 'Criar pasta para os artistas',
			artistNameTemplate: 'Template da pasta de artistas',
			createAlbumFolder: 'Criar pasta para álbuns',
			albumNameTemplate: 'Template da pasta de álbuns',
			createCDFolder: 'Criar pasta para CDs',
			createStructurePlaylist: 'Criar estrutura de pastas para playlists',
			createSingleFolder: 'Criar estrutura de pastas para singles'
		},
		trackTitles: {
			title: 'Título das faixas',
			padTracks: 'Faixas com pad',
			paddingSize: 'Sobrescrever tamanho do padding',
			illegalCharacterReplacer: 'Substituir caracteres inválidos'
		},
		downloads: {
			title: 'Downloads',
			queueConcurrency: 'Downloads Simultâneos',
			maxBitrate: {
				title: 'Escolher Taxa de Bits',
				9: 'FLAC 1411kbps',
				3: 'MP3 320kbps',
				1: 'MP3 128kbps'
			},
			overwriteFile: {
				title: 'Sobrescrever arquivos?',
				y: 'Sim, sobrescrever arquivos',
				n: 'Não, não sobrescrever arquivos',
				t: 'Sobrescrever apenas as tags'
			},
			fallbackBitrate: 'Taxa de bits reserva',
			fallbackSearch: 'Procurar reserva',
			logErrors: 'Criar arquivos de log para erros',
			logSearched: 'Criar arquivos de log para faixas pesquisadas',
			createM3U8File: 'Criar arquivo de playlist',
			syncedLyrics: 'Criar arquivos .lyr (Letras)',
			playlistFilenameTemplate: 'Template do nome do arquivo da playlist',
			saveDownloadQueue: 'Salvar a fila de downloads quando fechar o app'
		},
		covers: {
			title: 'Capa dos álbuns',
			saveArtwork: 'Salvar capas',
			coverImageTemplate: 'Template do nome da capa',
			saveArtworkArtist: 'Salvar imagem do artista',
			artistImageTemplate: 'Template da imagem do artista',
			localArtworkSize: 'Tamanho da capa local',
			embeddedArtworkSize: 'Tamanho da capa embutida',
			localArtworkFormat: {
				title: 'Qual o formato da imagem que você quer para a capa local?',
				jpg: '.jpeg',
				png: '.png',
				both: 'Ambas, .jpeg e .png'
			},
			jpegImageQuality: 'Qualidade da imagem JPEG'
		},
		tags: {
			head: 'Quais tags salvar',
			title: 'Título',
			artist: 'Artista',
			album: 'Álbum',
			cover: 'Capa',
			trackNumber: 'Número da Faixa',
			trackTotal: 'Total de Faixas',
			discNumber: 'Número de Discos',
			discTotal: 'Total de Discos',
			albumArtist: 'Artista do Álbum',
			genre: 'Gênero',
			year: 'Ano',
			date: 'Data',
			explicit: 'Letras Explícitas',
			isrc: 'ISRC',
			length: 'Tamanho da Faixa',
			barcode: 'Código de Barras do álbum (UPC)',
			bpm: 'BPM',
			replayGain: 'Replay Gain',
			label: 'Gravadora',
			lyrics: 'Letras Dessincronizadas',
			copyright: 'Copyright',
			composer: 'Compositor',
			involvedPeople: 'Pessoas Envolvidas'
		},
		other: {
			title: 'Outros',
			savePlaylistAsCompilation: 'Salvar playlists como uma compilação',
			useNullSeparator: 'Usar separador nulo',
			saveID3v1: 'Salvar ID3v1',
			multiArtistSeparator: {
				title: 'Como você gostaria de separar os artistas?',
				nothing: 'Salvar apenas o artista principal',
				default: 'Usar a especificação padrão',
				andFeat: 'Usar & e feat.',
				using: 'Usar "{separator}"'
			},
			singleAlbumArtist: 'Salvar apenas o artista principal',
			albumVariousArtists: 'Manter "Various Artists" nos Artistas do Álbum',
			removeAlbumVersion: 'Remover "Album Version" do título da faixa',
			removeDuplicateArtists: 'Remover combinação de artistas',
			dateFormat: {
				title: 'Formato da data para arquivos FLAC',
				year: 'AAAA',
				month: 'MM',
				day: 'DD'
			},
			featuredToTitle: {
				title: 'O que devo fazer com artistas participantes?',
				0: 'Nada',
				1: 'Remova do título da faixa',
				3: 'Remova do título da faixa e do álbum',
				2: 'Mover para o título da faixa'
			},
			titleCasing: 'Formatação do título',
			artistCasing: 'Formatação do artista',
			casing: {
				nothing: 'Manter inalterado',
				lower: 'minúsculo',
				upper: 'MAIÚSCULO',
				start: 'Começo De Cada Palavra',
				sentence: 'Como uma frase'
			},
			previewVolume: 'Prévia do Volume',
			executeCommand: {
				title: 'Comando para executar depois de baixar',
				description: 'Deixe em branco para nenhuma ação'
			}
		},
		spotify: {
			title: 'Recursos do Spotify',
			clientID: 'Spotify clientID',
			clientSecret: 'Spotify Client Secret',
			username: 'usuário do Spotify'
		},
		reset: 'Restaurar para o padrão',
		save: 'Salvar',
		toasts: {
			init: 'Configurações carregadas!',
			update: 'Configurações atualizadas!',
			ARLcopied: 'ARL copiada para a área de transferência'
		}
	},
	sidebar: {
		home: 'início',
		search: 'pesquisa',
		charts: 'charts',
		favorites: 'favoritos',
		linkAnalyzer: 'analizador de links',
		settings: 'configurações',
		about: 'sobre'
	},
	tracklist: {
		downloadSelection: 'Baixar seleção'
	}
}

export default pt_br
