<template>
	<div>
		<h1 class="mb-8 text-5xl">{{ $t('settings.login.arl.question') }}</h1>
		<p class="mb-2 text-base">
			Deezer keeps track of login session by using a cookie called ARL.<br />
			deemix uses that cookie to get the metadata that it needs to download the tracks from Deezer.<br />
			ARLs last for 3 months, after that Deezer asks you to log in again. The same method is used in deemix<br />
			Following one of the guides below you can get your own account ARL.
		</p>

		<h3 class="mt-6 text-3xl">Chrome (Easy way)</h3>
		<ul class="mb-2 text-base">
			<li>Open Chrome</li>
			<li>Go to www.deezer.com and log into your account</li>
			<li>Click on the little "lock" icon next the URL</li>
			<li>Click on Cookies > deezer.com > cookies > arl</li>
			<li>Select the string next to Content, and Copy</li>
			<li>That's your ARL, now you can use it in the app</li>
		</ul>

		<h3 class="mt-6 text-3xl">Chrome</h3>
		<ul class="mb-2 text-base">
			<li>Open Chrome</li>
			<li>Go to www.deezer.com and log into your account</li>
			<li>After logging in press F12 to open up Developer Tools</li>
			<li>Go under the Application tab (if you don't see it click the double arrow)</li>
			<li>Open the cookie dropdown</li>
			<li>Select www.deezer.com</li>
			<li>Find the `arl` cookie (It should be 192 chars long)</li>
			<li>That's your ARL, now you can use it in the app</li>
		</ul>

		<p class="mb-2 text-base">Here's a <a href="https://youtu.be/O6PRT47_yds" target="_blank">video guide</a></p>

		<h3 class="mt-6 text-3xl">Firefox</h3>
		<ul class="mb-2 text-base">
			<li>Open Firefox</li>
			<li>Go to www.deezer.com and log into your account</li>
			<li>Afer logging in press F12 to open up Developer Tools</li>
			<li>Go under the Storage tab (if you don't see it click the double arrow)</li>
			<li>Open the cookie dropdown</li>
			<li>Select www.deezer.com</li>
			<li>Find the `arl` cookie (It should be 192 chars long)</li>
			<li>Make sure only copy the value and not the entire cookie</li>
			<li>That's your ARL, now you can use it in the app</li>
		</ul>
	</div>
</template>

<script>
export default {}
</script>
