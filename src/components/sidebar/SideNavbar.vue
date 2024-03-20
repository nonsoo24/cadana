<template>
  <aside
    class="top-0 left-0 z-40 w-[250px] h-screen transition-transform -translate-x-full sm:translate-x-0 px-[25px] pt-[30px] bg-grey-1 dark:bg-dark-2"
    aria-label="Sidebar"
  >
    <div class="h-full overflow-y-auto">
      <ul class="list-none p-0">
        <li>
          <router-link :to="ROUTES.DASHBOARD" class="flex items-center p-2 mb-10">
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
          :icon="menu.icon"
          :route="menu.route"
        />
      </ul>

      <div class="absolute bottom-16">
        <div>
          <div
            class="flex gap-3 items-center p-3"
            v-for="item in otherMenus"
            :key="item.title"
          >
            <img
              :src="item.icon"
              :alt="item.title"
              width="20px"
              height="20px"
            />
            <p
              class="text-textColor-2 text-size4 font-medium whitespace-nowrap cursor-pointer"
              @click="item.handler"
            >
              {{ item.title }}
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
import { useDark } from "@vueuse/core";
import { ROUTES } from "../../utils/constant";
export default {
  name: "SideNavbar",
  components: {
    SideNavbarItem,
  },
  setup(_, { emit }) {
    const isDark = useDark();
    const sideMenuItems = ref([
      {
        title: "Dashboard",
        icon: require("../../assets/icons/home.png"),
        route: ROUTES.DASHBOARD,
      },
      {
        title: "Invoices",
        icon: require("../../assets/icons/invoices.png"),
        route: ROUTES.INVOICES,
      },
      {
        title: "My Wallets",
        icon: require("../../assets/icons/wallet-active.png"),
        route: ROUTES.MY_WALLET,
      },
    ]);

    const handleCustomization = () => {
      emit("open-customizer");
    };
    const onLogout = () => {
      console.log("log out");
    };

    const otherMenus = ref([
      {
        title: "Customization",
        icon: require("../../assets/icons/settings.png"),
        handler: handleCustomization,
      },
      {
        title: "Logout",
        icon: require("../../assets/icons/logout.png"),
        handler: onLogout,
      },
    ]);

    return {
      onLogout,
      handleCustomization,
      sideMenuItems,
      CadanaLogoLight,
      CadanaLogoDark,
      isDark,
      otherMenus,

      ROUTES
    };
  },
};
</script>

<style scoped>
li {
  @apply block m-0;
}
</style>
