<script type="ts">
	import type { storeTeam } from '../common/store/storeTeam';
	import type { matchup } from '../common/matchup';
	import { getTeamById } from '../services/matchupService';

	export let matchup: matchup;

	const matchupPair: storeTeam[] = [
		getTeamById(matchup.firstTeamId),
		getTeamById(matchup.secondTeamId)
	];

	const winnerIndex = matchup.results.findIndex((value) => value == 4);
	const winner: storeTeam | undefined = matchupPair[winnerIndex];
</script>

<div class="finalsMatchup">
	<div class="finalsMatchup__divider w-100" />
	{#each matchupPair as finalsTeam, index}
		<div class="finalsMatchup__team d-flex align-items-center justify-content-between">
			<div class="finalsMatchup__wrapper d-flex align-items-center">
				<img
					src={finalsTeam.imgPath}
					alt={`${finalsTeam.fullName} logo`}
					class="finalsMatchup__logo"
					loading="lazy"
				/>
				<div class="finalsMatchup__name">
					{finalsTeam.fullName}

					{#if finalsTeam.seed !== 0}
						<span>({finalsTeam.seed})</span>
					{/if}
				</div>
			</div>
			<div class="finalsMatchup__result">{matchup.results[index]}</div>
		</div>
	{/each}
</div>

{#if winner !== undefined}
	<div class="finalsWinner text-center">
		{winner.fullName} are the 2021-22 NBA Champions
	</div>
{/if}

<style lang="scss">
	.finalsMatchup {
		position: relative;
		margin: 30px 0;
		box-shadow: 0px 0px 10px rgb(0 0 0 / 10%);

		&__team {
			background: #fff;
			padding: 20px;
		}

		&__divider {
			height: 0.5px;
			background: #bbb;
			position: absolute;
			inset: 0;
			margin: auto;
		}

		&__logo {
			width: 80px;
			aspect-ratio: 1.5;
		}

		&__name {
			font-weight: 600;
			max-width: 130px;
		}

		&__result {
			font-size: 2em;
			font-weight: 800;
		}
	}
	.finalsWinner {
		font-weight: 1.2em;
		font-weight: 600;
	}
</style>
