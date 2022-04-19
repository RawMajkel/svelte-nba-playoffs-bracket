<script type="ts">
	import { matchup } from '../common/matchup';
	import { finalsData } from '../stores';
	import FinalsMatchupCard from './FinalsMatchupCard.svelte';

	const finalsMatchup: matchup = new matchup(
		$finalsData.teams[0],
		$finalsData.teams[1],
		$finalsData.results
	);
</script>

<div class="finals d-grid align-items-center">
	<div class="finals__wrapper">
		<h1 class="finals__heading text-center">{$finalsData.name}</h1>
		<div class="finals__matchup d-grid">
			<FinalsMatchupCard matchup={finalsMatchup} />
		</div>
	</div>
</div>

<style lang="scss">
	$finals: '.finals';
	#{$finals} {
		position: absolute;
		inset: 0;
		margin: auto;
		max-width: 300px;

		&__heading {
			font-size: 2.5em;
			font-weight: 700;
		}
	}
</style>
