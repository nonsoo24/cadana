<template>
  <component
    :is="iconComponent"
    role="img"
    class="inline-block fill-current"
    style="height: 1em; width: 1em;"
  />
</template>

<script setup>
import { defineProps, computed } from 'vue';

const icons = {
  dropdown: '../assets/icons/dropdown.svg',
  moon: '../assets/icons/moon.svg',
  wallets: '../assets/icons/wallets.svg',
  logo: '../assets/cadana-logo.svg',
  ArrowDown: '../assets/icons/arrow-down.svg',
  ArrowUp: '../assets/icons/arrow-up.svg',
};

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});

const iconComponent = computed(() => icons[props.name]);
</script>
