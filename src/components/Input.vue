<template>
	<div class="w-full mb-7">
		<label :for="title" class="block mb-1 text-sm font-normal capitalize">{{
			title
		}}</label>
		<input
			:type="type"
			:class="isError ? 'border-red-500' : 'border-brand-grey '"
			class="border w-full h-10 px-4 rounded focus:border-brand-blue"
			:id="title"
			@change="handleChange"
			@keyup="onKeyUp"
			v-model="value"
			required
		/>
		<span class="text-xs text-red-500" v-if="isError"
			>Please fill in your {{ title }}</span
		>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	props: { title: String, type: String },
	data() {
		return {
			value: '',
			isError: false,
		};
	},
	methods: {
		handleChange() {
			this.$emit('handleChange', this.value);
		},

		onKeyUp() {
			const regex = /^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/;
			if (!this.value) {
				this.isError = true;
			} else {
				if (this.type === 'email' && !regex.test(this.value)) {
					this.isError = true;
				} else {
					this.isError = false;
				}
			}
		},
	},
});
</script>

<style></style>
