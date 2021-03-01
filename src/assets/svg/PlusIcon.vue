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
			d="M12.25 5V19"
			:stroke="color"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M5.25 12H19.25"
			:stroke="color"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
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