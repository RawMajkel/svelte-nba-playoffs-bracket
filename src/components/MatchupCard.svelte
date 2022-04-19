<script type="ts">
	import type { storeTeam } from '../common/store/storeTeam';
	import type { matchup } from '../common/matchup';
	import { getTeamById } from '../services/matchupService';

	export let matchup: matchup;

	const matchupPair: storeTeam[] = [
		getTeamById(matchup.firstTeamId),
		getTeamById(matchup.secondTeamId)
	];
</script>

<div class="matchup position-relative">
	<div class="matchup__divider position-absolute w-100" />
	{#each matchupPair as matchupTeam, index}
		<div
			style="order:{matchupTeam.seed === 0 ? '10' : matchupTeam.seed}"
			class="matchupTeam d-flex align-items-center justify-content-between"
		>
			<div class="matchupTeam__wrapper d-flex align-items-center">
				<img
					src={matchupTeam.imgPath}
					alt={`${matchupTeam.fullName} logo`}
					class="matchupTeam__logo"
					loading="lazy"
				/>
				<div class="matchupTeam__wrapper">
					<div class="matchupTeam__name">
						{matchupTeam.abbr}
						{#if matchupTeam.seed !== 0}
							<span>({matchupTeam.seed})</span>
						{/if}
					</div>
				</div>
			</div>
			<div class="matchupTeam__wins">{matchup.results[index]}</div>
		</div>
	{/each}
</div>

<style lang="scss">
	$matchup: '.matchup';
	#{$matchup} {
		display: flex;
		flex-direction: column;

		max-width: var(--cardWidth);
		box-shadow: 0px 0px 10px rgb(0 0 0 / 10%);
		background: #fff;

		&__divider {
			height: 0.5px;
			background: #bbb;
			inset: 0;
			margin: auto;
		}
	}

	$matchupTeam: '.matchupTeam';
	#{$matchupTeam} {
		padding: 4px 0;

		&__logo {
			width: 50px;
			aspect-ratio: 1.5;
		}

		&__name {
			font-size: 0.8em;
			white-space: nowrap;
		}

		&__wins {
			font-weight: 600;
			padding-inline: 10px;
		}
	}
</style>
