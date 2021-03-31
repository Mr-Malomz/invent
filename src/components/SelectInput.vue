<template>
  <fieldset class="mb-7">
    <label :for="id" class="block mb-1 text-sm font-normal capitalize">
      {{ title }}
    </label>
    <select
      class="border w-full h-10 px-4 rounded focus:border-brand-blue border-brand-grey"
      :id="id"
      required
      v-model="selected"
      @change="onChange(selected)"
    >
      <option></option>
      <option v-for="option in options" :key="option.id" :value="option.id">
        {{ option.desc }}
      </option>
    </select>
  </fieldset>
</template>

<script lang="ts">
interface IOption {
  id: number;
  desc: string;
}

import { defineComponent, PropType } from "vue";
export default defineComponent({
  props: {
    title: String,
    options: Array as PropType<Array<IOption>>,
    id: String
  },

  data: () => ({
    selected: null,
  }),

  methods: {
    onChange(e: number) {
    this.$emit('onSelect', e)
    },
  },
});
</script>