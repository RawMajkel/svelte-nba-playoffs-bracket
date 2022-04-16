<script type="ts">
	import { storePlayoffsData } from '../stores';
	import ConferenceCard from './ConferenceCard.svelte';
</script>

<div class="conferences d-flex justify-content-between">
	<ConferenceCard conference={$storePlayoffsData.west} />
	<ConferenceCard conference={$storePlayoffsData.east} />
</div>
