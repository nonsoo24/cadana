<template>
  <li :class="{ 'bg-primary rounded-lg': $route.path === route }" class="p-4 cursor-pointer">
    <router-link
      :to="route"
      class="flex items-center text-text2 rounded-lg gap-3 dark:text-white"
    >
      <div class="w-[8px] h-[8px] rounded-full bg-grey-4"></div>
      <span
        :class="{
          'text-white text-size4 font-semibold': $route.path === route,
          'text-textColor-2 text-size4 font-medium': $route.path !== route,
        }"
        class=" whitespace-nowrap"
        >{{ title }}</span
      >
    </router-link>
  </li>
</template>

<script>
export default {
  name: "SideNavbarItem",
  props: {
    title: {
      type: String,
      default: "",
      required: true,
    },
    route: {
      type: String,
      default: "",
      required: true,
    },
  },
};
</script>
