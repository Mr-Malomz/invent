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
          <form class="w-full lg:w-96">
            <p class="font-bold text-brand-black text-sm capitalize mb-7">password settings</p>
            <div class="mb-7">
              <password title="old password" v-model="oldpassword" />
            </div>
            <div class="mb-7">
              <password title="new password" v-model="newpassword" />
            </div>
            <Button value="Change Password" />
          </form>
        </div>
      </div>
    </section>
  </layout>
</template>

<script lang="ts">
import Button from "@/components/Button.vue";
import Password from "@/components/Password.vue";
import Layout from "@/components/Layout.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    Layout,
    Button,
    Password
  },
  data: () => ({
    oldpassword: "",
    newpassword: ""
  }),
  methods: {
    handleSubmit() {
      console.log(this.$data);
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
