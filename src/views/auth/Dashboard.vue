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
		<section class="flex justify-end items-center">
			<outline-link text="Manage inventory" to="" class="mr-7"></outline-link>
      <fill-link text="Request an item" to=""></fill-link>
		</section>
	</layout>
</template>

<script>
import StockIcon from '@/assets/svg/StockIcon.vue';
import UserIcon from '@/assets/svg/UserIcon.vue';
import WarehouseIcon from '@/assets/svg/WarehouseIcon.vue';
import FillLink from '@/components/FillLink.vue';
import Layout from '@/components/Layout.vue';
import OutlineLink from '@/components/OutlineLink.vue';
import { defineComponent } from 'vue';

export default defineComponent({
	components: { Layout, StockIcon, WarehouseIcon, UserIcon, OutlineLink, FillLink },
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
