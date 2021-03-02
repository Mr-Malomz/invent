<template>
	<layout>
		<h1 class="text-xl font-bold text-brand-black capitalize mb-7">
			stocks
		</h1>
		<section class="flex justify-between lg:justify-end items-center mb-7">
			<outline-link text="Upload CSV" to="" class="mr-7">
				<upload-icon class="mr-2" />
			</outline-link>
			<fill-link text="Add new item" to="">
				<plus-icon color="#fdfdfd" class="mr-2" />
			</fill-link>
		</section>
		<section class="h-full">
			<table-generic
				:headers="[
					{ id: 1, title: 'item code' },
					{ id: 2, title: 'ritem description' },
					{ id: 3, title: 'quantity' },
					{ id: 4, title: 'UOM' },
					{ id: 5, title: 'warehouse no' },
					{ id: 6, title: 'bin no' },
				]"
			>
				<tr class="border-brand-cancel border-b hover:bg-gray-100 h-12">
					<td class="pl-4 text-sm text-brand-grey">IR001</td>
					<td class="pl-4 text-sm text-brand-grey">
						Water cooler
					</td>
					<td class="pl-4 text-sm text-brand-grey">
						45
					</td>
					<td class="pl-4 text-sm text-brand-grey">
						kg
					</td>
					<td class="pl-4 text-sm text-brand-grey">
						1
					</td>
					<td class="pl-4 text-sm text-brand-grey">
						453
					</td>
				</tr>
			</table-generic>

			<div class="flex justify-center item-center">
				
			</div>
		</section>
	</layout>
</template>

<script lang="ts">
import PlusIcon from '@/assets/svg/PlusIcon.vue';
import UploadIcon from '@/assets/svg/UploadIcon.vue';
import FillLink from '@/components/FillLink.vue';
import Layout from '@/components/Layout.vue';
import OutlineLink from '@/components/OutlineLink.vue';
import TableGeneric from '@/components/TableGeneric.vue';
import { defineComponent } from 'vue';

export default defineComponent({
	components: {
		Layout,
		OutlineLink,
		FillLink,
		PlusIcon,
		UploadIcon,
		TableGeneric,
	},
});
</script>

<style lang="scss" scoped></style>
