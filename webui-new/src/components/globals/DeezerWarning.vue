<template>
	<div id="deezer_not_available" class="hide">
		<i class="material-icons">warning</i> {{ $t('toasts.deezerNotAvailable') }}
	</div>
</template>

<style>
#deezer_not_available {
	background-color: hsl(53, 98%, 47%);
	color: rgba(0, 0, 0, 0.75);
	padding: 8px 12px;
	margin: -10px 10px 0px;
	display: flex;
	border-radius: 8px;
	align-items: center;
}
#deezer_not_available i {
	margin-right: 8px;
}
#deezer_not_available.hide {
	display: none !important;
}
</style>
