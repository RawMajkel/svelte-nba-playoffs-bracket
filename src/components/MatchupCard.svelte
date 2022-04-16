<script type="ts">
	import type { matchupTeam } from 'src/common/matchupTeam';
	import type { matchup } from '../common/matchup';

	export let matchup: matchup;

	let matchupPair: matchupTeam[] = [matchup.higherTeam, matchup.lowerTeam];

	// console.log(matchup);
</script>

<div class="matchup">
	{#each matchupPair as matchupTeam}
		{#if matchupTeam !== undefined}
			<div class="matchupTeam d-flex align-items-center justify-content-between">
				<div class="matchupTeam__wrapper d-flex align-items-center">
					<img
						src={matchupTeam.teamImgPath}
						alt={`${matchupTeam.teamFullName} logo`}
						class="matchupTeam__logo"
						loading="lazy"
					/>
					<div class="matchupTeam__wrapper">
						<div class="matchupTeam__name">
							{`${matchupTeam.teamSeed}. ${matchupTeam.teamName}`}
						</div>
					</div>
				</div>
				<div class="matchupTeam__wins">{matchupTeam.wins}</div>
			</div>
		{:else}
			undefined
		{/if}
	{/each}
</div>

<style lang="scss">
	$matchup: '.matchup';
	#{$matchup} {
		--borderColor: #999;
		border: 1px solid var(--borderColor);
		max-width: var(--cardWidth);
	}

	$matchupTeam: '.matchupTeam';
	#{$matchupTeam} {
		&__logo {
			width: 35px;
			aspect-ratio: 1;
		}

		&:first-of-type {
			border-bottom: 1px solid var(--borderColor);
		}

		&__name {
			font-size: 0.8em;
			padding: 10px 0;
			white-space: nowrap;
		}

		&__wins {
			font-weight: 600;
			padding: 10px;
		}
	}
</style>
