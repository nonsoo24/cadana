<template>
  <button
    :class="[
      'button',
      {
        [`button-${variant}`]: true,
      },
      width,
      buttonClass
    ]"
    :disabled="disabled"
    @click="onClick"
  >
    {{ icon }}
    {{ label }}
  </button>
</template>

<script>
export default {
  name: "AppButton",
  props: {
    variant: {
      type: String,
      default: "primary",
      validator: (value) => ["primary", "secondary"].includes(value),
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: "",
    },
    buttonClass: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      required: true,
      default: ""
    },
    width: {
      type: String,
      default: "w-auto",
    },
  },
  setup(props, { emit }) {
    const onClick = () => {
      emit("click");
    };

    return {
      onClick,
    };
  },
};
</script>

<style scoped>
.button {
  @apply py-2 px-4 rounded;
}

.button-primary {
  @apply bg-primary text-white;
}

.button-secondary {
  @apply bg-secondary text-primary text-size4 h-[48px] font-semibold;
}

.button:disabled {
  @apply opacity-50 cursor-not-allowed;
}
</style>
