<template>
  <div
    class="flex items-center justify-between"
    :class="listWrapper"
    role="listitem"
    tabindex="0"
    @keyup.enter="$emit('click')"
  >
    <div class="flex items-center gap-2 w-[570px]">
      <figure>
        <img
          :src="image"
          :alt="alt"
          :class="imgClass"
          role="img"
          tabindex="-1"
        />
      </figure>
      <AppTitle
        :title="title"
        :subtitle="subtitle"
        :titleClass="titleClass"
        :subtitleClass="subtitleClass"
      />
    </div>

    <p
      class="dark:text-white text-textColor-1 font-semibold text-size3"
      role="text"
      aria-label="Right Text"
    >
      {{ rightText }}
    </p>
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
      default:
        "text-size4 font-semibold text-textColor-1 text-left dark:text-white",
    },
    subtitleClass: {
      type: String,
      default:
        "text-size4 font-medium text-textColor-2 text-left dark:text-white pt-1",
    },
  },
};
</script>
