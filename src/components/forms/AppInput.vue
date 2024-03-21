<template>
  <label
    v-if="label"
    :for="id"
    :class="labelClass"
    class="block font-medium text-size4 text-textColor-2 mb-2"
    >{{ label }}</label
  >

  <div class="relative">
    <input
      v-bind="$attrs"
      :id="id"
      :type="type"
      :value="inputValue"
      :placeholder="placeholder"
      @input="handleChange"
      @change="onChange"
      @blur="handleBlur"
      :aria-label="ariaLabel"
      :class="[inputClass, { 'pl-10': leftIcon, 'pr-10': rightIcon }]"
      :required="required"
      :autocomplete="off"
      :aria-autocomplete="off"
      :aria-required="required"
      :aria-invalid="isInvalid"
      :aria-describedby="errorId"
      :disabled="disabled"
    />
    <div
      v-if="leftIcon || customLeftIcon"
      class="absolute inset-y-0 left-0 flex items-center pl-3"
    >
      <img v-if="leftIcon" :src="leftIcon" class="h-5 w-5" alt="left-icon" />
      <slot name="customLeftIcon"></slot>
    </div>
    <div
      v-if="rightIcon || customRightIcon"
      class="absolute inset-y-0 right-0 flex items-center pr-3"
    >
      <img v-if="rightIcon" :src="rightIcon" class="h-5 w-5" alt="right-icon" />
      <slot name="customRightIcon"></slot>
    </div>
  </div>
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
    ariaLabel:  {
      type: String,
      default: '',
    },
    leftIcon:  {
      type: String,
      default: '',
    },
    rightIcon:  {
      type: String,
      default: '',
    },
    customLeftIcon:  {
      type: Boolean,
      default: false,
    },
    customRightIcon:  {
      type: Boolean,
      default: false,
    },
    autocomplete:  {
      type: String,
      default: "off",
    },
    disabled:  {
      type: Boolean,
      default: false,
    },
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
