<template>
  <layout>
    <h1 class="text-xl font-bold text-brand-black capitalize mb-7">
      good receipt
    </h1>
    <section class="flex justify-end items-center mb-7">
      <outline-link text="Add Item" to="" class="mr-7">
        <plus-icon color="#1E3A8A" class="mr-2" />
      </outline-link>
    </section>
    <form class="h-full" @submit="handleSubmit">
      <table-generic
        :headers="[
          { id: 1, title: 'item' },
          { id: 2, title: 'description' },
          { id: 3, title: 'quantity' },
          { id: 4, title: 'warehouse' },
          { id: 4, title: 'bin' },
          { id: 4, title: '' },
        ]"
      >
        <tr class="border-brand-cancel border-b hover:bg-gray-100 h-12">
          <td class="pl-4 text-sm text-brand-grey">
            <div class="w-28">
              <input-button />
            </div>
          </td>
          <td class="pl-4 text-sm text-brand-grey">
            <input-field
              title="quantity"
              type="text"
              :showErrorMsg="false"
              :showTitle="false"
            />
          </td>
          <td class="pl-4 text-sm text-brand-grey">
            <input-field
              title="quantity"
              type="number"
              :showErrorMsg="false"
              :showTitle="false"
            />
          </td>
          <td class="pl-4 text-sm text-brand-grey">
            <select
              class="border w-full h-10 px-4 rounded focus:border-brand-blue"
              :class="isError ? 'border-red-500' : 'border-brand-grey '"
              id="uom"
              required
            >
              <option value="">h</option>
              <option value="">h</option>
            </select>
          </td>
          <td class="pl-4 text-sm text-brand-grey">
            <select
              class="border w-full h-10 px-4 rounded focus:border-brand-blue"
              :class="isError ? 'border-red-500' : 'border-brand-grey '"
              id="uom"
              required
            >
              <option value="">t</option>
              <option value="">t</option>
            </select>
          </td>
          <td class="pl-4 text-sm text-brand-grey">
            <div class="w-28 flex justify-center">
              <delete-icon class="cursor-pointer" />
            </div>
          </td>
        </tr>
      </table-generic>
      <div class="flex justify-center mt-14">
        <div class="w-5/6 lg:w-1/3">
          <Button value="Add new stock" />
        </div>
      </div>
    </form>
  </layout>
</template>

<script lang='ts'>
import DeleteIcon from "@/assets/svg/DeleteIcon.vue";
import PlusIcon from "@/assets/svg/PlusIcon.vue";
import Button from "@/components/Button.vue";
import InputField from "@/components/Input.vue";
import InputButton from "@/components/InputButton.vue";
import Layout from "@/components/Layout.vue";
import OutlineLink from "@/components/OutlineLink.vue";
import TableGeneric from "@/components/TableGeneric.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    Layout,
    TableGeneric,
    InputButton,
    InputField,
    DeleteIcon,
    Button,
    OutlineLink,
    PlusIcon,
  },

  data: () => ({}),

  methods: {
    handleSubmit(e: Event) {
      e.preventDefault();
    },
  },
});
</script>

<style>
select {
  /* -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none; */
  padding: 10px;
}
</style>