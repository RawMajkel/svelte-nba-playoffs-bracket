<script type="ts">
	import { conferences } from '../stores';
	import ConferenceCard from './ConferenceCard.svelte';
</script>

<div class="conferences d-flex justify-content-between">
	{#each $conferences.data as conference, index (conference.id)}
		<ConferenceCard {conference} rtl={index % 2 != 0} />
	{/each}
</div>

<style lang="scss">
	$converences: '.conferences';
	#{$converences} {
	}
</style>
