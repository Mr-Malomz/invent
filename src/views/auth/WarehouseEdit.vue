<template>
  <layout>
    <h1 class="text-xl font-bold text-brand-black capitalize mb-7">
      warehouse
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
          <fieldset class="mb-7">
            <label class="block mb-1 text-sm font-normal capitalize">
              address
            </label>
            <textarea
              :class="isError ? 'border-red-500' : 'border-brand-grey '"
              class="border w-full h-28 px-4 rounded focus:border-brand-blue"
              v-model="address"
              @keyup="onKeyUp"
            ></textarea>
          </fieldset>
          <Button value="Update Information" />
        </form>
      </div>
    </section>
  </layout>
</template>

<script lang="ts">
import Button from "@/components/Button.vue";
import InputField from "@/components/Input.vue";
import Layout from "@/components/Layout.vue";
import SelectInput from "@/components/SelectInput.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { Layout, InputField, Button, SelectInput },
  data: () => ({
    item: "",
    address: "",
    isError: false,
  }),
  methods: {
    handleSubmit() {
      console.log(this.$data);
    },
    onKeyUp() {
      if (!this.address) {
        this.isError = true;
      } else {
        this.isError = false;
      }
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
