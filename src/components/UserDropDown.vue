<template>
  <div class="relative" @click="isOpen = !isOpen">
    <button
      type="button"
      class="inline-flex items-center px-4 py-2 rounded-[100px] shadow-sm text-sm font-medium text-gray-700 bg-grey-1 hover:bg-gray-50 focus:outline-none w-auto gap-6 outline-none dark:bg-dark-1"
      aria-haspopup="true"
      aria-expanded="true"
    >
      <div class="rounded-full w-[36px] h-[36px]">
        <img :src="User" alt="user-picture" width="36px" height="36px" />
      </div>

      <span class="font-semibold text-size4 text-textColor-1 dark:text-white">{{
        label
      }}</span>

      <img
        v-if="isDark"
        :src="DropdownIconDark"
        alt="dropdown-icon"
        width="9.92px"
        height="9.92px"
      />
      <img
        v-else
        :src="DropdownIcon"
        alt="dropdown-icon"
        width="17px"
        height="17px"
      />
    </button>

    <div
      v-if="isOpen"
      class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="options-menu"
      ref="menu"
    >
      <div class="py-1" role="none">
        <router-link
          :to="option.route"
          v-for="(option, index) in options"
          :key="index"
          @click.prevent="selectOption(option)"
          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          role="menuitem"
          ref="menuitem"
          :tabindex="isOpen ? 0 : -1"
        >
          {{ option.label }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import DropdownIcon from "../assets/dropdown.png";
import DropdownIconDark from "../assets/dropdown-dark.png";
import User from "../assets/user.png";
import { useDark } from "@vueuse/core";

export default {
  name: "UserDropDown",
  props: {
    options: {
      type: Array,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const isDark = useDark();
    const selectedOption = ref(props.options[0]);
    const isOpen = ref(false);

    const selectOption = (option) => {
      selectedOption.value = option;
      isOpen.value = false;
    };

    return {
      selectedOption,
      isOpen,
      selectOption,
      DropdownIcon,
      DropdownIconDark,
      User,
      isDark,
    };
  },
};
</script>
