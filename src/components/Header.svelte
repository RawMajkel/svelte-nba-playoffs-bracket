<script type="ts">
	import { appConfig } from './../config/config';
</script>

<svelte:head>
	<title>{appConfig.name}</title>
</svelte:head>

<div class="heading">
	<h1 class="heading__title text-center">
		{appConfig.name} <sup class="heading__version">v. {appConfig.version}</sup>
	</h1>
	<div class="heading__subtitle text-center">2021-2022 Season</div>
</div>

<style lang="scss">
	$heading: '.heading';
	#{$heading} {
		margin: 40px 0 20px;

		&__title {
			font-size: 2.4em;
			font-weight: 800;
			color: #222;
		}

		&__version {
			font-size: 0.9rem;
			display: inline-flex;
			background: green;
			padding: 4px 6px;
			color: #fff;
			font-weight: 600;
			border-radius: 8px;
		}
	}
</style>
