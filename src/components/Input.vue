<template>
	<div class="w-full mb-7">
		<label :for="title" class="block mb-1 text-sm font-normal capitalize">{{
			title
		}}</label>
		<input
			:type="type"
			class="border w-full h-10 border-brand-grey px-4 rounded focus:border-brand-blue"
			:id="title"
			@change="handleChange"
			v-model="value"
		/>
	</div>
</template>

<script lang="ts">
export default {
	props: { title: String, type: String },
	data() {
		return {
			value: '',
		};
	},
	methods: {
		handleChange() {
			this.$emit('handleChange', this.value);
		},
	},
};
</script>

<style></style>
