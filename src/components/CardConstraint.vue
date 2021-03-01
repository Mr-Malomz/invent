<template>
	<section class="card-wrap bg-brand-white rounded-lg h-96 max-h-96 p-4">
		<h5 class="text-sm font-bold text-brand-black mb-7 capitalize">
			{{ title }}
		</h5>
		<div class="h-5/6 w-full overflow-auto">
			<table class="auto w-full">
				<thead>
					<tr>
						<th
							v-for="header in headers"
							:key="header.id"
							class="capitalize font-normal bg-brand-cancel text-sm text-left h-12 pl-4 text-brand-black sticky z-10 top-0"
						>
							{{ header.title }}
						</th>
					</tr>
				</thead>
				<tbody>
					<slot></slot>
				</tbody>
			</table>
		</div>
	</section>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

interface TableProps {
	id: number;
	title: string
}
export default defineComponent({
	props: {
		title: String,
		headers: Array as PropType<Array<TableProps>>,
	},
});
</script>

<style lang="scss" scoped>
.card-wrap {
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>
