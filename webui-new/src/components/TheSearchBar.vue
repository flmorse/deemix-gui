<template>
	<header id="search" aria-label="searchbar">
		<div class="search__icon">
			<i class="material-icons">search</i>
		</div>

		<input
			id="searchbar"
			ref="searchbar"
			class="w-full"
			autocomplete="off"
			type="search"
			name="searchbar"
			value=""
			:placeholder="$t('searchbar')"
			autofocus
			@keyup="performSearch($event)"
		/>
		<!-- @keyup.enter.exact="onEnter"
			@keyup.ctrl.enter="onCTRLEnter" -->
	</header>
</template>

<script>
import { defineComponent, ref } from '@vue/composition-api'
import { isValidURL } from '@/utils/utils'
import { sendAddToQueue } from '@/utils/downloads'
import { fetchData } from '@/utils/api'
import EventBus from '@/utils/EventBus'

export default defineComponent({
	setup() {
		return {
			lastTextSearch: ref('')
		}
	},
	created() {
		const focusSearchBar = keyEvent => {
			if (keyEvent.keyCode === 70 && keyEvent.ctrlKey) {
				keyEvent.preventDefault()
				this.$refs.searchbar.focus()
			}
		}

		const deleteSearchBarContent = keyEvent => {
			if (!(keyEvent.key === 'Backspace' && keyEvent.ctrlKey && keyEvent.shiftKey)) return

			this.$refs.searchbar.value = ''
			this.$refs.searchbar.focus()
		}

		document.addEventListener('keydown', focusSearchBar)
		document.addEventListener('keyup', deleteSearchBarContent)

		this.$on('hook:destroyed', () => {
			document.removeEventListener('keydown', focusSearchBar)
			document.removeEventListener('keyup', deleteSearchBarContent)
		})
	},
	methods: {
		async performSearch(keyEvent) {
			const isEnterPressed = keyEvent.keyCode === 13

			if (!isEnterPressed) return

			const term = this.$refs.searchbar.value
			const isEmptySearch = term === ''

			if (isEmptySearch) return

			const isSearchingURL = isValidURL(term)
			const isCtrlPressed = keyEvent.ctrlKey
			const isShowingAnalyzer = this.$route.name === 'Link Analyzer'
			const isShowingSearch = this.$route.name === 'Search'
			const isSameAsLastSearch = term === this.lastTextSearch

			if (isSearchingURL) {
				if (isCtrlPressed) {
					this.$root.$emit('ContextMenu:searchbar', term)
					return
				}

				if (isShowingAnalyzer) {
					try {
						const analyzedData = await fetchData('analyzeLink', { term })
						const isError = !!analyzedData.errorCode

						if (isError) {
							throw new Error(analyzedData.errorMessage)
						}

						if (analyzedData.type === 'track') {
							EventBus.$emit('analyze_track', analyzedData)
						}

						if (analyzedData.type === 'album') {
							EventBus.$emit('analyze_album', analyzedData)
						}
						// socket.emit('analyzeLink', term)
						return
					} catch (error) {
						console.error(error)
						return
					}
				}

				// ? Open downloads tab maybe?
				sendAddToQueue(term)
			} else {
				// The user is searching a normal string
				if (isShowingSearch && isSameAsLastSearch) return

				/*
				isShowing 		isSame
				false 				false			Loading
				false 				true			Loading (because component Search is not loaded)
				true 					false			Loading
				true 					true			Never
				*/

				this.lastTextSearch = term
				await this.$router.push({
					name: 'Search',
					query: {
						term
					}
				})
			}
		}
	}
})
</script>

<style lang="scss">
$icon-dimension: 2rem;
$searchbar-height: 45px;

input[type='search']::-webkit-search-cancel-button {
	-webkit-appearance: none;
	width: 28px;
	height: 28px;
	background-color: var(--foreground);
	-webkit-mask-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' height='28' viewBox='0 0 24 24' width='28'%3E%%3Cpath fill='%23ffffff' d='M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-3 12.59L17.59 17 14 13.41 10.41 17 9 15.59 12.59 12 9 8.41 10.41 7 14 10.59 17.59 7 19 8.41 15.41 12 19 15.59z'/%3E3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E");
	mask-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' height='28' viewBox='0 0 24 24' width='28'%3E%%3Cpath fill='%23ffffff' d='M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-3 12.59L17.59 17 14 13.41 10.41 17 9 15.59 12.59 12 9 8.41 10.41 7 14 10.59 17.59 7 19 8.41 15.41 12 19 15.59z'/%3E3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E");
}

#search {
	background-color: var(--secondary-background);
	padding: 0 1em;
	display: flex;
	align-items: center;
	border: 1px solid transparent;
	transition: border 200ms ease-in-out;
	border-radius: 15px;
	margin: 10px 10px 20px 10px;

	.search__icon {
		width: $icon-dimension;
		height: $icon-dimension;

		i {
			font-size: $icon-dimension;
			color: var(--foreground);

			&::selection {
				background: none;
			}
		}
	}

	#searchbar {
		height: $searchbar-height;
		padding-left: 0.5em;
		border: 0px;
		border-radius: 0px;
		background-color: var(--secondary-background);
		color: var(--foreground);
		font-size: 1.2rem;
		font-family: 'Open Sans';
		font-weight: 300;
		margin-bottom: 0;

		&:focus {
			outline: none;
		}

		&::-webkit-search-cancel-button {
			appearance: none;
			width: 28px;
			height: 28px;
			background-color: var(--foreground);
			mask-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' height='28' viewBox='0 0 24 24' width='28'%3E%%3Cpath fill='%23ffffff' d='M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-3 12.59L17.59 17 14 13.41 10.41 17 9 15.59 12.59 12 9 8.41 10.41 7 14 10.59 17.59 7 19 8.41 15.41 12 19 15.59z'/%3E3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E");
		}

		// Removing Chrome autofill color
		&:-webkit-autofill,
		&:-webkit-autofill:hover,
		&:-webkit-autofill:focus,
		&:-webkit-autofill:active {
			box-shadow: 0 0 0 $searchbar-height var(--secondary-background) inset !important;
		}
	}

	&:focus-within {
		border: 1px solid var(--foreground);
	}
}
</style>
