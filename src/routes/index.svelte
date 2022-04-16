<script lang="ts">
	import { conferences } from '../stores';
	import { appConfig } from './../config/config';
</script>

<svelte:head>
	<title>{appConfig.name}</title>
</svelte:head>

<h1>{appConfig.name}</h1>
<div>{appConfig.author}</div>
<p>{appConfig.version}</p>

<div class="conferences">
	{#each $conferences.data as conference (conference.id)}
		<div class="conference conference--{conference.name.toLowerCase()}" data-id={conference.id}>
			<h2 class="conference__title">{conference.fullName} Conference</h2>

			<div class="conference__teams">
				{#each conference.teams as team (team.id)}
					<div class="team team--{team.abbr.toLowerCase()}" data-id={team.id}>
						<img
							class="team__logo"
							src={team.imgPath}
							alt={`${team.fullName} logo`}
							loading="lazy"
						/>
						<h3 class="team__title">{team.fullName}</h3>
					</div>
				{/each}
			</div>
		</div>
	{/each}
</div>

<style lang="scss">
	$team: '.team';
	#{$team} {
		&__logo {
			width: 100px;
		}
	}
</style>
