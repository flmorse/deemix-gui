<template>
	<div>
		<h1 class="mb-8 text-5xl">{{ $t('charts.title') }} {{ country ? `- ${country}` : '' }}</h1>

		<div v-if="country === ''">
			<div class="release-grid">
				<div
					v-for="release in countries"
					:key="release.id"
					:aria-label="release.title"
					:data-id="release.id"
					:data-title="release.title"
					class="w-40 h-40 release clickable"
					role="button"
					@click="getTrackList"
				>
					<img :src="release.picture_medium" class="w-full rounded coverart" :alt="release.title" />
				</div>
			</div>
		</div>

		<div v-else>
			<button class="btn btn-primary" @click="onChangeCountry">{{ $t('charts.changeCountry') }}</button>
			<button :data-link="'https://www.deezer.com/playlist/' + id" class="btn btn-primary" @click.stop="addToQueue">
				{{ $t('charts.download') }}
			</button>
			<table class="table table--charts">
				<tbody>
					<tr v-for="(track, pos) in chart" :key="pos" class="track_row">
						<td :class="{ first: pos === 0 }" class="p-3 text-center cursor-default">
							{{ pos + 1 }}
						</td>
						<td class="table__icon table__icon--big">
							<span
								:data-preview="track.preview"
								class="relative inline-block rounded cursor-pointer"
								@click="playPausePreview"
							>
								<PreviewControls v-if="track.preview" />
								<img :src="track.album.cover_small" class="rounded coverart" />
							</span>
						</td>
						<td class="table__cell--large">
							{{
								track.title +
								(track.title_version && track.title.indexOf(track.title_version) == -1 ? ' ' + track.title_version : '')
							}}
						</td>
						<router-link
							:to="{ name: 'Artist', params: { id: track.artist.id } }"
							class="table__cell table__cell--medium table__cell--center clickable"
							tag="td"
						>
							{{ track.artist.name }}
						</router-link>
						<router-link
							:to="{ name: 'Album', params: { id: track.album.id } }"
							class="table__cell--medium table__cell--center clickable"
							tag="td"
						>
							{{ track.album.title }}
						</router-link>
						<td class="table__cell--small table__cell--center">
							{{ convertDuration(track.duration) }}
						</td>
						<td
							:data-link="track.link"
							aria-label="download"
							class="cursor-pointer group"
							role="button"
							@click.stop="addToQueue"
						>
							<i
								:title="$t('globals.download_hint')"
								class="transition-colors duration-150 ease-in-out material-icons group-hover:text-primary"
							>
								get_app
							</i>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
import { sendAddToQueue } from '@/utils/downloads'
import { convertDuration } from '@/utils/utils'
import { getChartsData, getChartTracks } from '@/data/charts'

import PreviewControls from '@components/globals/PreviewControls.vue'
import { playPausePreview } from '@components/globals/TheTrackPreview.vue'

export default {
	components: {
		PreviewControls
	},
	data() {
		return {
			country: '',
			id: 0,
			countries: [],
			chart: []
		}
	},
	computed: {
		worldwideRelease() {
			const worldwideRelease = this.countries.filter(country => {
				return country.title === 'Worldwide'
			})

			return worldwideRelease[0]
		}
	},
	watch: {
		id(newId) {
			const isActualChart = newId !== 0

			if (isActualChart) {
				getChartTracks(newId).then(response => this.setTracklist(response.data))
			}
		}
	},
	async created() {
		// socket.on('setChartTracks', this.setTracklist)
		// this.$on('hook:destroyed', () => {
		// 	socket.off('setChartTracks')
		// })

		let { data: chartsData } = await getChartsData()
		let worldwideChart

		chartsData = chartsData.filter(item => {
			if (item.title === 'Worldwide') {
				worldwideChart = item
			}

			return item.title !== 'Worldwide'
		})
		chartsData.unshift(worldwideChart)

		this.initCharts(chartsData)
	},
	methods: {
		convertDuration,
		playPausePreview,
		addToQueue(e) {
			e.stopPropagation()
			sendAddToQueue(e.currentTarget.dataset.link)
		},
		getTrackList(event) {
			document.getElementById('content').scrollTo(0, 0)

			const {
				currentTarget: {
					dataset: { title, id }
				}
			} = event

			this.country = title
			localStorage.setItem('chart', this.country)
			this.id = id
		},
		setTracklist(data) {
			this.chart = data
		},
		onChangeCountry() {
			this.country = ''
			this.id = 0
		},
		initCharts(chartsData) {
			this.countries = chartsData
			this.country = localStorage.getItem('chart') || ''

			if (!this.country) return

			let i = 0
			for (; i < this.countries.length; i++) {
				if (this.countries[i].title === this.country) break
			}

			if (i !== this.countries.length) {
				this.id = this.countries[i].id
				getChartTracks(this.id).then(response => this.setTracklist(response.data))
			} else {
				this.country = ''
				localStorage.setItem('chart', this.country)
			}
		}
	}
}
</script>
