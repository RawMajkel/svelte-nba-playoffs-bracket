<script type="ts">
	import { appConfig } from './../config/config';
</script>

<svelte:head>
	<title>{appConfig.name}</title>
</svelte:head>

<div class="heading">
	<h1 class="heading__title">{appConfig.name}</h1>
	<div class="heading__author">{appConfig.author}</div>
	<p class="heading__version">{appConfig.version}</p>
</div>

<style lang="scss">
	$heading: '.heading';
	#{$heading} {
		&__title {
			font-size: 1.5em;
		}
	}
</style>
