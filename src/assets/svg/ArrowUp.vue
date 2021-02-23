<template>
	<svg
		width="10"
		height="16"
		viewBox="0 0 10 16"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
        v-bind="props"
	>
		<g clip-path="url(#clip0)">
			<path
				d="M5.53127 4.99063L9.78127 9.24063C10.075 9.53438 10.075 10.0094 9.78127 10.3L9.07502 11.0063C8.78127 11.3 8.30627 11.3 8.01565 11.0063L5.00315 7.99375L1.99065 11.0063C1.6969 11.3 1.2219 11.3 0.931274 11.0063L0.225025 10.3C-0.0687248 10.0063 -0.0687248 9.53125 0.225025 9.24063L4.47502 4.99063C4.76252 4.69688 5.23752 4.69688 5.53127 4.99063V4.99063Z"
				fill="#181B25"
			/>
		</g>
		<defs>
			<clipPath id="clip0">
				<rect
					width="10"
					height="16"
					fill="white"
					transform="translate(10 16) rotate(-180)"
				/>
			</clipPath>
		</defs>
	</svg>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
	props: ['props'],
});
</script>

<style></style>
