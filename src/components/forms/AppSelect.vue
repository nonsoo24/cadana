<template>
  <div>
    <label
      :for="id"
      class="block mb-2 font-medium text-size4 text-textColor-2"
      >{{ label }}</label
    >
    <div class="relative">
      <select
        :id="id"
        v-model="selectedOption"
        :class="inputClass"
        @change="handleChange"
      >
        <option :value="defaultOptionValue" disabled>
          {{ defaultOptionText }}
        </option>
        <option
          v-for="option in options"
          :key="option.value"
          :value="option.value"
        >
          {{ option.label }}
        </option>
      </select>
      <img :src="ChevronDown" width="12px" height="6.58px" class="absolute right-2 top-1/2 transform -translate-y-1/2" alt="chevron-down" />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import ChevronDown from "../../assets/chevron-down.png"

export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    defaultOptionText: {
      type: String,
      default: "Choose an option",
    },
    defaultOptionValue: {
      type: String,
      default: "",
    },
    options: {
      type: Array,
      required: true,
    },
    value: {
      type: String,
      default: "",
    },
    inputClass: {
      type: String,
      default:
      "bg-white border border-grey-3 text-text-textColor-1 font-medium text-size4 outline-none rounded-lg focus:ring-grey-3 focus:border-grey-3 block w-full p-2.5 h-[48px] dark:text-white dark:bg-dark-1"
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const selectedOption = ref(props.value);

    const handleChange = (event) => {
      const selectedValue = event.target.value;
      selectedOption.value = selectedValue;
      emit("update:modelValue", selectedValue);
    };

    return {
      selectedOption,
      handleChange,
      ChevronDown
    };
  },
};
</script>
