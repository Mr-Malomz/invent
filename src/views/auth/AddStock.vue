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
          <fieldset class="mb-7">
            <label for="uom" class="block mb-1 text-sm font-normal capitalize">
              unit of measurement
            </label>
            <select
              class="border w-full h-10 px-4 rounded focus:border-brand-blue border-brand-grey"
              id="uom"
              required
              v-model="unit_of_m"
            >
              <option></option>
              <option
                v-for="option in options"
                :key="option.id"
                :value="option.id"
              >
                {{ option.desc }}
              </option>
            </select>
          </fieldset>
          <fieldset class="mb-7">
            <label
              for="warehouse"
              class="block mb-1 text-sm font-normal capitalize"
            >
              warehouse
            </label>
            <select
              class="border w-full h-10 px-4 rounded focus:border-brand-blue border-brand-grey"
              id="warehouse"
              required
              v-model="warehouse"
            >
              <option></option>
              <option
                v-for="option in options"
                :key="option.id"
                :value="option.id"
              >
                {{ option.desc }}
              </option>
            </select>
          </fieldset>
          <fieldset class="mb-7">
            <label for="bin" class="block mb-1 text-sm font-normal capitalize">
              bin
            </label>
            <select
              class="border w-full h-10 px-4 rounded focus:border-brand-blue border-brand-grey"
              id="bin"
              required
              v-model="bin"
            >
              <option></option>
              <option
                v-for="option in options"
                :key="option.id"
                :value="option.id"
              >
                {{ option.desc }}
              </option>
            </select>
          </fieldset>
          <Button value="Add new stock" />
        </form>
      </div>
    </section>
  </layout>
</template>

<script lang="ts">
import Button from "@/components/Button.vue";
import InputField from "@/components/Input.vue";
import Layout from "@/components/Layout.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { Layout, InputField, Button },
  data: () => ({
    item: "",
    quantity: "",
    unit_of_m: "",
    warehouse: "",
    bin: "",
    options: [
      { id: 1, desc: "item" },
      { id: 2, desc: "description" },
    ],
  }),
  methods: {
    handleSubmit() {
      console.log(this.$data);
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
