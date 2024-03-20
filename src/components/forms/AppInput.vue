<template>
  <label
    v-if="label"
    :id="id"
    :class="labelClass"
    class="block font-medium text-size4 text-textColor-2 mb-2"
    >{{ label }}</label
  >
  <input
    v-bind="$attrs"
    :for="id"
    :type="type"
    :value="inputValue"
    :placeholder="placeholder"
    @input="handleChange"
    @change="onChange"
    @blur="handleBlur"
    :aria-label="ariaLabel"
    :class="inputClass"
    :required="required"
    autocomplete="off"
  />
</template>

<script>
import { ref, watch } from "vue";
const inputTypes = [
  "text",
  "email",
  "password",
  "number",
  "tel",
  "search",
  "address",
  "color",
  "hidden",
  "url",
  "search",
  "date",
];

export default {
  name: "AppInput",
  props: {
    id: String,
    value: {
      type: [String, Number],
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    labelClass: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    inputClass: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      required: true,
      default: "text",
      validator: (value) => inputTypes.includes(value),
    },
    required: {
      type: Boolean,
      default: false,
    },
    onChange: {
      type: Function,
      default: () => {},
      required: false,
    },
    onBlur: {
      type: Function,
      default: () => {},
      required: false,
    },
    ariaLabel: String,
  },
  setup(props, { emit }) {
    const inputValue = ref(props.value);

    const handleChange = (event) => {
      inputValue.value = event.target.value;
      if (props.onChange) {
        props.onChange(inputValue.value);
      }
    };

    const handleBlur = (event) => {
      inputValue.value = event.target.value;
      if (props.onBlur) {
        props.onBlur(inputValue.value);
      }
    };

    watch(
      () => props.value,
      (newValue) => {
        emit("update:value", newValue);
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
