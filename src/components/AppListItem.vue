<template>
  <div class="flex items-center justify-between">
    <div class="flex items-center gap-2 w-[570px]" :class="listWrapper">
      <figure>
        <img :src="image" :alt="alt" :class="imgClass" />
      </figure>
      <AppTitle
        :title="title"
        :subtitle="subtitle"
        :titleClass="titleClass"
        :subtitleClass="subtitleClass"
      />
    </div>

    <p>{{ rightText }}</p>
  </div>
</template>

<script>
import AppTitle from "./AppTitle.vue";

export default {
  name: "AppListItem",
  components: {
    AppTitle,
  },
  props: {
    title: String,
    subtitle: {
      type: String,
      default: "",
    },
    image: {
      type: String,
      default: "",
    },
    alt: {
      type: String,
      default: "alt",
    },
    rightText: {
      type: String,
      default: "",
    },
    imgClass: {
      type: String,
      default: "",
    },
    listWrapper: {
      type: String,
      default: "",
    },
    titleClass: {
      type: String,
      default: "text-size4 font-semibold text-textColor-1 text-left",
    },
    subtitleClass: {
      type: String,
      default: "text-size4 font-medium text-textColor-2 text-left",
    },
  },
};
</script>
