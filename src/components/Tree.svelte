<script type="ts">
	import { storePlayoffsData } from '../stores';
	import { randomizeData } from '../services/randomizeService';
	import ConferenceCard from './ConferenceCard.svelte';
	import FinalsCard from './FinalsCard.svelte';

	$: west = $storePlayoffsData.west;
	$: east = $storePlayoffsData.east;
</script>

<!-- <button on:click|preventDefault={randomizeData}>Randomize data</button> -->

<div class="conferences d-flex justify-content-between position-relative">
	<ConferenceCard conference={west} />
	<ConferenceCard conference={east} rtl={true} />
	<FinalsCard />
</div>
