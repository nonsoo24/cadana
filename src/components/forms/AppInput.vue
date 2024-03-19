<template>
  <input
    v-bind="$attrs"
    :value="inputValue"
    :placeholder="placeholder"
    @input="handleChange"
    @blur="handleBlur"
    :aria-label="ariaLabel"
    :class="inputClass"
  />
</template>

<script>
import { ref, watch } from "vue";

export default {
  name: "AppInput",
  props: {
    value: {
      type: [String, Number],
      default: "",
    },
    placeholder:{
        type: String,
      default: "",
    },
    inputClass:{
        type: String,
      default: "",
    },
    onChange: Function,
    onBlur: {
        type: Function,
        required: false
    },
    ariaLabel: String,
  },
  setup(props, { emit }) {
    const inputValue = ref(props.value);

    const handleChange = (event) => {
      inputValue.value = event.target.value;
      emit("update:value", event.target.value);
      if (props.onChange) {
        props.onChange(event.target.value);
      }
    };

    const handleBlur = (event) => {
      if (props.onBlur) {
        props.onBlur(event.target.value);
      }
    };

    watch(
      () => props.value,
      (newValue) => {
        inputValue.value = newValue;
      }
    );

    return {
      inputValue,
      handleChange,
      handleBlur,
    };
  },
};
</script>
