<template>
	<svg
		width="24"
		height="21"
		viewBox="0 0 24 21"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
        v-bind="props"
	>
		<path
			d="M12 0L11.5901 0.226744L0.427326 6.54942L0 6.7936V7.28198V19.936V20.7733H0.837209H23.1628H24V19.936V7.28198V6.7936L23.5727 6.54942L12.4099 0.226744L12 0ZM12 1.92733L22.3256 7.77035V19.0988H20.9302V9.3314V8.49419H20.093H3.90698H3.06977V9.3314V19.0988H1.67442V7.77035L12 1.92733ZM4.74419 10.1686H19.2558V12.1221H4.74419V10.1686ZM4.74419 13.7965H19.2558V15.4709H4.74419V13.7965ZM4.74419 17.1453H19.2558V19.0988H4.74419V17.1453Z"
			:fill="color"
		/>
	</svg>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
	props: ['props', 'color'],
});
</script>

<style></style>
