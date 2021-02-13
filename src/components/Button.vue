<template>
	<button
		class="h-10 flex justify-center items-center w-full bg-brand-blue text-brand-white text-sm font-bold rounded transition-all ease-in-out duration-75 hover:bg-brand-blue-hover"
	>
		{{ value }}
	</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default {
	props: ['value'],
};
</script>

<style></style>
