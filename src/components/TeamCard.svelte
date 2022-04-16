<script type="ts">
	import type { Team } from '../common/team';

	export let team: Team;
</script>

<div class="team team--{team.abbr.toLowerCase()}" data-id={team.id}>
	<img class="team__logo" src={team.imgPath} alt={`${team.fullName} logo`} loading="lazy" />
	<h3 class="team__title">{team.fullName}</h3>
</div>

<style lang="scss">
	$team: '.team';
	#{$team} {
		&__logo {
			width: 100px;
		}
	}
</style>
