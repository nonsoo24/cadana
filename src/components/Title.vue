<template>
  <div>
    <h3 :class="[titleClass, 'text-size4', 'text-textColor-2']">{{ title }}</h3>
    <p :class="[subtitleClass, 'text-size2', 'text-textColor-1']">{{ subtitle }}</p>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'Title',
  props: {
    title: String,
    subtitle: String,
    titleStyle: String,
    subtitleStyle: String,
  },
  setup(props) {
    const titleClass = ref('');
    const subtitleClass = ref('');

    watchEffect(() => {
      titleClass.value = props.titleStyle || '';
      subtitleClass.value = props.subtitleStyle || '';
    });

    return {
      titleClass,
      subtitleClass,
    };
  },
};
</script>
