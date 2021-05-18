<template>
  <div class="min-h-screen bg-brand-bg lg:flex lg:justify-between">
    <Sidebar :handleModal="handleModal" :isModalOpen="isModalOpen" />
    <section class="w-full h-auto">
      <header
        class="px-4 py-2 flex justify-between items-center lg:px-8 lg:py-8 w-full lg:justify-end"
      >
        <div class="lg:hidden">
          <menu-icon @click="handleModal" class="cursor-pointer" />
        </div>
        <nav class="flex items-center">
          <div class="mr-4">
            <notif-icon class="cursor-pointer" @click="handleNotif" />
            <notification v-if="isOpenNotif" />
          </div>
          <div class="flex h-10 cursor-pointer justify-center items-center" @click="handleDropDown">
            <img
              src="https://via.placeholder.com/150"
              alt="profile picture"
              class="rounded-full h-8 mr-5"
            />
            <p class="font-semibold capitalize text-brand-black">
              account
              <arrow-up v-if="isOpen" class="inline-block" />
              <arrow-down v-else class="inline-block" />
            </p>
          </div>
          <div
            class="bg-brand-white rounded-lg h-20 absolute z-10 w-40 right-6 shadow-sm top-20 flex justify-center items-center transition duration-500 ease-in-out"
            :class="isOpen ? 'block' : 'hidden'"
          >
            <router-link
              to
              class="flex items-center py-2 px-4 bg pl-4 rounded-lg text-brand-grey hover:bg-brand-bg"
            >
              <log-out-icon class="mr-4" />
              <span class="font-semibold capitalize text-sm">Sign Out</span>
            </router-link>
          </div>
        </nav>
      </header>
      <section class="px-4 py-2 lg:px-8">
        <slot></slot>
      </section>
    </section>
  </div>
</template>

<script lang="ts">
import ArrowDown from "@/assets/svg/ArrowDown.vue";
import ArrowUp from "@/assets/svg/ArrowUp.vue";
import LogOutIcon from "@/assets/svg/LogOutIcon.vue";
import MenuIcon from "@/assets/svg/MenuIcon.vue";
import NotifIcon from "@/assets/svg/NotifIcon.vue";
import { defineComponent } from "vue";
import Notification from "./Notification.vue";
import Sidebar from "./Sidebar.vue";

export default defineComponent({
  components: {
    Sidebar,
    MenuIcon,
    ArrowDown,
    ArrowUp,
    LogOutIcon,
    NotifIcon,
    Notification
  },

  data: () => ({
    isOpen: false,
    isModalOpen: false,
    isOpenNotif: false
  }),

  methods: {
    handleModal() {
      this.isModalOpen = !this.isModalOpen;
    },

    handleDropDown() {
      this.isOpen = !this.isOpen;
      this.isOpenNotif = false;
    },

    handleNotif() {
      this.isOpenNotif = !this.isOpenNotif;
      this.isOpen = false;
    }
  }
});
</script>

<style></style>
