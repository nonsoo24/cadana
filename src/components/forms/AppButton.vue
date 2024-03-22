<template>
  <div>
    <button
      :type="type"
      :class="[
        'button',
        {
          [`button-${variant}`]: true,
          'flex-row-reverse': rtl,
        },
        width,
        buttonClass,
      ]"
      class="relative flex items-center justify-center"
      :disabled="disabled"
      :aria-label="ariaLabel"
      :aria-disabled="disabled"
      @click="onClick"
    >
      <VsxIcon v-if="iconName" :iconName="iconName" :size="iconSize" :color="iconColor" :type="iconType" />
      {{ label }}
    </button>
  </div>
</template>

<script>
import colors from "../../utils/colors.js";

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
    iconName: {
      type: String,
      default: "",
    },
    iconSize: {
      type: Number,
      default: 20,
    },
    iconType: {
      type: String,
      default: "linear",
    },
    iconColor: {
      type: String,
      default: colors.textColor[2],
    },
    buttonClass: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      required: true,
      default: "",
    },
    width: {
      type: String,
      default: "w-auto",
    },
    rtl: {
      type: Boolean,
      default: false,
    },
    ariaLabel: {
      type: String,
      default: "",
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
  @apply bg-white text-textColor-3 text-center font-semibold dark:text-white dark:bg-dark-2;
}

.button-secondary {
  @apply bg-secondary text-primary text-size4 h-[48px] font-semibold text-center hover:bg-primary hover:text-white;
}

.button:disabled {
  @apply opacity-50 cursor-not-allowed;
}
</style>
