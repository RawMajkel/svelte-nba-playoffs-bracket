<script type="ts">
	import type { storeConference } from '../common/store/storeConference';
	import { createConferenceMatchups } from '../services/dataService';
	import { finalsData } from '../stores';
	import RoundCard from './RoundCard.svelte';
	import type { confRounds } from 'src/common/confRounds';

	export let conference: storeConference;
	export let rtl = false;

	let conferenceRounds: confRounds = createConferenceMatchups(conference);

	finalsData.update((current) => {
		if (current.teams[0] == null || current.teams[1] == null) {
			current.teams = [...current.teams, conferenceRounds.winnerId];
		}
		return current;
	});
</script>

<div
	class="conference conference--{conference.altName.toLowerCase()}{rtl ? ' conference--rtl' : ''}"
>
	<h2 class="conference__title">{conference.name} Conference</h2>

	<div class="conference__rounds d-flex">
		<div class="conference__round d-grid">
			<RoundCard roundData={conferenceRounds.firstRound} />
		</div>

		<div class="conference__round d-grid">
			<RoundCard roundData={conferenceRounds.secondRound} />
		</div>

		<div class="conference__round d-grid">
			<RoundCard roundData={conferenceRounds.thirdRound} />
		</div>
	</div>
</div>

<style lang="scss">
	$conference: '.conference';
	#{$conference} {
		--colWidth: 120px;
		--colGap: 25px;

		&__rounds {
			align-items: center;
			gap: var(--colGap);
		}

		&__title {
			font-size: 1.2em;
			margin-bottom: 20px;
		}

		&__round {
			grid-template-columns: var(--colWidth);
		}

		&--rtl &__title {
			text-align: right;
		}

		&--rtl &__rounds {
			flex-direction: row-reverse;
		}

		&--rtl &__round {
			justify-content: flex-end;
		}
	}
</style>
