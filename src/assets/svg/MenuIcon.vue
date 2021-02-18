<template>
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		v-bind="props"
	>
		<path
			d="M3 12H21"
			stroke="#7B8794"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M3 6H21"
			stroke="#7B8794"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M3 18H21"
			stroke="#7B8794"
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
