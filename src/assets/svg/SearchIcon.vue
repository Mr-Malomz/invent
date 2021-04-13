<template>
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="props"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.25 18C15.3921 18 18.75 14.6421 18.75 10.5C18.75 6.35786 15.3921 3 11.25 3C7.10786 3 3.75 6.35786 3.75 10.5C3.75 14.6421 7.10786 18 11.25 18Z"
      stroke="#FDFDFF"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21.7498 21L16.5498 15.8"
      stroke="#FDFDFF"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: ["props", "color"],
});
</script>

<style></style>