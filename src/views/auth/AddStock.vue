<template>
  <layout>
    <h1 class="text-xl font-bold text-brand-black capitalize mb-7">
      add new stock
    </h1>
    <section class="mt-14 flex justify-center items-center">
      <div class="card-wrap p-7 bg-brand-white rounded-lg w-11/12">
        <form action="" @submit.prevent="handleSubmit">
          <input-field
            title="item description"
            type="text"
            :length="2"
            v-model="item"
          />
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
            title="unit of measurement"
            id="uom"
            @onSelect="
              (selected) => {
                unit_of_m = selected;
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
          <custom-select title="permissions"/>
          <Button value="Add new stock" />
        </form>
      </div>
    </section>
  </layout>
</template>

<script lang="ts">
import Button from "@/components/Button.vue";
import CustomSelect from "@/components/CustomSelect.vue";
import InputField from "@/components/Input.vue";
import Layout from "@/components/Layout.vue";
import SelectInput from "@/components/SelectInput.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { Layout, InputField, Button, SelectInput, CustomSelect },
  data: () => ({
    item: "",
    quantity: "",
    unit_of_m: "",
    warehouse: "",
    bin: "",
  }),
  methods: {
    handleSubmit() {
      console.log(this.$data);
    },

    onSelect(selected: number) {
      console.log(selected);
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
