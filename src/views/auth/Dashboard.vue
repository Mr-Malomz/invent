<template>
	<layout>
		<h1 class="text-xl font-bold text-brand-black capitalize mb-7">
			dashboard
		</h1>
		<section class="grid grid-flow-row lg:grid-flow-col gap-7 mb-7">
			<div
				class="h-28 w-full bg-brand-white card flex justify-between rounded-lg p-4"
			>
				<div class="flex justify-between flex-col">
					<p class="text-sm text-brand-grey capitalize">
						total stocks
					</p>
					<h3 class="text-brand-black text-2xl font-bold">123</h3>
				</div>
				<div
					class="flex h-10 w-10 rounded icon-wrap justify-center items-center"
				>
					<stock-icon color="#FDFDFF" />
				</div>
			</div>
			<div
				class="h-28 w-full bg-brand-white card flex justify-between rounded-lg p-4"
			>
				<div class="flex justify-between flex-col">
					<p class="text-sm text-brand-grey capitalize">
						warehouse
					</p>
					<h3 class="text-brand-black text-2xl font-bold">1</h3>
				</div>
				<div
					class="flex h-10 w-10 rounded bg-brand-blue-hover justify-center items-center"
				>
					<warehouse-icon color="#FDFDFF" />
				</div>
			</div>
			<div
				class="h-28 w-full bg-brand-white card flex justify-between rounded-lg p-4"
			>
				<div class="flex justify-between flex-col">
					<p class="text-sm text-brand-grey capitalize">
						users
					</p>
					<h3 class="text-brand-black text-2xl font-bold">123</h3>
				</div>
				<div
					class="flex h-10 w-10 rounded icon-wrap2 justify-center items-center"
				>
					<user-icon color="#FDFDFF" />
				</div>
			</div>
		</section>
		<section class="flex justify-between lg:justify-end items-center mb-7">
			<outline-link
				text="Manage inventory"
				to=""
				class="mr-7"
			></outline-link>
			<fill-link text="Request an item" to=""
				><plus-icon color="#fdfdfd" class="mr-2"
			/></fill-link>
		</section>
		<section class="grid grid-cols-1 lg:grid-cols-2 gap-14 mb-7">
			<card-constraint
				title="my documents"
				:headers="[
					{ id: 1, title: 'item description' },
					{ id: 2, title: 'doc no' },
					{ id: 3, title: 'status' },
					{ id: 4, title: '' },
				]"
			>
				<tr class="border-brand-cancel border-b hover:bg-gray-100 h-12">
					<td class="pl-4 text-sm text-brand-grey">IR001</td>
					<td class="pl-4 text-sm text-brand-grey">
						Bulk electronic supply
					</td>
					<td class="pl-4 text-sm text-brand-grey">
						<span
							class="bg-brand-status-done px-3 py-1 rounded-full capitalize"
							>done</span
						>
					</td>
					<td class="pl-4 text-sm">
						<router-link
							to="#"
							class="capitalize font-bold text-brand-blue hover:text-brand-blue-hover"
							>edit</router-link
						>
					</td>
				</tr>
			</card-constraint>

			<card-constraint
				title="to do"
				:headers="[
					{ id: 1, title: 'request no' },
					{ id: 2, title: 'requester' },
					{ id: 3, title: '' },
				]"
			>
				<tr class="border-brand-cancel border-b hover:bg-gray-100 h-12">
					<td class="pl-4 text-sm text-brand-grey">IR001</td>
					<td class="pl-4 text-sm text-brand-grey">
						Susan prat
					</td>
					<td class="pl-4 text-sm">
						<router-link
							to="#"
							class="capitalize font-bold text-brand-blue hover:text-brand-blue-hover"
							>view</router-link
						>
					</td>
				</tr>
			</card-constraint>
		</section>
		<section>
			<card-full
				title="stocks"
				to="#"
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
						453455
					</td>
					<td class="pl-4 text-sm text-brand-grey">
						1
					</td>
					<td class="pl-4 text-sm text-brand-grey">
						453
					</td>
				</tr>
			</card-full>
		</section>
	</layout>
</template>

<script>
import PlusIcon from '@/assets/svg/PlusIcon.vue';
import StockIcon from '@/assets/svg/StockIcon.vue';
import UserIcon from '@/assets/svg/UserIcon.vue';
import WarehouseIcon from '@/assets/svg/WarehouseIcon.vue';
import CardConstraint from '@/components/CardConstraint.vue';
import CardFull from '@/components/CardFull.vue';
import FillLink from '@/components/FillLink.vue';
import Layout from '@/components/Layout.vue';
import OutlineLink from '@/components/OutlineLink.vue';
import { defineComponent } from 'vue';

export default defineComponent({
	components: {
		Layout,
		StockIcon,
		WarehouseIcon,
		UserIcon,
		OutlineLink,
		FillLink,
		PlusIcon,
		CardConstraint,
		CardFull,
	},
});
</script>

<style lang="scss" scoped>
.card {
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

	.icon-wrap {
		background: #5e94db;
	}
	.icon-wrap2 {
		background: #0a7a44;
	}
}
</style>
