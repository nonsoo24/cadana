<template>
  <div class="flex h-screen overflow-hidden relative">
    <SideNavbar @open-customizer="toggleCustomizer" />

    <div class="overflow-hidden w-full h-full">
      <NavBar />

      <div
        class="overflow-x-hidden h-full overflow-y-auto bg-white dark:bg-dark-2"
      >
        <div class="pt-5">
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
