<script type="ts">
	import { storePlayoffsData } from '../stores';
	import ConferenceCard from './ConferenceCard.svelte';
	import FinalsCard from './FinalsCard.svelte';
</script>

<div class="conferences d-flex justify-content-between">
	<ConferenceCard conference={$storePlayoffsData.west} />
	<FinalsCard />
	<ConferenceCard conference={$storePlayoffsData.east} />
</div>
