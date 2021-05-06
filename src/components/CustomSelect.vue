<template>
  <div class="mb-7 relative">
    <label :for="title" class="block mb-1 text-sm font-normal capitalize">{{
      title
    }}</label>
    <div
      :class="isError ? 'border-red-500' : 'border-brand-grey'"
      class="border w-full cont-tag px-4 py-2 rounded focus:border-brand-blue"
      role="listbox"
    >
    <div class="h-8 flex px-2 w-min text-sm items-center bg-gray-200 rounded-sm">
      <span class="inline-block mr-4">Google</span>
      <tiny-menu-close />
    </div>
    </div>
    <div class="bg-brand-white shadow-2xl rounded-lg absolute z-10 h-32 w-full">
        <div class="w-full h-full py-2 flex flex-col  overflow-y-auto">
            <div role="button" class="px-6 py-2 capitalize cursor-pointer text-sm hover:bg-brand-cancel" v-for="option in options" :key="option.id">
              {{option.desc}}
            </div>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TinyMenuClose from "@/assets/svg/TinyMenuClose.vue"

export default defineComponent({
  components: { TinyMenuClose },
  props: {
    title: String,
  },
  data() {
    return {
      isError: false,
      options: [
        { id: 1, desc: "item code" },
        { id: 2, desc: "item description" },
        { id: 3, desc: "quantity" },
        { id: 4, desc: "UOM" },
        { id: 5, desc: "warehouse no" },
        { id: 6, desc: "bin no" },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.cont-tag {
  min-height: 2.5rem;
}
</style>
