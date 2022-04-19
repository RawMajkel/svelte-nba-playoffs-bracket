<script type="ts">
	import { appConfig } from './../config/config';
	import svelteInfo from 'svelte/package.json';
</script>

<div class="footer">
	<div class="text-center">
		<a href={appConfig.authorLink} target="_blank" rel="noopener noreferrer">
			<span>{appConfig.author}</span>
		</a>
		<span> | </span>
		<span>Last edit: {appConfig.latestEdit.toLocaleDateString('pl')}</span>
		<span> | </span>
		<a href={svelteInfo.homepage} target="_blank" rel="noopener noreferrer nofollow">
			<span>{svelteInfo.name}</span>
			<span>{svelteInfo.version}</span>
		</a>
	</div>
</div>

<style lang="scss">
	$footer: '.footer';
	#{$footer} {
		margin-top: 40px;
		font-size: 0.8rem;
	}
</style>
