<template>
	<layout>
		<h1 class="text-xl font-bold text-brand-black capitalize mb-7">
			stock upload
		</h1>
		<section class="mt-14 flex justify-center items-center">
			<div class="w-11/12 lg:w-2/3">
				<h1
					class="capitalize text-brand-white bg-brand-blue text-lg font-bold px-7 py-2"
				>
					bulk upload
				</h1>
				<div
					class="flex justify-center items-center flex-col border border-brand-blue h-48"
				>
					<p class="text-sm text-brand-grey mb-7">
						Upload file type must be in CSV format
					</p>
					<form action="">
						<label
							for="upload"
							class="flex justify-center items-center w-56 bg-brand-white h-8 cursor-pointer border border-gray-400 mb-4"
							role="input"
						>
							<input
								type="file"
								name=""
								id="upload"
								class="hidden"
							/>
							<upload-mini-icon class="mr-2" />
							<span class="text-brand-grey capitalize text-sm">
								select file
							</span>
						</label>
						<button
							class="flex justify-center items-center w-56 h-8 bg-brand-white capitalize text-brand-grey text-sm border border-gray-400"
                            disabled
						>
							start upload
						</button>
					</form>
				</div>
			</div>
		</section>
	</layout>
</template>

<script lang="ts">
import UploadMiniIcon from '@/assets/svg/UploadMiniIcon.vue';
import Layout from '@/components/Layout.vue';
import { defineComponent } from 'vue';
export default defineComponent({
	components: { Layout, UploadMiniIcon },
});
</script>
