<template>
	<div>
		<h1 class="mb-8 text-5xl">{{ $t('settings.spotify.question') }}</h1>
		<p class="mb-2 text-base">
			"Spotify Features" is a set of features that lets you convert Spotify tracks and albums links into Deezer ones. If
			you provide a Spotify Playlist link the app will autmatically convert all the links of the tracks inside it into
			deezer tracks. Enabling this set of features will let you see your public Spotify playlists in the favorites tab
			as well.
		</p>
		<p class="mb-2 text-base">For security reasons you will need to provide your own Client ID and Secret</p>

		<h2 class="mt-6 text-3xl">How do I get my Client ID and Secret?</h2>
		<p class="mb-2 text-base">
			Connect to
			<a href="https://developer.spotify.com/dashboard" target="_blank">Spotify for Developers's Dashboard</a> and login
			with your Spotify account.
		</p>
		<p class="mb-2 text-base">
			Click on "Create an App".<br />
			<img src="https://i.imgur.com/YFz7rHj.png" alt="Create an App button on Spotify for Developers's Dashboard" />
		</p>
		<p class="mb-2 text-base">
			Fill out the "App name" and "App description" fields and check both checkboxes. Then click on the "Create"
			button.<br />
			<img src="https://i.imgur.com/A9cvDkK.png" alt="Create an app form" />
		</p>
		<p class="mb-2 text-base">
			Now you can see the Client ID. If you click on "Show Client Secret" the client secret will be revealed.<br />
			<img src="https://i.imgur.com/foEfIhO.png" alt="Screen of client ID and Secret" />
		</p>
		<p class="mb-2 text-base">Now you can copy-paste those results in the appropriate fields in the settings.</p>

		<h2 class="mt-6 text-3xl">How do I get my Spotify Username?</h2>
		<p class="mb-2 text-base">
			You can get your Spotify Username from the
			<a href="https://www.spotify.com/it/account/overview/" target="_blank">Overview page on Spotify's Website</a>.
		</p>
	</div>
</template>

<script>
export default {}
</script>

<style></style>
