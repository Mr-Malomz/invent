<template>
  <layout>
    <h1 class="text-xl font-bold text-brand-black capitalize mb-7">
      good issue
    </h1>
    <section class="mt-14 flex justify-center items-center">
      <div class="card-wrap p-7 bg-brand-white rounded-lg w-11/12">
        <form action="" @submit.prevent="handleSubmit">
          <fieldset>
            <label class="block mb-1 text-sm font-normal capitalize"
              >item</label
            >
            <input-button
              v-model="item"
              @click="handleModalOpen()"
              class="mb-7"
            />
          </fieldset>
          <input-field title="quantity" type="number" v-model="quantity" />
          <select-input
            :options="[
              { id: 1, desc: 'item code' },
              { id: 2, desc: 'item description' },
              { id: 3, desc: 'quantity' },
              { id: 4, desc: 'UOM' },
              { id: 5, desc: 'warehouse no' },
              { id: 6, desc: 'bin no' },
            ]"
            title="warehouse"
            id="warehouse"
            @onSelect="
              (selected) => {
                warehouse = selected;
              }
            "
          />
          <select-input
            :options="[
              { id: 1, desc: 'item code' },
              { id: 2, desc: 'item description' },
              { id: 3, desc: 'quantity' },
              { id: 4, desc: 'UOM' },
              { id: 5, desc: 'warehouse no' },
              { id: 6, desc: 'bin no' },
            ]"
            title="bin"
            id="bin"
            @onSelect="
              (selected) => {
                bin = selected;
              }
            "
          />
          <Button value="Post" />
        </form>
      </div>
    </section>
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

<script lang="ts">
import SearchIcon from "@/assets/svg/SearchIcon.vue";
import Button from "@/components/Button.vue";
import InputField from "@/components/Input.vue";
import InputButton from "@/components/InputButton.vue";
import Layout from "@/components/Layout.vue";
import Modal from "@/components/Modal.vue";
import SelectInput from "@/components/SelectInput.vue";
import TableGeneric from "@/components/TableGeneric.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    Layout,
    InputField,
    Button,
    SelectInput,
    InputButton,
    Modal,
    SearchIcon,
    TableGeneric,
  },
  data: () => ({
    item: "",
    quantity: "",
    unit_of_m: "",
    warehouse: "",
    bin: "",
    isModal: false,
    search: "",
  }),
  methods: {
    handleSubmit() {
      console.log(this.$data);
    },

    onSelect(selected: number) {
      console.log(selected);
    },

    handleModalOpen() {
      this.isModal = true;
    },

    handleModalClose() {
      this.isModal = false;
    },
  },
});
</script>

<style lang="scss" scoped>
.card-wrap {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  @media (min-width: 1024px) {
    width: 34.5rem;
  }
}
</style>
