<template>
  <layout>
    <h1 class="text-xl font-bold text-brand-black capitalize mb-14">
      good issue - 11767467
    </h1>
    <section class="mb-7">
      <h5 class="font-bold text-sm text-brand-black capitalize mb-7">
        document information
      </h5>
      <div class="grid grid-cols-2 lg:grid-cols-3">
        <div class="mb-7">
          <p class="capitalize text-sm text-brand-grey mb-4">request no</p>
          <p class="capitalize text-sm font-bold text-brand-black">
            request no
          </p>
        </div>
        <div class="mb-7">
          <p class="capitalize text-sm text-brand-grey mb-4">requester</p>
          <p class="capitalize text-sm font-bold text-brand-black">
            susan prat
          </p>
        </div>
        <div class="mb-7">
          <p class="capitalize text-sm text-brand-grey mb-4">date</p>
          <p class="capitalize text-sm font-bold text-brand-black">
            23 - 04 - 2021
          </p>
        </div>
        <div class="mb-7">
          <p class="capitalize text-sm text-brand-grey mb-4">warehouse</p>
          <p class="capitalize text-sm font-bold text-brand-black">WH001</p>
        </div>
      </div>
    </section>
    <section class="mb-7">
      <h5 class="font-bold text-sm text-brand-black capitalize mb-7">
        item information
      </h5>
      <form class="w-full">
        <table-generic
          :headers="[
            { id: 1, title: 'item no' },
            { id: 2, title: 'item description' },
            { id: 3, title: 'quantity' },
          ]"
          class="mb-7"
        >
          <tr
            class="border-brand-cancel border-b hover:bg-gray-100 h-12"
            v-for="(input, i) in inputs"
            :key="i"
          >
            <td class="pl-4 text-sm text-brand-grey">
              {{ input.item }}
            </td>
            <td class="pl-4 text-sm text-brand-grey">
              {{ input.description }}
            </td>
            <td class="pl-4 text-sm text-brand-grey">
              <div class="w-28">
                <input-field
                  title="quantity"
                  type="number"
                  :showErrorMsg="false"
                  :showTitle="false"
                  v-model="input.quantity"
                />
              </div>
            </td>
          </tr>
        </table-generic>
        <div class="flex justify-center">
          <div class="w-52 mr-4">
            <Button
              value="Cancel"
              color="bg-brand-cancel text-brand-blue hover:text-brand-blue-hover"
            />
          </div>
          <div class="w-52">
            <Button value="Post" />
          </div>
        </div>
      </form>
    </section>
  </layout>
</template>

<script lang="ts">
import SearchIcon from "@/assets/svg/SearchIcon.vue";
import Button from "@/components/Button.vue";
import InputField from "@/components/Input.vue";
import Layout from "@/components/Layout.vue";
import TableGeneric from "@/components/TableGeneric.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    Layout,
    InputField,
    Button,
    SearchIcon,
    TableGeneric,
  },
  data: () => ({
    inputs: [
      {
        item: "1093",
        description: "Landscape machine",
        quantity: "",
      },
    ],
  }),
  methods: {},
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
