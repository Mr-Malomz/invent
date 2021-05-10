<template>
  <div class="w-full" :class="showTitle ? 'mb-7' : ''">
    <label
      :for="title"
      v-if="showTitle"
      class="block mb-1 text-sm font-normal capitalize"
      >{{ title }}</label
    >
    <input
      :type="type"
      :class="isError ? 'border-red-500' : 'border-brand-grey '"
      class="border w-full h-10 px-4 rounded focus:border-brand-blue"
      :id="title"
      @input="$emit('update:modelValue', $event.target.value)"
      @keyup="onKeyUp"
      :value="modelValue"
      required
      :maxlength="length"
      :disabled="disabled"
    />
    <span
      class="text-xs text-red-500"
      v-if="isError"
      :class="showErrorMsg ? 'inline-block' : 'hidden'"
      >Please fill in your {{ title }}</span
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: String,
    type: String,
    length: Number,
    showErrorMsg: { type: Boolean, default: true },
    showTitle: { type: Boolean, default: true },
    modelValue: {
      type: [String, Number],
      default: "",
    },
    disabled: Boolean,
  },

  data() {
    return {
      isError: false,
    };
  },
  methods: {
    onKeyUp() {
      const regex = /^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/;
      if (!this.modelValue) {
        this.isError = true;
      } else {
        if (this.type === "email" && !regex.test(this.modelValue as string)) {
          this.isError = true;
        } else {
          this.isError = false;
        }
      }
    },
  },
});
</script>

<style></style>
