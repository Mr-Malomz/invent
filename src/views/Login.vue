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
					class="bg-brand-white form-sec h-full flex flex-col justify-center items-center"
				>
					<div class="mb-14">
						<h1
							class="text-2xl lg:text-3xl font-bold text-brand-black"
						>
							Welcome back
						</h1>
						<p>Login to your account</p>
					</div>
					<!-- <a-form :form="form" @submit="handleSubmit">
						<a-form-item label="Username">
							<a-input
								v-decorator="[
									'username',
									{
										rules: [
											{
												required: true,
												message:
													'Username is required!',
											},
										],
									},
								]"
							/>
						</a-form-item>
						<a-button type="primary" html-type="submit">
							Submit
						</a-button>
					</a-form> -->
				</section>
			</div>
		</section>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'Login',
	components: {},
	methods: {
		handleSubmit() {},
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
