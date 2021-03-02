<template>
	<table class="auto w-full h-full">
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
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

interface TableProps {
	id: number;
	title: string;
}
export default defineComponent({
	props: {
		title: String,
		headers: Array as PropType<Array<TableProps>>,
	},
});
</script>
