<template>
  <div
    class="h-screen w-screen bg-brand-black bg-opacity-30 z-30 top-0 fixed"
    :class="isModal ? 'block' : 'hidden'"
  >
    <div
      class="flex flex-col justify-center items-center h-full w-full open-nav"
      @click="onClose"
    >
      <div class="flex justify-end w-11/12 lg:w-9/12 2xl:w-6/12">
        <button
          class="h-8 w-8 mb-4 bg-brand-white rounded-full flex justify-center items-center"
          @click="handleModalClose()"
        >
          <mini-menu-close />
        </button>
      </div>
      <section
        class="w-11/12 lg:w-9/12 2xl:w-6/12 bg-brand-white bg-wrap flex justify-center items-center"
      >
        <div class="w-11/12 h-5/6">
          <slot></slot>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import MiniMenuClose from "@/assets/svg/MiniMenuClose.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { MiniMenuClose },

  props: {
    isModal: Boolean,
    handleModalClose: Function,
    handleModalOpen: Function,
  },

  methods: {
    onClose(e: Event) {
      const target = e.target as HTMLDivElement;
      if (target.classList.contains("open-nav")) {
        this.handleModalClose!();
      }
    },
  },
});
</script>
<style lang="scss" scoped>
.bg-wrap {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  min-height: 21.5rem;
}
</style>
