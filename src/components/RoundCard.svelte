<script type="ts">
	import type { round } from '../common/round';
	import MatchupCard from './MatchupCard.svelte';

	export let roundData: round;
</script>

<div class="round">
	<h3>{roundData.name}</h3>
	<div class="d-grid round__matchups">
		{#each roundData.matchups as matchup}
			<MatchupCard {matchup} />
		{/each}
	</div>
</div>

<style lang="scss">
	$round: '.round';
	#{$round} {
		&__matchups {
			gap: var(--colGap);
		}
	}
</style>
