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
          <form>
            <div class="flex justify-center flex-col items-center mb-8">
              <img
                :src="file ? file : 'https://via.placeholder.com/150'"
                alt="profile"
                class="rounded-full h-32 w-32 mb-4 border-2 border-brand-blue"
              />
              <button class="h-8 w-56 upload" type="button">
                <label
                  for="imageUpload"
                  class="flex justify-center items-center border border-brand-grey w-56 h-8 rounded-t-lg rounded-br-lg capitalize"
                >
                  <span class="text-sm">change profile picture</span>
                  <input
                    type="file"
                    id="imageUpload"
                    name="file"
                    accept="image/*"
                    @change="handleImageChange"
                  />
                </label>
              </button>
            </div>
            <div class="grid gird-col-1 lg:grid-cols-2 gap-x-8">
              <input-field title="firstname" type="text" v-model="firstname" />
              <input-field title="lastname" type="text" v-model="lastname" />
              <input-field title="phone number" type="number" v-model="phonenumber" />
              <input-field title="email" type="email" v-model="email" disabled />
            </div>
            <fieldset>
              <label class="block mb-1 text-sm font-normal capitalize">address</label>
              <textarea
                :class="isError ? 'border-red-500' : 'border-brand-grey '"
                class="border w-full mb-7 h-28 px-4 rounded focus:border-brand-blue"
                v-model="address"
                @keyup="onKeyUp"
              ></textarea>
            </fieldset>
            <div class="flex justify-center items-center">
              <div class="w-full lg:w-96">
                <Button value="Update Profile" />
              </div>
            </div>
          </form>
        </div>
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
  components: {
    Layout,
    Button,
    InputField
  },
  data: () => ({
    firstname: "",
    lastname: "",
    phonenumber: "",
    email: "",
    address: "",
    file: ""
  }),
  methods: {
    handleSubmit() {
      console.log(this.$data);
    },

    handleImageChange(e: Event) {
      const target = e.target as HTMLInputElement;
      this.file = URL.createObjectURL(target.files![0]);
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
