<template>
	<button
		class="h-10 flex justify-center items-center w-full text-sm font-bold rounded transition-all ease-in-out duration-75"
		:class="color"
	>
		{{ value }}
	</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
	props: {
		value: String,
		color: {default: 'bg-brand-blue text-brand-white hover:bg-brand-blue-hover'}
	},
});
</script>

<style></style>
