<template>
  <layout>
    <h1 class="text-xl font-bold text-brand-black capitalize mb-7">manage user</h1>
    <section class="mt-14 flex justify-center items-center">
      <div class="card-wrap p-7 bg-brand-white rounded-lg w-11/12">
        <form action @submit.prevent="handleSubmit">
          <div class="flex justify-between">
            <div class="input-w">
              <input-field title="firstname" type="text" v-model="firstname" disabled />
            </div>
            <div class="input-w">
              <input-field title="lastname" type="text" v-model="lastname" disabled />
            </div>
          </div>
          <input-field title="title" type="text" v-model="title" disabled />
          <custom-select
            title="permissions"
            :options="[
              { id: 1, desc: 'item code' },
              { id: 2, desc: 'item description' },
              { id: 3, desc: 'quantity' },
              { id: 4, desc: 'UOM' },
              { id: 5, desc: 'warehouse no' },
              { id: 6, desc: 'bin no' },
            ]"
            @selectedPicked="getSelectedValue"
            :disabled="true"
          />
          <div class="flex justify-between">
            <tertiary-button text="Delete User"></tertiary-button>
            <outline-link text="Edit User" to class="mr-7"></outline-link>
          </div>
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
import OutlineLink from "@/components/OutlineLink.vue";
import TertiaryButton from "@/components/TertiaryButton.vue";
import { defineComponent } from "vue";
import { OptionProps } from "../../models/optionsItem";

export default defineComponent({
  components: { Layout, InputField, Button, CustomSelect, OutlineLink, TertiaryButton },
  data: () => ({
    firstname: "",
    lastname: "",
    title: "",
    email: "",
    permissions: [] as OptionProps[]
  }),
  methods: {
    handleSubmit() {
      console.log(this.$data);
    },

    onSelect(selected: number) {
      console.log(selected);
    },

    getSelectedValue(selected: OptionProps[]) {
      this.permissions = selected;
    }
  }
});
</script>

<style lang="scss" scoped>
.card-wrap {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  .input-w {
    width: 47%;
  }
  @media (min-width: 1024px) {
    width: 34.5rem;
  }
}
</style>
