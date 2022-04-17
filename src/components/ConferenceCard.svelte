<script type="ts">
	import type { storeConference } from '../common/store/storeConference';
	import { createConferenceMatchups } from '../services/dataService';
	import RoundCard from './RoundCard.svelte';

	export let conference: storeConference;

	const sortedStandings = createConferenceMatchups(conference);
</script>

<div class="conference conference--{conference.altName.toLowerCase()}">
	<h2 class="conference__title">{conference.name} Conference</h2>

	<div class="conference__rounds d-flex">
		<div class="conference__round d-grid">
			<RoundCard roundData={sortedStandings.firstRound} />
		</div>

		<div class="conference__round d-grid">
			<RoundCard roundData={sortedStandings.secondRound} />
		</div>

		<div class="conference__round d-grid">
			<RoundCard roundData={sortedStandings.thirdRound} />
		</div>
	</div>
</div>

<style lang="scss">
	$conference: '.conference';
	#{$conference} {
		--colWidth: 130px;
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
