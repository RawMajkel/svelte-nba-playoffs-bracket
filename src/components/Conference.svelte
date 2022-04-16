<script type="ts">
	import type { Conference } from 'src/common/conference';
	import TeamCard from './TeamCard.svelte';

	export let conference: Conference;
</script>

<div class="conference conference--{conference.name.toLowerCase()}" data-id={conference.id}>
	<h2 class="conference__title">{conference.fullName} Conference</h2>

	<div class="conference__teams">
		{#each conference.teams as team (team.id)}
			<TeamCard {team} />
		{/each}
	</div>
</div>
