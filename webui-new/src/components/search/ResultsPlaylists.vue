<template>
	<section>
		<BaseLoadingPlaceholder v-if="isLoading" />

		<template v-else>
			<div v-if="viewInfo.data.length === 0">
				<h1>{{ $t('search.noResultsPlaylist') }}</h1>
			</div>
			<div v-else class="release-grid">
				<div v-for="playlist in viewInfo.data.slice(0, itemsToShow)" :key="playlist.playlistID" class="w-40 release">
					<router-link tag="div" class="cursor-pointer" :to="{ name: 'Playlist', params: { id: playlist.playlistID } }">
						<CoverContainer
							is-rounded
							:cover="playlist.playlistPictureMedium"
							:link="playlist.playlistLink"
							@click.stop="$emit('add-to-queue', $event)"
						/>

						<span class="primary-text">
							{{ playlist.playlistTitle }}
						</span>
					</router-link>

					<p class="secondary-text">
						{{
							`${$t('globals.by', { artist: playlist.artistName })} - ${$tc(
								'globals.listTabs.trackN',
								playlist.playlistTracksNumber
							)}`
						}}
					</p>
				</div>
			</div>
		</template>
	</section>
</template>

<script>
import BaseLoadingPlaceholder from '@components/globals/BaseLoadingPlaceholder.vue'
import CoverContainer from '@components/globals/CoverContainer.vue'

export default {
	components: {
		BaseLoadingPlaceholder,
		CoverContainer
	},
	props: {
		viewInfo: {
			validator(value) {
				const isNull = Object.is(value, null)
				const isObject = Object.prototype.toString.call(value) === '[object Object]'

				return isNull || isObject
			},
			required: true
		},
		itemsToShow: {
			type: Number,
			default: 6
		},
		wantHeaders: {
			type: Boolean,
			required: false,
			default: false
		}
	},
	computed: {
		isLoading() {
			return !this.viewInfo || !this.viewInfo.hasLoaded
		}
	}
}
</script>
