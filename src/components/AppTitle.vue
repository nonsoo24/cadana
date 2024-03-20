<template>
  <div>
    <h3 :class="titleClass">{{ title }}</h3>
    <p v-if="subtitle" :class="subtitleClass">{{ subtitle }}</p>
  </div>
</template>

<script>
import { ref, watchEffect } from 'vue';

export default {
  name: 'AppTitle',
  props: {
    title: String,
    subtitle: {
      type: String,
      default: "",
    },
    titleClass: {
      type: String,
      default: "text-size4 text-textColor-2 dark:text-white",
    },
    subtitleClass: {
      type: String,
      default: "text-size2 text-textColor-1 dark:text-white",
    },
  },
  setup(props) {
    const subtitleStyle = ref('');
    const titleStyle = ref('');

    watchEffect(() => {
      titleStyle.value = props.titleStyle || '';
      subtitleStyle.value = props.subtitleStyle || '';
    });

    return {
      titleStyle,
      subtitleStyle,
    };
  },
};
</script>
