<template>
  <div class="w-full h-10 border px-4 rounded border-brand-grey flex items-center cursor-pointer" role="button">
    <input type="text" class="w-full focus:outline-none cursor-pointer" disabled required/>
    <input-trigger />
  </div>
</template>

<script lang='ts'>
import InputTrigger from "@/assets/svg/InputTrigger.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { InputTrigger },});
</script>

<style>
</style>