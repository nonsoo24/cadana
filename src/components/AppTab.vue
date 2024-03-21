<template>
  <div class="w-auto">
    <div
      class="flex justify-between items-center border-b-grey-3 dark:border-dark-3 border-b"
    >
      <div
        :class="{
          'border-secondary border-b-4 ': activeTab === index,
        }"
        class="flex gap-8 pb-1"
      >
        <div
          v-for="(tab, index) in tabs"
          :key="index"
          @click="handleTabClick(index)"
          :class="{
            'bg-white dark:bg-dark-1 active-tab': activeTab === index,
            'hover:text-textColor1 dark:hover:text-white': activeTab !== index,
          }"
          class="cursor-pointer px-4 py-2 rounded-t-lg relative flex justify-start"
        >
          <p
            :class="{
              'text-textColor-1 font-semibold dark:text-white':
                activeTab === index,
              'text-textColor-2': activeTab !== index,
            }"
            class="text-size4 text-left"
          >
            {{ tab.label }}
          </p>
        </div>
      </div>
      <div class="relative">
        <AppInput
          v-model="inputValue"
          id="search"
          placeholder="Search"
          @onChange="handleChange"
          inputClass="outline-none bg-white dark:bg-dark-1 dark:text-white text-textColor2"
        />
        <img
          :src="SearchIcon"
          alt="search-icon"
          width="13.33px"
          height="13.33px"
          class="left-[-20px] top-[5px] absolute"
        />
      </div>
    </div>
  </div>

  <div class="tab-content mt-3">
    <component :is="activeComponent" />
  </div>
</template>

<script>
import { ref, watch } from "vue";
import AppInput from "../components/forms/AppInput.vue";
import SearchIcon from "../assets/icons/search.png";

export default {
  name: "AppTab",
  components: {
    AppInput,
  },
  props: {
    tabs: {
      type: Array,
      required: true,
    },
  },
  setup(props, { emit }) {
    const inputValue = ref("");
    const activeTab = ref(0);
    const activeComponent = ref(props.tabs[activeTab.value].component);

    const handleTabClick = (index) => {
      activeTab.value = index;
      emit("tab-click", index);
    };

    const handleChange = (value) => {
      console.log("Input value changed:", value);
    };

    watch(activeTab, (newValue) => {
      activeComponent.value = props.tabs[newValue].component;
    });

    return {
      activeTab,
      handleTabClick,
      activeComponent,
      inputValue,
      handleChange,
      SearchIcon,
    };
  },
};
</script>

<style scoped>
.active-tab::before {
  content: "";
  position: absolute;
  bottom: -5px;
  background-color: #fff0eb;
  height: 3px;
  width: 100%;
  left: 0;
}
</style>
