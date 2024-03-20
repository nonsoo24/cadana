<template>
  <button
    data-drawer-target="cta-button-sidebar"
    data-drawer-toggle="cta-button-sidebar"
    aria-controls="cta-button-sidebar"
    type="button"
    class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
  >
    <span class="sr-only">Open sidebar</span>
  </button>

  <aside
    class="fixed top-0 left-0 z-40 w-[250px] h-screen bg-gray-100 transition-transform -translate-x-full sm:translate-x-0"
    aria-label="Sidebar"
  >
    <div class="h-full px-3 py-4 overflow-y-auto bg-grey-1 dark:bg-gray-800">
      <ul class="list-none p-0">
        <li>
          <router-link
            to="/"
            class="flex items-center p-2 mb-10"
          >
            <figure class="cursor-pointer mt-5">
              <img
                :src="CadanaLogo"
                alt="cadana-logo"
                width="124px"
                height="32px"
              />
            </figure>
          </router-link>
        </li>
        <SideNavbarItem
          v-for="menu in sideMenuItems"
          :key="menu.title"
          :title="menu.title"
          :route="menu.route"
        />
      </ul>

      <div class="absolute bottom-16">
        <div class="w-[210px]">
          <div class="border-t border-gray-200 mb-10 w-auto"></div>
          <div class="flex gap-3 items-center">
            <div class="w-[8px] h-[8px] rounded-full bg-grey-4"></div>
            <p
              class="text-textColor-2 text-size4 font-medium whitespace-nowrap cursor-pointer"
              @click="handleCustomization"
            >
              Customization
            </p>
          </div>
          <div class="flex gap-3 items-center mt-3">
            <div class="w-[8px] h-[8px] rounded-full bg-grey-4"></div>
            <p
              class=" text-textColor-2 text-size4 font-medium whitespace-nowrap cursor-pointer"
              @click="onLogout"
            >
              Logout
            </p>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
import { ref } from "vue";
import SideNavbarItem from "./SideNavbarItem.vue";
import CadanaLogo from  '../../assets/cadana-logo.png'

export default {
  name: "SideNavbar",
  components: {
    SideNavbarItem,
  },
  setup(_, {emit}) {
    const sideMenuItems = ref([
      {
        title: "Dashboard",
        icon: "",
        route: "/",
      },
      {
        title: "Invoices",
        icon: "",
        route: "/invoices",
      },
      {
        title: "My Wallets",
        icon: "",
        route: "/my-wallets",
      },
    ]);
    const handleCustomization = () => {
      emit("open-customizer");
    };
    const onLogout = () => {
      console.log("log out");
    };

    return {
      onLogout,
      handleCustomization,
      sideMenuItems,
      CadanaLogo
    };
  },
};
</script>

<style scoped>
li {
  @apply block m-0
}
</style>
