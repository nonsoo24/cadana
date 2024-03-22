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
        aria-label="Light Mode Button"
      >
        <VsxIcon iconName="Moon" size="25" :color="colors.textColor[3]" type="bold" />
      </button>
      <button class="outline-none" v-else @click="toggleTheme"  tabindex="0"  aria-label="Light Mode Button">
        <VsxIcon iconName="Sun1" :size="25" :color="colors.textColor[3]" type="bold" />
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
import colors from "../utils/colors";

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
      colors
    };
  },
};
</script>
