<script type="ts">
	import { storePlayoffsData } from '../stores';
	import ConferenceCard from './ConferenceCard.svelte';
	import FinalsCard from './FinalsCard.svelte';
</script>

<div class="conferences d-flex justify-content-between position-relative">
	<ConferenceCard conference={$storePlayoffsData.west} />
	<ConferenceCard conference={$storePlayoffsData.east} rtl={true} />
	<FinalsCard />
</div>

<style lang="scss">
	.conferences {
		position: relative;
	}
</style>
