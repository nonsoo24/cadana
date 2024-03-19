<template>
  <HeaderTitle
    :subtitle="text"
    subtitleClass="font-normal !text-textColor-2 text-left mb-6"
  />
  <AppListItem
    v-for="(item, index) in data || []"
    :key="index"
    :title="item.title"
    :subtitle="item.subtitle"
    :image="item.image"
    :alt="item.alt"
    :rightText="item.rightText"
    :imgClass="imgClass"
    listWrapper="!mb-5"
  />
</template>

<script>
import AppListItem from "./AppListItem.vue";
import HeaderTitle from "./HeaderTitle.vue";

export default {
  name: "TransactionList",
  components: {
    AppListItem,
    HeaderTitle,
  },
  props: {
    data: Array,
    text: String,
    imgClass: String,
  },
};
</script>
