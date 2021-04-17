<template>
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="props"
  >
    <path
      d="M4 12H20"
      stroke="#1E3A8A"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M14 6L20 12L14 18"
      stroke="#1E3A8A"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: ["props"],
});
</script>
