<template>
	<layout>
		<h1 class="text-xl font-bold text-brand-black capitalize mb-7">
			inventory
		</h1>
		<section class="grid grid-flow-row lg:grid-flow-col gap-7 mb-7">
			<router-link
				to="#"
				class="h-28 w-full bg-brand-white card flex items-center rounded-lg p-4"
			>
				<div
					class="h-10 w-10 flex justify-center items-center bg-brand-cancel rounded-lg mr-5"
				>
					<good-receipt-icon />
				</div>
				<h5 class="text-brand-black text-base font-semibold">
					Create new Good Receipt
				</h5>
			</router-link>
			<router-link
				to="#"
				class="h-28 w-full bg-brand-white card flex items-center rounded-lg p-4"
			>
				<div
					class="h-10 w-10 flex justify-center items-center bg-brand-cancel rounded-lg mr-5"
				>
					<good-issue-icon />
				</div>
				<h5 class="text-brand-black text-base font-semibold">
					Create new Good Issue
				</h5>
			</router-link>
		</section>
		<section class="h-full">
			<h1 class="text-xl font-bold text-brand-black capitalize mb-7">
				item request
			</h1>
			<table-generic
				:headers="[
					{ id: 1, title: 'request no' },
					{ id: 2, title: 'requester' },
					{ id: 3, title: 'date' },
					{ id: 6, title: '' },
				]"
			>
				<tr class="border-brand-cancel border-b hover:bg-gray-100 h-12">
					<td class="pl-4 text-sm text-brand-grey">IR001</td>
					<td class="pl-4 text-sm text-brand-grey">
						Bayo Enmanuel
					</td>
					<td class="pl-4 text-sm text-brand-grey">
						24 - 01 - 2021
					</td>
					<td class="pl-4 text-sm text-brand-grey">
						<router-link
							to="#"
							class="capitalize font-bold text-brand-blue hover:text-brand-blue-hover"
							>manage</router-link
						>
					</td>
				</tr>
			</table-generic>

			<div class="flex justify-center item-center"></div>
		</section>
	</layout>
</template>

<script lang="ts">
import GoodIssueIcon from '@/assets/svg/GoodIssueIcon.vue';
import GoodReceiptIcon from '@/assets/svg/GoodReceiptIcon.vue';
import Layout from '@/components/Layout.vue';
import TableGeneric from '@/components/TableGeneric.vue';
import { defineComponent } from 'vue';
export default defineComponent({
	components: { Layout, GoodReceiptIcon, GoodIssueIcon, TableGeneric },
});
</script>
