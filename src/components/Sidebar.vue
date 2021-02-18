<template>
	<div class="nav-bg bg-brand-white flex flex-col items-center">
		<nav
			:class="isModalOpen ? 'block' : 'hidden'"
			class="lg:block w-48 bg-brand-white z-20 h-screen max-h-screen fixed left-0 pl-4 pr-1"
		>
			<div class="flex justify-center w-full mt-6 mb-24">
				<img src="../assets/images/proc.jpg" alt="logo" />
			</div>

			<router-link
				active-class="active-nav svg-focus"
				to="/auth/dashboard"
				class="flex items-center py-2 mb-2 bg pl-4 rounded-lg lg:mb-6 text-brand-grey hover:bg-brand-bg"
			>
				<home-icon class="mr-4" />
				<span class="font-semibold capitalize text-sm">dashboard</span>
			</router-link>
			<router-link
				active-class="active-nav svg-focus"
				to="/auth/stock"
				class="flex items-center py-2 mb-2 pl-4 rounded-lg lg:mb-6 text-brand-grey hover:bg-brand-bg"
			>
				<stock-icon class="mr-4" />
				<span class="font-semibold capitalize text-sm">stock</span>
			</router-link>
			<router-link
				active-class="active-nav svg-focus"
				to="/auth/manage-inv"
				class="flex items-center py-2 mb-2 pl-4 rounded-lg lg:mb-6 text-brand-grey hover:bg-brand-bg"
			>
				<manage-icon class="mr-4" />
				<span class="font-semibold capitalize text-sm"
					>manage inv.</span
				>
			</router-link>
			<router-link
				active-class="active-nav svg-focus"
				to="/auth/warehouse"
				class="flex items-center py-2 mb-2 pl-4 rounded-lg lg:mb-6 text-brand-grey hover:bg-brand-bg"
			>
				<warehouse-icon class="mr-4" />
				<span class="font-semibold capitalize text-sm">warehouse</span>
			</router-link>
			<router-link
				active-class="active-nav svg-focus"
				to="/auth/manage-inv"
				class="flex items-center py-2 mb-2 pl-4 rounded-lg lg:mb-6 text-brand-grey hover:bg-brand-bg"
			>
				<user-icon class="mr-4" />
				<span class="font-semibold capitalize text-sm">users</span>
			</router-link>
			<router-link
				active-class="active-nav svg-focus"
				to="/auth/manage-inv"
				class="flex items-center py-2 mb-2 pl-4 rounded-lg lg:mb-6 text-brand-grey hover:bg-brand-bg"
			>
				<settings-icon class="mr-4" />
				<span class="font-semibold capitalize text-sm">settings</span>
			</router-link>
			<menu-close />
		</nav>
	</div>
	<div
		:class="isModalOpen ? 'fixed' : 'hidden'"
		class="h-full w-screen top-0 z-10 left-0 lg:hidden blur-bg"
		onClick="{handleModal}"
	>
		<div class="mt-3 float-right mr-3">
			<menu-close
				className="cursor-pointer"
				@click="handleModal"
				:colorStyle="'#FDFDFD'"
			/>
		</div>
	</div>
</template>

<script lang="ts">
import HomeIcon from '@/assets/svg/HomeIcon.vue';
import ManageIcon from '@/assets/svg/ManageIcon.vue';
import MenuClose from '@/assets/svg/MenuClose.vue';
import SettingsIcon from '@/assets/svg/SettingsIcon.vue';
import StockIcon from '@/assets/svg/StockIcon.vue';
import UserIcon from '@/assets/svg/UserIcon.vue';
import WarehouseIcon from '@/assets/svg/WarehouseIcon.vue';
import { defineComponent } from 'vue';

export default defineComponent({
	components: {
		HomeIcon,
		StockIcon,
		ManageIcon,
		WarehouseIcon,
		UserIcon,
		SettingsIcon,
		MenuClose,
	},
	props: ['handleModal', 'isModalOpen'],
});
</script>

<style lang="scss" scoped>
.nav-bg {
	box-shadow: 0px 2px 2px rgba(67, 56, 202, 0.1);
	width: 15.1rem;
}

.blur-bg {
	background: rgba(0, 0, 0, 0.5);
	backdrop-filter: blur(2px);
}

.active-nav {
	background: #1e3a8a;
}

.svg-focus {
	color: #fdfdff;

	:deep svg {
		path {
			fill: #fdfdff;
		}
	}
}
</style>
