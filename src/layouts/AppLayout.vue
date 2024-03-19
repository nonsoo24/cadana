<template>
  <div class="flex h-screen overflow-hidden">
    <SideNavbar />

    <div class="flex flex-col flex-1 overflow-hidden w-full">
      <NavBar />

      <div
        class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 dark:bg-gray-800"
      >
        <div class="pb-16 ml-80 mt-10">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideNavbar from "../components/sidebar/SideNavbar.vue";
import NavBar from "../components/NavBar.vue";

export default {
  name: "AppLayout",
  components: {
    NavBar,
    SideNavbar,
  },
};
</script>
