<template>
	<router-link
		:to="to"
		class="h-11 w-52 flex justify-center items-center bg-brand-blue hover:bg-brand-blue-hover rounded transition-all ease-in-out duration-75"
	>
		<slot></slot>
		<span class="text-sm font-bold text-brand-white">{{ text }}</span>
	</router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	props: ['text', 'to'],
});
</script>

<style lang="scss" scoped></style>
