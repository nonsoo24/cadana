<template>
  <aside
    class="top-0 left-0 z-40 w-[250px] h-screen transition-transform -translate-x-full sm:translate-x-0  sidebar bg-grey-1 dark:bg-dark-2"
    aria-label="Sidebar"
  >
    <div class="h-full overflow-y-auto">
      <ul class="list-none p-0">
        <li>
          <router-link to="/" class="flex items-center p-2 mb-10">
            <figure class="cursor-pointer mt-5">
              <img
                v-if="!isDark"
                :src="CadanaLogoLight"
                alt="cadana-logo"
                width="124px"
                height="32px"
              />
              <img
                v-if="isDark"
                :src="CadanaLogoDark"
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
          <div class="flex gap-3 items-center p-3">
            <div class="w-[8px] h-[8px] rounded-full bg-grey-4"></div>
            <p
              class="text-textColor-2 text-size4 font-medium whitespace-nowrap cursor-pointer"
              @click="handleCustomization"
            >
              Customization
            </p>
          </div>
          <div class="flex gap-3 items-center mt-3 p-3">
            <div class="w-[8px] h-[8px] rounded-full bg-grey-4"></div>
            <p
              class="text-textColor-2 text-size4 font-medium whitespace-nowrap cursor-pointer"
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
import CadanaLogoLight from "../../assets/cadana-logo-light.png";
import CadanaLogoDark from "../../assets/cadana-logo-dark.png";
import { useDark } from '@vueuse/core'

export default {
  name: "SideNavbar",
  components: {
    SideNavbarItem,
  },
  setup(_, { emit }) {
    const isDark = useDark()

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
      CadanaLogoLight,
      CadanaLogoDark,
      isDark
    };
  },
};
</script>

<style scoped>
li {
  @apply block m-0;
}
.sidebar{
  padding: 30px 25px 0px 25px;
}
</style>
