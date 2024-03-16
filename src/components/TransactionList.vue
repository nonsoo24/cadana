<template>
  <AppListItem
    v-for="(item, index) in data || []"
    :key="index"
    :title="item.title"
    :subtitle="item.subtitle"
    :image="item.image"
    :alt="item.alt"
    :rightText="item.rightText"
  />
</template>

<script>
import AppListItem from "./AppListItem.vue";

export default {
  name: "TransactionList",
  components: {
    AppListItem,
    AppListItem,
  },
  props: {
    data: Array,
  },
};
</script>
