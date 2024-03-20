<template>
  <button
   :type="type"
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
    type: {
      type: String,
      default: "button",
      validator: (value) => ["submit", "button", "reset"].includes(value),
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
  @apply bg-white text-textColor-3 text-center font-semibold dark:text-white dark:bg-dark-1;
}

.button-secondary {
  @apply bg-secondary text-primary text-size4 h-[48px] font-semibold text-center hover:bg-primary hover:text-white;
}

.button:disabled {
  @apply opacity-50 cursor-not-allowed;
}
</style>
