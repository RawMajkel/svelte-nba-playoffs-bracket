<script type="ts">
	import { conferences } from '../stores';
	import Conference from './Conference.svelte';
</script>

<div class="conferences">
	{#each $conferences.data as conference (conference.id)}
		<Conference {conference} />
	{/each}
</div>
