<template>
  <nav
    className=" h-8 py-9 bg-white border border-b border-grey-1 flex justify-between items-center dark:bg-dark-2 dark:border-dark-2 w-full"
    tabindex="0"
  >
    <p class="font-semibold text-size1 text-textColor-1 dark:text-white pl-3">
      {{ $route?.meta?.pageTitle }}
    </p>
    <div class="flex items-center gap-11">
      <button
        class="outline-none"
        v-if="!isDarkMode"
        @click="toggleTheme"
        tabindex="0"
      >
        <img
          :src="Moon"
          alt="dropdown-icon"
          width="25px"
          height="25px"
          class="cursor-pointer"
        />
      </button>
      <button class="outline-none" v-else @click="toggleTheme">
        <img
          :src="Sun"
          alt="dropdown-icon"
          width="25px"
          height="25px"
          class="cursor-pointer"
        />
      </button>

      <UserDropDown :options="dropdownOptions" label="Mahfuzul Nabil" />
    </div>
  </nav>
</template>

<script>
import { ref } from "vue";
import UserDropDown from "../components/UserDropDown.vue";
import Moon from "../assets/moon.png";
import Sun from "../assets/sun.png";
import { useDark } from "@vueuse/core";
import { ROUTES } from "../utils/constant";

export default {
  name: "NavBar",
  components: {
    UserDropDown,
  },
  props: {
    pageTitle: {
      type: String,
      default: "",
    },
  },
  setup() {
    const isDark = useDark();
    const isDarkMode = ref(isDark);
    const dropdownOptions = ref([
      {
        label: "Profile",
        route: ROUTES.DASHBOARD,
      },
      {
        label: "Settings",
        route: ROUTES.DASHBOARD,
      },
    ]);

    const toggleTheme = () => {
      isDarkMode.value = !isDarkMode.value;
    };

    return {
      dropdownOptions,
      Moon,
      Sun,
      toggleTheme,
      isDarkMode,
    };
  },
};
</script>
