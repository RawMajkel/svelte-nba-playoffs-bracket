<script lang="ts">
	import { conferences } from '../stores';
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<div class="conferences">
	{#each $conferences.data as conference (conference.id)}
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
