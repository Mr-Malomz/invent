<template>
  <div
    class="w-full h-10 border px-4 rounded flex items-center cursor-pointer"
    role="button"
  >
    <input
      type="text"
      class="w-full focus:outline-none cursor-pointer pointer-events-none focus:bg-transparent bg-transparent"
      :onkeydown="keyDown"
      required
      v-model="value"
      @change="handleChange"
    />
    <input-trigger />
  </div>
</template>

<script lang='ts'>
import InputTrigger from "@/assets/svg/InputTrigger.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { InputTrigger },
  data() {
    return {
      value: "",
      isError: false,
    };
  },
  methods: {
    handleChange() {
      this.$emit("handleChange", this.value);
    },

    keyDown() {
      return false;
    },
  },
});
</script>

<style>
</style>