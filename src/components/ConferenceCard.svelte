<script type="ts">
	import type { round } from 'src/common/round';
	import type { storeConference } from 'src/common/storeConference';
	import {
		createFirstRoundData,
		createSecondRoundData,
		createNextRoundData
	} from '../services/teamsService';
	import RoundCard from './RoundCard.svelte';

	export let conference: storeConference;

	const firstRound: round = createFirstRoundData(conference.teams, conference.firstRound);
	const secondRound: round = createSecondRoundData(firstRound, conference.secondRound);
	const thirdRound: round = createNextRoundData(secondRound, conference.finals);
</script>

<div class="conference conference--{conference.altName.toLowerCase()}">
	<h2 class="conference__title">{conference.name} Conference</h2>

	<div class="conference__rounds d-flex">
		<div class="conference__round d-grid">
			<RoundCard roundData={firstRound} />
		</div>

		<div class="conference__round d-grid">
			<RoundCard roundData={secondRound} />
		</div>

		<div class="conference__round d-grid">
			<RoundCard roundData={thirdRound} />
		</div>
	</div>
</div>

<style lang="scss">
	$conference: '.conference';
	#{$conference} {
		--colWidth: 160px;
		--colGap: 20px;

		&__rounds {
			align-items: center;
			gap: var(--colGap);
		}

		&__round {
			grid-template-columns: var(--colWidth);
		}

		&:last-child &__rounds {
			flex-direction: row-reverse;
		}

		&:last-child &__round {
			justify-content: flex-end;
		}
	}
</style>
