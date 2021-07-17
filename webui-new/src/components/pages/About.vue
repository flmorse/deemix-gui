<template>
	<div id="about_tab">
		<h1 class="mb-8 text-5xl capitalize">{{ $t('sidebar.about') }}</h1>

		<div class="inline-flex px-4 py-2 mb-8 rounded-full" :class="{ 'bg-green-500': isOnline, 'bg-red-500': !isOnline }">
			<span class="text-sm uppercase-first-letter">
				{{ $t(`about.appStatus.${isOnline ? 'online' : 'offline'}`) }}
			</span>
		</div>

		<ul>
			<li>
				{{ $t('about.updates.currentWebuiVersion') }}:
				<!--				<span>{{  __VER__ || $t('about.updates.versionNotAvailable') }}</span>-->
				<span>{{ currentVersion || $t('about.updates.versionNotAvailable') }}</span>
			</li>
			<li>
				{{ $t('about.updates.currentVersion') }}:
				<span>{{ current || $t('about.updates.versionNotAvailable') }}</span>
			</li>
			<li>{{ $t('about.updates.deemixVersion') }}: {{ deemixVersion }}</li>
			<li v-if="updateAvailable && latest">{{ $t('about.updates.updateAvailable', { version: latest }) }}</li>
		</ul>

		<ul>
			<li v-html="$t('about.usesLibrary')"></li>
			<li v-html="$t('about.thanks')"></li>
			<i18n path="about.upToDate.text" tag="li">
				<template #newsChannel>
					<a href="https://t.me/RemixDevNews" target="_blank">{{ $t('about.upToDate.newsChannel') }}</a>
				</template>
			</i18n>
		</ul>

		<h2>{{ $t('about.titles.usefulLinks') }}</h2>
		<ul class="no-dots">
			<!-- <li>
				<a href="" target="_blank">🌍 {{ $t('about.officialWebsite') }}</a>
			</li> -->
			<li>
				<a href="https://git.rip/RemixDev/deemix" target="_blank">🚀 {{ $t('about.officialRepo') }}</a>
			</li>
			<li>
				<a href="https://git.rip/RemixDev/deemix-webui" target="_blank"> 💻 {{ $t('about.officialWebuiRepo') }} </a>
			</li>
			<li>
				<a href="https://www.reddit.com/r/deemix" target="_blank">🤖 {{ $t('about.officialSubreddit') }}</a>
			</li>
			<li>
				<a href="https://t.me/RemixDevNews" target="_blank">📰 {{ $t('about.newsChannel') }}</a>
			</li>
		</ul>

		<h2>
			{{ $t('about.titles.bugReports') }}
			<span class="subheading">
				{{ $t('about.subtitles.bugReports') }}
			</span>
		</h2>
		<ul>
			<i18n path="about.questions.text" tag="li">
				<template #subreddit>
					<a href="https://www.reddit.com/r/deemix" target="_blank">{{ $t('about.questions.subreddit') }}</a>
				</template>
			</i18n>
			<li>
				{{ $t('about.beforeReporting') }}
			</li>
			<li v-html="$t('about.beSure')"></li>
			<li>
				{{ $t('about.duplicateReports') }}
			</li>
			<li v-html="$t('about.dontOpenIssues')"></li>
		</ul>

		<h2>
			{{ $t('about.titles.contributing') }}
			<span class="subheading">
				{{ $t('about.subtitles.contributing') }}
			</span>
		</h2>
		<ul>
			<i18n path="about.newUI.text" tag="li">
				<template #repo>
					<span>{{ $t('about.newUI.repo') }}</span>
				</template>
			</i18n>
			<li>
				{{ $t('about.acceptFeatures') }}
			</li>
			<i18n path="about.contributeWebUI.text" tag="li">
				<template #webui>
					<span>{{ $t('about.contributeWebUI.webui') }}</span>
				</template>
			</i18n>
			<li>
				{{ $t('about.otherLanguages') }}
			</li>
			<li>
				{{ $t('about.understandingCode') }}
			</li>
		</ul>

		<h2>
			{{ $t('about.titles.donations') }}
			<span class="subheading">
				{{ $t('about.subtitles.donations') }}
			</span>
		</h2>
		<ul>
			<li v-html="$t('about.itsFree')"></li>
			<li>
				{{ $t('about.notObligated') }}
			</li>
		</ul>
		<ul>
			<li>
				<i v-html="paypal" />
				<strong>PayPal:</strong>
				<a href="https://paypal.me/RemixDev" target="_blank">PayPal.me/RemixDev</a>
			</li>
			<li>
				<i class="ethereum" v-html="ethereum" />
				<strong>Ethereum:</strong> 0x1d2aa67e671485CD4062289772B662e0A6Ff976c
			</li>
		</ul>

		<h2>{{ $t('about.titles.license') }}</h2>
		<p>
			<a rel="license" href="https://www.gnu.org/licenses/gpl-3.0.en.html" target="_blank">
				<img
					alt="GNU General Public License"
					style="border-width: 0"
					src="https://www.gnu.org/graphics/gplv3-127x51.png"
				/>
			</a>
		</p>
		<i18n path="about.lincensedUnder.text" tag="p">
			<template #gpl3>
				<a rel="license" href="https://www.gnu.org/licenses/gpl-3.0.en.html" target="_blank">{{
					$t('about.lincensedUnder.gpl3')
				}}</a>
			</template>
		</i18n>
	</div>
</template>

<script>
import { computed, defineComponent, onMounted, reactive, toRefs } from '@vue/composition-api'

import { useOnline } from '@/use/online'

import paypal from '@/assets/paypal.svg'
import ethereum from '@/assets/ethereum.svg'

export default defineComponent({
	setup(_, ctx) {
		const state = reactive({
			current: null,
			latest: null,
			updateAvailable: false,
			deemixVersion: null
		})
		const { isOnline } = useOnline()

		function initUpdate(appInfo) {
			const { currentCommit, latestCommit, updateAvailable, deemixVersion } = appInfo

			state.current = currentCommit
			state.latest = latestCommit
			state.updateAvailable = updateAvailable
			state.deemixVersion = deemixVersion
		}

		const getAppInfo = computed(() => ctx.root.$store.getters.getAppInfo)

		onMounted(() => {
			initUpdate(getAppInfo.value)
		})

		return {
			...toRefs(state),
			paypal,
			ethereum,
			isOnline,
			currentVersion: __VER__
		}
	}
})
</script>

<style lang="scss" scoped>
li,
p,
a {
	letter-spacing: 0.4px;
	font-size: 20px;
	line-height: 1.2;
}

i {
	vertical-align: middle;
}

i::v-deep svg {
	fill: white;
	width: 20px;
}

.ethereum::v-deep svg {
	fill: var(--foreground);
}

:link {
	text-decoration: none;
}

#about_tab {
	margin-bottom: 40px;
}

h2 {
	text-transform: capitalize;

	&:not(.page_heading) {
		font-size: 2rem;
		border-bottom: 1px solid hsla(0, 0%, 20%, 0.25);
		padding: {
			top: 2rem;
			bottom: 1rem;
		}
	}

	.subheading {
		display: block;
		font-size: 0.5em;
		margin-top: 0.5em;
		font-weight: normal;
		opacity: 0.8;
		text-transform: none;
	}
}

p {
	margin: 0 !important;
}

ul {
	li {
		margin-bottom: 7px;
	}

	h2 + & {
		margin-top: 1rem;
	}

	ul + & {
		margin-top: 1.25rem;
	}

	&.no-dots {
		list-style-type: none;
	}

	&:not(.no-dots) {
		list-style-type: none;

		li {
			position: relative;

			&::before {
				content: '—';
				position: absolute;
				left: -30px;
				opacity: 0.25;
			}
		}
	}
}
</style>
