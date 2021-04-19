<template>
  <layout>
    <h1 class="text-xl font-bold text-brand-black capitalize mb-7">users</h1>
    <section class="flex justify-between lg:justify-end items-center mb-7">
      <outline-link text="Upload CSV" to="" class="mr-7">
        <upload-icon class="mr-2" />
      </outline-link>
      <fill-link text="Add new user" to="">
        <plus-icon color="#fdfdfd" class="mr-2" />
      </fill-link>
    </section>
    <section class="h-full">
      <table-generic
        :headers="[
          { id: 1, title: 'user ID' },
          { id: 2, title: 'firstname' },
          { id: 3, title: 'lastname' },
          { id: 4, title: 'status' },
          { id: 5, title: 'action' },
        ]"
      >
        <tr class="border-brand-cancel border-b hover:bg-gray-100 h-12">
          <td class="pl-4 text-sm text-brand-grey">LA23323</td>
          <td class="pl-4 text-sm text-brand-grey">salau</td>
          <td class="pl-4 text-sm text-brand-grey">hammed</td>
          <td class="pl-4 text-sm text-brand-grey">
            <span
              class="inline-block px-9 py-1 bg-brand-status-active text-brand-black rounded-full"
            >
              Active
            </span>
          </td>
          <td class="pl-4 text-sm text-brand-grey">
            <router-link
              to=""
              class="font-bold text-brand-blue capitalize hover:text-brand-blue-hover"
            >
              manage
            </router-link>
          </td>
        </tr>
      </table-generic>

      <div class="flex justify-center item-center"></div>
    </section>
  </layout>
</template>

<script lang="ts">
import PlusIcon from "@/assets/svg/PlusIcon.vue";
import UploadIcon from "@/assets/svg/UploadIcon.vue";
import FillLink from "@/components/FillLink.vue";
import Layout from "@/components/Layout.vue";
import OutlineLink from "@/components/OutlineLink.vue";
import TableGeneric from "@/components/TableGeneric.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    Layout,
    OutlineLink,
    FillLink,
    PlusIcon,
    UploadIcon,
    TableGeneric,
  },
});
</script>

<style lang="scss" scoped></style>
