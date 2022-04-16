<script type="ts">
	import type { Conference } from 'src/common/conference';
	import type { Matchup } from '../common/matchup';
	import { createMatchups } from '../services/teamsService';
	import MatchupCard from './MatchupCard.svelte';

	export let conference: Conference;
	export let rtl: Boolean = false;

	const matchups: Matchup[] = createMatchups(conference.teams);
</script>

<div
	class="conference conference--{conference.name.toLowerCase()}{rtl ? ' conference--rtl' : ''}"
	data-id={conference.id}
>
	<h2 class="conference__title">{conference.fullName} Conference</h2>

	<div class="conference__teams d-grid">
		{#each matchups as matchup}
			<MatchupCard {matchup} />
		{/each}
	</div>
</div>

<style lang="scss">
	$conference: '.conference';
	#{$conference} {
		--cardWidth: 170px;

		&__teams {
			gap: 20px;
		}

		&__teams {
			grid-template-columns: var(--cardWidth);
		}

		&--rtl &__teams {
			justify-content: flex-end;
		}
	}
</style>
