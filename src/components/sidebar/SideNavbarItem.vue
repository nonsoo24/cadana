<template>
  <li
    :class="{ 'bg-primary rounded-lg': $route.path === route }"
    class="p-4 cursor-pointer"
    tabindex="0"
    role="menuitem"
    @keydown.enter.prevent="activateMenuItem"
  >
    <router-link
      :to="route"
      class="flex items-center text-size4 rounded-lg gap-3 dark:text-white"
    >
      <VsxIcon :iconName="iconName" :color="$route.path === route ? colors.white : colors.textColor[2]" size="20" type="bold" />
      <span
        :class="{
          'text-white text-size4 font-semibold': $route.path === route,
          'text-textColor-2 text-size4 font-medium': $route.path !== route,
        }"
        class="whitespace-nowrap"
        >{{ title }}</span
      >
    </router-link>
  </li>
</template>

<script>
import { useRouter } from "vue-router";
import colors from "../../utils/colors"
export default {
  name: "SideNavbarItem",
  props: {
    title: {
      type: String,
      default: "",
      required: true,
    },
    iconName: {
      type: String,
      default: "Home2",
      required: true,
    },
    route: {
      type: String,
      default: "",
      required: true,
    },
  },
  setup() {
    const router = useRouter();
    const activateMenuItem = () => {
      router.push(this.route);
    };
    return {
      activateMenuItem,
      colors
    };
  },
};
</script>
