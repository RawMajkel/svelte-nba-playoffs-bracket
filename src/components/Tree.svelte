<script type="ts">
	import { conferences } from '../stores';
	import Conference from './Conference.svelte';
</script>

<div class="conferences">
	{#each $conferences.data as conference, index (conference.id)}
		<Conference {conference} rtl={index % 2 != 0} />
	{/each}
</div>
