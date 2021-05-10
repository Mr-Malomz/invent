<template>
  <div
    class="mb-7 relative close-drop"
    @click="handleShowOption"
    @focusout="handleFocusOut"
    tabindex="0"
  >
    <label :for="title" class="block mb-1 text-sm font-normal capitalize">
      {{
      title
      }}
    </label>
    <div
      :class="isError ? 'border-red-500' : 'border-brand-grey'"
      class="border w-full cont-tag px-4 rounded grid grid-cols-4 gap-3"
      role="listbox"
    >
      <div
        class="chips inline-flex px-2 text-sm items-center bg-gray-200 rounded-sm my-2"
        v-for="select in selected"
        :key="select.id"
      >
        <span class="inline-block mr-4">{{select.desc}}</span>
        <tiny-menu-close class="cursor-pointer" @click="removeSelected(select.id)" />
      </div>
    </div>
    <div
      class="bg-brand-white shadow-2xl rounded-lg absolute z-10 h-32 w-full"
      v-show="showOptions"
    >
      <div v-if="optionsArray.length < 1" class="w-full h-full flex items-center justify-center">
        <p class="text-center text-gray-400">No more data</p>
      </div>
      <div class="w-full h-full py-2 flex flex-col overflow-y-auto">
        <div
          role="button"
          class="px-6 py-2 capitalize cursor-pointer text-sm hover:bg-brand-cancel"
          v-for="option in optionsArray"
          :key="option.id"
          @click="handleSelected(option.id)"
        >{{option.desc}}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import TinyMenuClose from "@/assets/svg/TinyMenuClose.vue";

interface OptionProps {
  id: number;
  desc: string;
}

export default defineComponent({
  components: { TinyMenuClose },
  props: {
    title: String,
    options: Array as PropType<Array<OptionProps>>,
    disabled: Boolean
  },
  data() {
    return {
      isError: false,
      optionsArray: [] as OptionProps[],
      selected: [] as OptionProps[],
      showOptions: false
    };
  },

  methods: {
    handleSelected(id: number) {
      let selectItem = this.optionsArray.find(
        (option: OptionProps) => option.id == id
      );
      this.optionsArray = this.optionsArray.filter(
        (option: OptionProps) => option.id !== id
      );
      if (this.selected.includes(selectItem!)) {
        return;
      }
      this.selected.push(selectItem!);
    },

    handleShowOption(e: Event) {
      console.log(e);
      const target = e.target as HTMLDivElement;
      this.showOptions = this.disabled ? false : true;
      target.classList.add(this.showOptions ? "border-2" : "");
    },

    removeSelected(id: number) {
      if (this.disabled) {
        return;
      }
      let selectedItem = this.selected.find(option => option.id == id);
      this.selected = this.selected.filter(option => option.id !== id);
      this.optionsArray = [...this.optionsArray, selectedItem!];
    },

    handleFocusOut(e: Event) {
      this.showOptions = false;
      this.$emit("selectedPicked", this.selected);
    }
  },

  mounted() {
    this.optionsArray = this.options!;
  }
});
</script>

<style lang="scss" scoped>
.cont-tag {
  min-height: 2.5rem;

  .chips {
    width: fit-content;
    min-height: 2rem;
  }
}
</style>
