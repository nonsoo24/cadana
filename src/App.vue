<template>
  <main>
    <component :is="$route.meta.layout || 'div'">
      <router-view />
    </component>
  </main>

</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
@font-face {
  font-family: 'Inter';
  src: url("./assets/fonts/inter/Inter-Medium.ttf"),
    url("./assets/fonts/inter/Inter-Bold.ttf"),
    url("./assets/fonts/inter/Inter-Black.ttf"),
    url("./assets/fonts/inter/Inter-SemiBold.ttf");
}
#app {
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: white !important;

}
</style>
