<template>
  <div class="flex item-center justify-between">
    <div class="flex items-center gap-2">
      <figure>
        <img :src="image" :alt="alt" />
      </figure>
      <Title
        :title="title"
        :subtitle="subtitle"
        titleStyle="text-size4 font-semibold text-textColor-1"
        subtitleStyle="text-size4 font-medium text-textColor-2 mt-4"
      />
    </div>

    <p>{{ rightText }}</p>
  </div>
</template>

<script>
import Title from "./Title.vue";

export default {
  name: "AppListItem",
  components: {
    Title,
  },
  props: {
    title: String,
    subtitle: String,
    image: String,
    alt: String,
    rightText: String,
  },
};
</script>
