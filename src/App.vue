<template>
  <main>
    <component :is="$route.meta.layout || 'div'">
      <router-view />
    </component>
  </main>
</template>

<script>
// import THEME_COLORS from "./utils/constant";
export default {
  name: "App",
  setup() {
    // const storedThemeColors = JSON.parse(localStorage.getItem(THEME_COLORS));
    // if (storedThemeColors === null) {
    //   const colors = {
    //     primaryColor: "#E75423",
    //     secondaryColor: "#FFF0EB",
    //   };
    //   localStorage.setItem(THEME_COLORS, JSON.stringify(colors));
    // } else {
    //   document.documentElement.style.setProperty(
    //     "--primary-color",
    //     storedThemeColors.PrimaryColor
    //   );
    //   document.documentElement.style.setProperty(
    //     "--secondary-color",
    //     storedThemeColors.SecondaryColor
    //   );
    // }
  },
};
</script>

<style>
@font-face {
  font-family: "Inter";
  src: url("./assets/fonts/inter/Inter-Medium.ttf"),
    url("./assets/fonts/inter/Inter-Bold.ttf"),
    url("./assets/fonts/inter/Inter-Black.ttf"),
    url("./assets/fonts/inter/Inter-SemiBold.ttf");
}
#app {
  font-family: "Inter", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: white !important;
}
</style>
