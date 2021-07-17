<template>
	<div id="analyzer_tab" class="image-header">
		<h1 class="mb-8 text-5xl capitalize">{{ $t('sidebar.linkAnalyzer') }}</h1>

		<div v-if="link === ''">
			<p>
				{{ $t('linkAnalyzer.info') }}
			</p>
			<p>
				{{ $t('linkAnalyzer.useful') }}
			</p>
		</div>
		<div v-else-if="link === 'error'">
			<h2>{{ $t('linkAnalyzer.linkNotSupported') }}</h2>
			<p>{{ $t('linkAnalyzer.linkNotSupportedYet') }}</p>
		</div>

		<div v-else>
			<header
				class="flex items-center"
				:style="{
					'background-image':
						'linear-gradient(to bottom, transparent 0%, var(--main-background) 100%), url(\'' + image + '\')'
				}"
			>
				<div>
					<h1 class="m-0">{{ title }}</h1>
					<h2 v-if="type === 'track'" class="m-0 mb-3 text-lg">
						<i18n path="globals.by" tag="span">
							<router-link
								tag="span"
								place="artist"
								class="clickable"
								:to="{ name: 'Artist', params: { id: data.artist.id } }"
							>
								{{ data.artist.name }}
							</router-link>
						</i18n>
						•
						<i18n path="globals.in" tag="span">
							<router-link
								tag="span"
								place="album"
								class="clickable"
								:to="{ name: 'Album', params: { id: data.album.id } }"
							>
								{{ data.album.title }}
							</router-link>
						</i18n>
					</h2>
					<h2 v-else-if="type === 'album'" class="m-0 mb-3 text-lg">
						<i18n path="globals.by" tag="span">
							<router-link
								tag="span"
								place="artist"
								class="clickable"
								:to="{ name: 'Artist', params: { id: data.artist.id } }"
							>
								{{ data.artist.name }}
							</router-link>
						</i18n>
						{{ ` • ${$tc('globals.listTabs.trackN', data.nb_tracks)}` }}
					</h2>
				</div>
				<div
					role="button"
					aria-label="download"
					:data-link="link"
					class="grid w-16 h-16 ml-auto rounded-full cursor-pointer bg-primary text-grayscale-870 place-items-center"
					@contextmenu.prevent="openQualityModal"
					@click.stop="addToQueue"
				>
					<i class="text-4xl material-icons" :title="$t('globals.download_hint')">get_app</i>
				</div>
			</header>
			<table class="table">
				<tr v-if="data.id">
					<td>{{ $t('linkAnalyzer.table.id') }}</td>
					<td>{{ data.id }}</td>
				</tr>
				<tr v-if="data.isrc">
					<td>{{ $t('linkAnalyzer.table.isrc') }}</td>
					<td>{{ data.isrc }}</td>
				</tr>
				<tr v-if="data.upc">
					<td>{{ $t('linkAnalyzer.table.upc') }}</td>
					<td>{{ data.upc }}</td>
				</tr>
				<tr v-if="data.duration">
					<td>{{ $t('linkAnalyzer.table.duration') }}</td>
					<td>{{ convertDuration(data.duration) }}</td>
				</tr>
				<tr v-if="data.disk_number">
					<td>{{ $t('linkAnalyzer.table.diskNumber') }}</td>
					<td>{{ data.disk_number }}</td>
				</tr>
				<tr v-if="data.track_position">
					<td>{{ $t('linkAnalyzer.table.trackNumber') }}</td>
					<td>{{ data.track_position }}</td>
				</tr>
				<tr v-if="data.release_date">
					<td>{{ $t('linkAnalyzer.table.releaseDate') }}</td>
					<td>{{ data.release_date }}</td>
				</tr>
				<tr v-if="data.bpm">
					<td>{{ $t('linkAnalyzer.table.bpm') }}</td>
					<td>{{ data.bpm }}</td>
				</tr>
				<tr v-if="data.label">
					<td>{{ $t('linkAnalyzer.table.label') }}</td>
					<td>{{ data.label }}</td>
				</tr>
				<tr v-if="data.record_type">
					<td>{{ $t('linkAnalyzer.table.recordType') }}</td>
					<td>{{ $tc(`globals.listTabs.${data.record_type}`, 1) }}</td>
				</tr>
				<tr v-if="data.genres && data.genres.data.length">
					<td>{{ $t('linkAnalyzer.table.genres') }}</td>
					<td>{{ data.genres.data.map(x => x.name).join('; ') }}</td>
				</tr>
			</table>

			<div v-if="type === 'album'">
				<router-link tag="button" class="btn btn-primary" name="button" :to="{ name: 'Album', params: { id } }">
					{{ $t('linkAnalyzer.table.tracklist') }}
				</router-link>
			</div>

			<div v-if="countries.length">
				<p v-for="(country, i) in countries" :key="i">{{ country[0] }} - {{ country[1] }}</p>
			</div>
		</div>
	</div>
</template>

<script>
/* eslint-disable camelcase */
import { socket } from '@/utils/socket'
import { convertDuration } from '@/utils/utils'
import { COUNTRIES } from '@/utils/countries'
import { sendAddToQueue } from '@/utils/downloads'
import EventBus from '@/utils/EventBus'

export default {
	data() {
		return {
			link: '',
			title: '',
			subtitle: '',
			image: '',
			data: {},
			type: '',
			id: '0',
			countries: []
		}
	},
	mounted() {
		EventBus.$on('analyze_track', this.showTrack)
		EventBus.$on('analyze_album', this.showAlbum)
		socket.on('analyze_notSupported', this.notSupported)
	},
	methods: {
		convertDuration,
		reset() {
			this.title = 'Loading...'
			this.subtitle = ''
			this.image = ''
			this.data = {}
			this.type = ''
			this.link = ''
			this.countries = []
		},
		showTrack(data) {
			this.reset()
			const {
				title,
				title_version,
				album: { cover_xl },
				link,
				available_countries,
				id
			} = data

			this.title = title + (title_version && !title.includes(title_version) ? ' ' + title_version : '')
			this.image = cover_xl
			this.type = 'track'
			this.link = link
			this.id = id

			available_countries.forEach(cc => {
				const temp = []
				const chars = [...cc].map(c => c.charCodeAt() + 127397)
				temp.push(String.fromCodePoint(...chars))
				temp.push(COUNTRIES[cc])
				this.countries.push(temp)
			})

			this.data = data
		},
		showAlbum(data) {
			this.reset()
			const { title, cover_xl, link, id } = data

			this.title = title
			this.image = cover_xl
			this.type = 'album'
			this.link = link
			this.data = data
			this.id = id
		},
		notSupported() {
			this.link = 'error'
		},
		addToQueue(e) {
			sendAddToQueue(e.currentTarget.dataset.link)
		}
	}
}
</script>

<style></style>
