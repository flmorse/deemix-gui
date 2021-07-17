<template>
	<section>
		<BaseLoadingPlaceholder v-if="isLoading" />

		<template v-else>
			<div v-if="viewInfo.data.length === 0">
				<h1>{{ $t('search.noResultsArtist') }}</h1>
			</div>

			<div v-else class="release-grid">
				<div v-for="release in viewInfo.data.slice(0, itemsToShow)" :key="release.artistID" class="w-40 release">
					<router-link tag="div" class="cursor-pointer" :to="{ name: 'Artist', params: { id: release.artistID } }">
						<CoverContainer
							is-circle
							:cover="release.artistPictureMedium"
							:link="release.artistLink"
							@click.stop="$emit('add-to-queue', $event)"
						/>

						<span class="primary-text">
							{{ release.artistName }}
						</span>
					</router-link>

					<!-- TODO Fix, depending on the tab there are albums number or fans number -->
					<!-- <p class="secondary-text">{{ $tc('globals.listTabs.releaseN', release.artistAlbumsNumber) }}</p> -->
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
