<template>
  <layout>
    <h1 class="text-xl font-bold text-brand-black capitalize mb-7">
      warehouse
    </h1>
    <section class="flex justify-end items-center mb-7">
      <fill-link text="Add new item" to="add-stock">
        <plus-icon color="#fdfdfd" class="mr-2" />
      </fill-link>
    </section>
    <section class="grid grid-cols-1 lg:grid-cols-2">
      <div
        class="w-full lg:w-11/12 ware-cont flex justify-between flex-col h-80 px-4 py-7 bg-brand-white rounded-xl"
      >
        <section>
          <div class="border-b border-brand-cancel mb-4">
            <h5 class="text-base font-bold text-brand-black mb-4">
              WH001 - Oshodi
            </h5>
          </div>
          <div class="mb-4">
            <p class="capitalize font-bold text-sm mb-4 text-brand-black">
              address
            </p>
            <p class="font-normal text-sm mb-4 text-brand-grey">
              Km 234 Oshodi-apapa expressway, Lagos Nigeria
            </p>
          </div>
          <div class="mb-4">
            <p class="capitalize font-bold text-sm mb-4 text-brand-black">
              toatl stocks
            </p>
            <p class="font-normal text-sm mb-4 text-brand-grey">4500</p>
          </div>
        </section>
        <section class="flex justify-end items-center">
          <router-link
            to="to"
            class="h-11 capitalize flex justify-center items-center text-brand-blue hover:text-brand-blue-hover rounded transition-all ease-in-out duration-75"
          >
            <span class="inline-block mr-2 text-base font-bold">view</span>
            <view-arrow-icon />
          </router-link>
        </section>
      </div>
    </section>
  </layout>
</template>

<script lang="ts">
import PlusIcon from "@/assets/svg/PlusIcon.vue";
import ViewArrowIcon from "@/assets/svg/ViewArrowIcon.vue";
import FillLink from "@/components/FillLink.vue";
import Layout from "@/components/Layout.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    Layout,
    FillLink,
    PlusIcon,
    ViewArrowIcon,
  },
});
</script>

<style lang="scss" scoped>
.ware-cont {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>
