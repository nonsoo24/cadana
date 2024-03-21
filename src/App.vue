<template>
  <main>
    <component :is="$route.meta.layout || 'div'">
      <router-view />
    </component>
  </main>
</template>

<script>
import './index.css'
export default {
  name: "App"
};
</script>
