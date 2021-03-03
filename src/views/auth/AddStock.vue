<template>
	<layout>
		<h1 class="text-xl font-bold text-brand-black capitalize mb-7">
			add new stock
		</h1>
		<section class="mt-14 flex justify-center items-center">
			<div class="card-wrap p-7 bg-brand-white rounded-lg w-11/12 ">
				<form action="">
					<input-field
						title="item description"
						type="text"
						length="2"
					/>
					<input-field title="quantity" type="number" />
					<fieldset class="mb-7">
						<label
							for="uom"
							class="block mb-1 text-sm font-normal capitalize"
						>
							unit of measurement
						</label>
						<select
							class="border w-full h-10 px-4 rounded focus:border-brand-blue"
							:class="
								isError
									? 'border-red-500'
									: 'border-brand-grey '
							"
							id="uom"
							required
						>
							<option value=""></option>
						</select>
					</fieldset>
					<fieldset class="mb-7">
						<label
							for="warehouse"
							class="block mb-1 text-sm font-normal capitalize"
						>
							warehouse
						</label>
						<select
							class="border w-full h-10 px-4 rounded focus:border-brand-blue"
							:class="
								isError
									? 'border-red-500'
									: 'border-brand-grey '
							"
							id="warehouse"
							required
						>
							<option value=""></option>
						</select>
					</fieldset>
					<Button value="Add new stock" />
				</form>
			</div>
		</section>
	</layout>
</template>

<script lang="ts">
import Button from '@/components/Button.vue';
import InputField from '@/components/Input.vue';
import Layout from '@/components/Layout.vue';
import { defineComponent } from 'vue';

export default defineComponent({
	components: { Layout, InputField, Button },
});
</script>

<style lang="scss" scoped>
.card-wrap {
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	@media (min-width: 1024px) {
		width: 34.5rem;
	}
}
</style>
