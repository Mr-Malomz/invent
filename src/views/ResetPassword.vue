<template>
	<div
		class="h-screen w-screen bg-brand-blue-hover py-4 pl-4 pr-4 lg:pl-16 lg:py-8 bg-overlay"
	>
		<section class="flex justify-center h-full">
			<div
				class="w-full h-full 2xl:w-6/12 flex lg:justify-between flex-col lg:flex-row"
			>
				<header>
					<router-link to="/">
						<img
							src="../assets/utils/inventlogo.svg"
							class="h-10 lg:h-14 mb-4 lg:mb-0"
							alt="in-vent logo"
						/>
					</router-link>
				</header>
				<section
					class="bg-brand-white form-sec h-full flex flex-col justify-center px-8 lg:px-16"
				>
					<div class="mb-14">
						<h1
							class="text-2xl lg:text-3xl font-bold text-brand-black"
						>
							Reset password
						</h1>
						<p class="text-brand-grey">Let’s help you recover your account</p>
					</div>
					<form action="" class="w-full">
						<Input
							title="email"
							type="email"
							@handleChange="handleChangeEmail"
						/>
						<Button value="Reset my password" />
					</form>
				</section>
			</div>
		</section>
	</div>
</template>

<script lang="ts">
import Button from '@/components/Button.vue';
import Input from '@/components/Input.vue';
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'ResetPassword',
	components: { Input, Button },
	data() {
		return {
			email: '',
		};
	},
	methods: {
		handleChangeEmail(email: string) {
			this.email = email;
		},
	},
});
</script>

<style scoped>
.bg-overlay {
	background-image: url('../assets/utils/shapes.svg');
	background-repeat: no-repeat;
	background-position: bottom left;
}

.form-sec {
	width: 100%;
	border-radius: 10px;
}

@media (min-width: 1024px) {
	.form-sec {
		width: 34.5rem;
		border-radius: 20px;
	}
}
</style>
