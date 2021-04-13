<template>
  <layout>
    <h1 class="text-xl font-bold text-brand-black capitalize mb-7">
      good receipt
    </h1>
    <section class="flex justify-end items-center mb-7">
      <outline-link text="Add Item" to="#" class="mr-7" @click="addToForm">
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
        <tr
          class="border-brand-cancel border-b hover:bg-gray-100 h-12"
          v-for="(input, i) in inputs"
          :key="i"
        >
          <td class="pl-4 text-sm text-brand-grey">
            <div class="w-28" >
              <input-button v-model="input.item" @click="handleModalOpen()"/>
            </div>
          </td>
          <td class="pl-4 text-sm text-brand-grey">
            <input-field
              title="quantity"
              type="text"
              :showErrorMsg="false"
              :showTitle="false"
              v-model="input.description"
            />
          </td>
          <td class="pl-4 text-sm text-brand-grey">
            <input-field
              title="quantity"
              type="number"
              :showErrorMsg="false"
              :showTitle="false"
              v-model="input.quantity"
            />
          </td>
          <td class="pl-4 text-sm text-brand-grey">
            <select
              class="border w-full h-10 px-4 rounded focus:border-brand-blue"
              :class="isError ? 'border-red-500' : 'border-brand-grey '"
              :id="input.warehouse"
              required
              v-model="input.warehouse"
            >
              <option value="1">h</option>
              <option value="2">h</option>
            </select>
          </td>
          <td class="pl-4 text-sm text-brand-grey">
            <select
              class="border w-full h-10 px-4 rounded focus:border-brand-blue"
              :class="isError ? 'border-red-500' : 'border-brand-grey '"
              :id="input.bin"
              required
              v-model="input.bin"
            >
              <option value="1">t</option>
              <option value="2">t</option>
            </select>
          </td>
          <td class="pl-4 text-sm text-brand-grey">
            <div class="w-28 flex justify-center">
              <delete-icon class="cursor-pointer" @click="removeForm(i)" />
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
  <modal :isModal="isModal" :handleModalClose="handleModalClose">
    <form
      class="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-8"
    >
      <div class="w-full lg:w-8/12">
        <input-field title="item description" type="text" v-model="search" />
      </div>
      <div class="">
        <button
          class="h-11 w-52 flex justify-center items-center bg-brand-blue hover:bg-brand-blue-hover rounded transition-all ease-in-out duration-75"
        >
          <search-icon class="mr-2" />
          <span class="text-sm font-bold text-brand-white capitalize"
            >search</span
          >
        </button>
      </div>
    </form>
    <div class="w-full h-44 max-h-44">
      <div class="w-full h-full overflow-auto">
        <table-generic
          :headers="[
            { id: 1, title: 'item code' },
            { id: 2, title: 'item description' },
            { id: 3, title: '' },
          ]"
        >
          <tr class="border-brand-cancel border-b hover:bg-gray-100 h-12">
            <td class="pl-4 text-sm text-brand-grey">IR001</td>
            <td class="pl-4 text-sm text-brand-grey">Water cooler</td>
            <td class="pl-4 text-sm text-brand-grey">
              <button
                class="font-bold text-brand-blue capitalize hover:text-brand-blue-hover"
              >
                select
              </button>
            </td>
          </tr>
          <tr class="border-brand-cancel border-b hover:bg-gray-100 h-12">
            <td class="pl-4 text-sm text-brand-grey">IR001</td>
            <td class="pl-4 text-sm text-brand-grey">Water cooler</td>
            <td class="pl-4 text-sm text-brand-grey">
              <button
                class="font-bold text-brand-blue capitalize hover:text-brand-blue-hover"
              >
                select
              </button>
            </td>
          </tr>
        </table-generic>
      </div>
    </div>
  </modal>
</template>

<script lang='ts'>
import DeleteIcon from "@/assets/svg/DeleteIcon.vue";
import PlusIcon from "@/assets/svg/PlusIcon.vue";
import SearchIcon from "@/assets/svg/SearchIcon.vue";
import Button from "@/components/Button.vue";
import InputField from "@/components/Input.vue";
import InputButton from "@/components/InputButton.vue";
import Layout from "@/components/Layout.vue";
import Modal from "@/components/Modal.vue";
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
    Modal,
    SearchIcon,
  },

  data: () => ({
    inputs: [
      {
        item: "",
        description: "",
        quantity: "",
        warehouse: "",
        bin: "",
      },
    ],
    isModal: false,
    search: "",
  }),

  methods: {
    handleSubmit(e: Event) {
      e.preventDefault();
      console.log(this.inputs);
    },

    handleChange(text: string) {
      for (let index = 0; index < this.inputs.length; index++) {
        this.inputs[index].item = text;
      }
    },

    addToForm() {
      this.inputs.push({
        item: "",
        description: "",
        quantity: "",
        warehouse: "",
        bin: "",
      });
    },

    removeForm(id: number) {
      this.inputs = this.inputs.filter((input, i) => i !== id);
    },

    handleModalClose() {
      this.isModal = false;
    },

    handleModalOpen() {
      this.isModal = true;
    },
  },
});
</script>

<style>
select {
  padding: 10px;
}
</style>