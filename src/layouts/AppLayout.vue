<template>
  <div class="flex h-screen overflow-hidden relative">
    <SideNavbar @open-customizer="toggleCustomizer" />

    <div class="flex flex-col flex-1 overflow-hidden w-full">
      <NavBar />

      <div
        class="flex-1 overflow-x-hidden overflow-y-auto bg-white dark:bg-gray-800"
      >
        <div class=" ml-72 pt-16 pr-24">
          <slot />
        </div>
      </div>
    </div>
   <div class="absolute right-0 top-0 bottom-0">
    <AppCustomizer :isOpen="isOpen" @close-customizer="isOpen = false" />
   </div>
  </div>
</template>

<script>
import SideNavbar from "../components/sidebar/SideNavbar.vue";
import NavBar from "../components/NavBar.vue";
import AppCustomizer from "../components/AppCustomizer.vue";
import {ref} from 'vue'

export default {
  name: "AppLayout",
  components: {
    NavBar,
    SideNavbar,
    AppCustomizer
  },
  setup() {
    const isOpen = ref(false);

    const toggleCustomizer = () => {
      isOpen.value = !isOpen.value;
    };

    return {
      isOpen,
      toggleCustomizer,
    };
  },
};
</script>
