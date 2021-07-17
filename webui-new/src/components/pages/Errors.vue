<template>
	<div>
		<h1 class="mb-8 text-5xl">{{ $t('errors.title', { name: title }) }}</h1>

		<table class="table table--tracklist">
			<tr>
				<th>ID</th>
				<th>{{ $tc('globals.listTabs.artist', 1) }}</th>
				<th>{{ $tc('globals.listTabs.title', 1) }}</th>
				<th>{{ $tc('globals.listTabs.error', 1) }}</th>
			</tr>
			<tr v-for="error in errors" :key="error.data.id">
				<td>{{ error.data.id }}</td>
				<td>{{ error.data.artist }}</td>
				<td>{{ error.data.title }}</td>
				<td>{{ error.errid ? $t(`errors.ids.${error.errid}`) : error.message }}</td>
			</tr>
		</table>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	computed: {
		...mapGetters(['getErrors']),
		title() {
			return `${this.getErrors.artist} - ${this.getErrors.title}`
		},
		errors() {
			return this.getErrors.errors
		}
	}
}
</script>

<style></style>
