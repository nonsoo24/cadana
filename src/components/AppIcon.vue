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

};

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});

const iconComponent = computed(() => icons[props.name]);
</script>
