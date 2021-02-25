<template>
	<router-link
		:to="to"
		class="h-11 w-52 flex justify-center items-center border border-brand-blue hover:bg-brand-cancel rounded transition-all ease-in-out duration-75"
	>
		<slot></slot>
		<span class="text-sm font-bold text-brand-blue">{{ text }}</span>
	</router-link>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
	props: ['text', 'to'],
});
</script>

<style lang="scss" scoped></style>
