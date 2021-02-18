<template>
	<div class="min-h-screen bg-brand-bg lg:flex lg:justify-between">
		<Sidebar :handleModal="handleModal" :isModalOpen="isModalOpen" />
		<section class="w-full h-auto">
			<header
				className="px-4 py-2 flex justify-between items-center lg:px-8 lg:py-8 w-full lg:justify-end"
			>
				<div class="lg:hidden">
					<menu-icon
						@click="handleModal"
						className="cursor-pointer"
					/>
				</div>
			</header>
		</section>
	</div>
</template>

<script lang="ts">
import MenuIcon from '@/assets/svg/MenuIcon.vue';
import { defineComponent } from 'vue';
import Sidebar from './Sidebar.vue';

export default defineComponent({
	components: { Sidebar, MenuIcon },

	data: () => ({
		isOpen: false,
		isModalOpen: false,
	}),

	methods: {
		handleModal() {
			this.isModalOpen = !this.isModalOpen;
		},
	},
});
</script>

<style></style>
