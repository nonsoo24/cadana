<template>
  <nav
    className="fixed h-6 py-9 px-7 bg-white w-full border border-b border-grey-1 flex justify-between items-center "
  >
    <p class="font-semibold text-size1 text-textColor-1">
      {{ $route.meta.pageTitle || "" }}
    </p>
    <div class="flex items-center gap-11">
      <button class="outline-none" v-if="!isDarkMode" @click="toggleTheme">
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
export default {
  name: "NavBar",
  components: {
    UserDropDown,
  },
  setup() {
    const isDarkMode = ref(false);
    const toggleTheme = () => {
      isDarkMode.value = !isDarkMode.value;
    };
    const dropdownOptions = ref([
      {
        label: "Profile",
        route: "/",
      },
      {
        label: "Settings",
        route: "/",
      },
    ]);

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
