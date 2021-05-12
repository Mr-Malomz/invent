<template>
  <layout>
    <h1 class="text-xl font-bold text-brand-black capitalize mb-7">Settings</h1>
    <section class="w-full">
      <ul class="flex">
        <li
          :class="$route.path.includes('profile') ? 'bg-brand-white border-b-4 border-brand-blue' : ''"
          class="h-10 lg:h-14 w-1/3 lg:w-52 flex justify-center items-center"
        >
          <router-link
            to="profile"
            :class="$route.path.includes('profile') ? 'text-brand-blue' : 'text-brand-grey'"
            class="text-sm capitalize font-bold"
          >profile</router-link>
        </li>
        <li
          :class="$route.path.includes('password') ? 'bg-brand-white border-b-4 border-brand-blue' : ''"
          class="h-10 lg:h-14 w-1/3 lg:w-52 flex justify-center items-center"
        >
          <router-link
            to="password"
            :class="$route.path.includes('password') ? 'text-brand-blue' : 'text-brand-grey'"
            class="text-sm capitalize font-bold"
          >password</router-link>
        </li>
        <li
          :class="$route.path.includes('authorizer') ? 'bg-brand-white border-b-4 border-brand-blue' : ''"
          class="h-10 lg:h-14 w-1/3 lg:w-52 flex justify-center items-center"
        >
          <router-link
            to="authorizer"
            :class="$route.path.includes('authorizer') ? 'text-brand-blue' : 'text-brand-grey'"
            class="text-sm capitalize font-bold"
          >authorizer</router-link>
        </li>
      </ul>
      <div class="card-wrap w-full bg-brand-white">
        <div class="p-5 lg:p-10 w-full h-full">
          <form class="w-full lg:w-1/2" @submit.prevent="handleSubmit">
            <p
              class="font-bold text-brand-black text-sm capitalize mb-7"
            >Select user(s) that can authorize item requests</p>
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
          />
            <Button value="Save" />
          </form>
        </div>
      </div>
    </section>
  </layout>
</template>

<script lang="ts">
import Button from "@/components/Button.vue";
import CustomSelect from "@/components/CustomSelect.vue";
import Layout from "@/components/Layout.vue";
import { defineComponent } from "vue";
import { OptionProps } from "../../models/optionsItem";

export default defineComponent({
  components: {
    Layout,
    Button,
    CustomSelect,
  },
  data: () => ({
    users: [] as OptionProps[]
  }),
  methods: {
    handleSubmit() {
      console.log(this.$data);
    },

    getSelectedValue(selected: OptionProps[]) {
      this.users = selected;
    }
  }
});
</script>

<style lang="scss" scoped>
.card-wrap {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  min-height: 558px;
}

.upload {
  margin-bottom: 20px;
  label {
    display: flex;
    opacity: 0.7;
    cursor: pointer;
    input[type="file"] {
      color: transparent;
      display: none;
    }
  }
}
</style>
