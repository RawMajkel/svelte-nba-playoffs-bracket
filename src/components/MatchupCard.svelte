<script type="ts">
	import type { Matchup } from '../common/matchup';

	export let matchup: Matchup;
</script>

<!-- <div class="team team--{team.abbr.toLowerCase()}" data-id={team.id}>
	<img class="team__logo" src={team.imgPath} alt={`${team.fullName} logo`} loading="lazy" />
	<h3 class="team__title">{team.seed}. {team.fullName}</h3>
</div> -->

<h3 class="team__title">{matchup.higherTeam.seed}. {matchup.higherTeam.fullName}</h3>
<h3 class="team__title">{matchup.lowerTeam.seed}. {matchup.lowerTeam.fullName}</h3>

<style lang="scss">
	$team: '.team';
	#{$team} {
		&__logo {
			width: 100px;
		}
	}
</style>
