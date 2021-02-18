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
			d="M25 1L1 25"
			:stroke="colorStyle"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
            :id="colorStyle"
		/>
		<path
			d="M1 1L25 25"
			:stroke="colorStyle"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
	props: ['props', 'colorStyle'],
});
</script>

<style></style>
