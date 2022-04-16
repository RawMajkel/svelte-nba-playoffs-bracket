<script lang="ts">
	import { Team } from '../common/team';
	import { Conference } from '../common/conference';

	const eastTeams: Team[] = [
		new Team(1, 'lorem ipsum', 'https://via.placeholder.com/150x150'),
		new Team(2, 'lorem ipsum', 'https://via.placeholder.com/150x150'),
		new Team(3, 'lorem ipsum', 'https://via.placeholder.com/150x150'),
		new Team(4, 'lorem ipsum', 'https://via.placeholder.com/150x150'),
		new Team(5, 'lorem ipsum', 'https://via.placeholder.com/150x150'),
		new Team(6, 'lorem ipsum', 'https://via.placeholder.com/150x150'),
		new Team(7, 'lorem ipsum', 'https://via.placeholder.com/150x150'),
		new Team(8, 'lorem ipsum', 'https://via.placeholder.com/150x150')
	];

	const westTeams: Team[] = [
		new Team(1, 'lorem ipsum', 'https://via.placeholder.com/150x150'),
		new Team(2, 'lorem ipsum', 'https://via.placeholder.com/150x150'),
		new Team(3, 'lorem ipsum', 'https://via.placeholder.com/150x150'),
		new Team(4, 'lorem ipsum', 'https://via.placeholder.com/150x150'),
		new Team(5, 'lorem ipsum', 'https://via.placeholder.com/150x150'),
		new Team(6, 'lorem ipsum', 'https://via.placeholder.com/150x150'),
		new Team(7, 'lorem ipsum', 'https://via.placeholder.com/150x150'),
		new Team(8, 'lorem ipsum', 'https://via.placeholder.com/150x150')
	];

	const conferences: Conference[] = [
		new Conference('west', 'https://via.placeholder.com/300x300', westTeams),
		new Conference('east', 'https://via.placeholder.com/300x300', eastTeams)
	];
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<div class="conferences">
	{#each conferences as conference (conference.id)}
		<div class="conference" data-id={conference.id}>
			{conference.name}

			<ol>
				{#each conference.teams as team (team.id)}
					<li class="team" data-id={team.id}>{team.name}</li>
				{/each}
			</ol>
		</div>
	{/each}
</div>
