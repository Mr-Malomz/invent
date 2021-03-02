<template>
	<svg
		width="25"
		height="24"
		viewBox="0 0 25 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		v-bind="props"
	>
		<path
			d="M3.75 17V20C3.75 21.1046 4.64543 22 5.75 22H19.75C20.8546 22 21.75 21.1046 21.75 20V17"
			stroke="#0A277A"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M16.75 6L12.75 2L8.75 6"
			stroke="#0A277A"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M12.75 2V16"
			stroke="#1E3A8A"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
	props: ['props'],
});
</script>

<style></style>
