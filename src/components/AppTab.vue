<template>
  <div
    :class="{
      'border-secondary border': activeTab === index,
      ' border-grey-3': activeTab !== index,
    }"
    class="tabs flex gap-8 border-b pb-1"
  >
    <div
      v-for="(tab, index) in tabs"
      :key="index"
      @click="handleTabClick(index)"
      :class="{
        'bg-white': activeTab === index,
        'hover:bg-gray-100': activeTab !== index,
      }"
      class="cursor-pointer px-4 py-2 rounded-t-lg"
    >
    <p
    :class="{
      'text-textColor-1 font-semibold': activeTab === index,
      'text-textColor-2': activeTab !== index,
    }"
    class="text-size4"
  >
        {{ tab.label }}
      </p>
    </div>
  </div>

  <div class="tab-content mt-3">
    <component :is="activeComponent" />
  </div>
</template>

<script>
import { ref, watch } from "vue";

export default {
  name: "AppTab",
  props: {
    tabs: {
      type: Array,
      required: true,
    },
  },
  setup(props, { emit }) {
    const activeTab = ref(0);
    const activeComponent = ref(props.tabs[activeTab.value].component);

    const handleTabClick = (index) => {
      activeTab.value = index;
      emit("tab-click", index);
    };

    watch(activeTab, (newValue) => {
      activeComponent.value = props.tabs[newValue].component;
    });

    return {
      activeTab,
      handleTabClick,
      activeComponent,
    };
  },
};
</script>
