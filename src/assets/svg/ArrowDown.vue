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
				d="M4.46873 11.0094L0.218726 6.75937C-0.0750244 6.46563 -0.0750244 5.99062 0.218726 5.7L0.924976 4.99375C1.21873 4.7 1.69373 4.7 1.98435 4.99375L4.99685 8.00625L8.00935 4.99375C8.3031 4.7 8.7781 4.7 9.06873 4.99375L9.77497 5.7C10.0687 5.99375 10.0687 6.46875 9.77497 6.75937L5.52498 11.0094C5.23748 11.3031 4.76248 11.3031 4.46873 11.0094Z"
				fill="#181B25"
			/>
		</g>
		<defs>
			<clipPath id="clip0">
				<rect width="10" height="16" fill="white" />
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
