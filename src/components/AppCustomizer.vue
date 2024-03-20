<template>
  <transition name="customizer-transition">
    <aside
      v-if="isOpen"
      class="top-0 left-0 z-40 w-[320px] h-screen bg-white transition-transform -translate-x-full sm:translate-x-0 border border-grey-5 dark:bg-dark-4 dark:border-dark-4"
      aria-label="customization-panel"
    >
      <div
        class="flex justify-between items-center p-6 border-b border-b-grey-5"
      >
        <AppTitle
          title="CUSTOMIZATION"
          titleClass="font-semibold text-size4 text-textColor-1 text-left dark:text-textColor-2"
        />
        <button
          type="button"
          @click="toggleCustomizer"
          class="outline-none"
          aria-pressed="false"
        >
          <img :src="CloseIcon" alt="close-icon" width="34px" height="20px" />
        </button>
      </div>

      <form>
        <fieldset>
          <div class="flex justify-center mt-10">
            <div class="w-full">
              <div class="w-full px-5">
                <AppSelect
                  v-model="selectedFont"
                  id="system-font"
                  label="System Font"
                  :defaultOptionText="selectPlaceholder"
                  :options="fontTypes"
                />
              </div>
              <div
                class="border-b border-b-grey-5 w-full my-8 dark:border-b-dak-2"
              />
              <div class="w-full px-5 relative">
                <AppInput
                  :value="primaryColorValue"
                  id="primary-color"
                  label="Primary Color"
                  ariaLabel="Primary Color"
                  placeholder="Enter primary color"
                  inputClass="bg-white border border-grey-3 text-text-textColor-1 font-medium text-size4 outline-none rounded-lg focus:ring-grey-3 focus:border-grey-3 block w-full p-2.5 h-[48px] dark:text-white dark:bg-dark-4"
                  :required="true"
                  @change="handlePrimaryColor"
                />
                <div
                  class="bg-primary w-[19.2px] h-[19.2px] rounded-full flex items-center justify-center absolute right-8 top-10"
                >
                  <div class="bg-white w-[5px] h-[5px] rounded-full"></div>
                </div>
              </div>
              <div
                class="border-b border-b-grey-5 w-full my-8 dark:border-b-dak-2"
              />
              <div class="mt-4 px-5 relative">
                <AppInput
                  :value="secondaryColorValue"
                  id="secondary-color"
                  label="Secondary Color"
                  ariaLabel="Secondary Color"
                  placeholder="Enter secondary color"
                  inputClass="bg-white border border-grey-3 text-text-textColor-1 font-medium text-size4 dark:text-white outline-none rounded-lg focus:ring-grey-3 focus:border-grey-3 block w-full p-2.5 h-[48px] dark:bg-dark-4"
                  :required="true"
                  @change="handleSecondaryColor"
                />
                <div
                  class="bg-secondary w-[19.2px] h-[19.2px] rounded-full flex items-center justify-center absolute right-8 top-10"
                >
                  <div class="bg-white w-[5px] h-[5px] rounded-full"></div>
                </div>
              </div>
              <div
                class="border-b border-b-grey-5 w-full my-8 dark:border-b-dak-2"
              />
            </div>
          </div>
          <div class="h-full px-3 py-4 overflow-y-auto">
            <div class="absolute bottom-16">
              <div class="w-full">
                <AppButton
                  label="Save Changes"
                  type="button"
                  width="w-[288px]"
                  variant="secondary"
                  buttonClass="rounded-lg"
                  @click="onSaveTheme"
                />

                <AppButton
                  label="Reset Setting"
                  type="button"
                  width="w-[288px]"
                  variant="primary"
                  buttonClass="rounded-lg px-5 py-3 mt-3 mt-8 text-size4"
                  @click="onResetTheme"
                />
              </div>
            </div>
          </div>
        </fieldset>
      </form>
    </aside>
  </transition>
</template>

<script>
import { ref } from "vue";
import AppButton from "../components/forms/AppButton.vue";
import AppTitle from "../components/AppTitle.vue";
import CloseIcon from "../assets/close-icon.png";
import AppInput from "../components/forms/AppInput";
import AppSelect from "../components/forms/AppSelect";

export default {
  name: "AppCustomizer",
  components: {
    AppButton,
    AppTitle,
    AppInput,
    AppSelect,
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  setup(_, { emit }) {
    const primaryColorValue = ref("");
    const secondaryColorValue = ref("");

    const selectedFont = ref("");
    const selectPlaceholder = ref("Choose Fonts");
    const fontTypes = ref([
      { label: "Inter", value: "inter" },
      { label: "Gordita", value: "gordita" },
      { label: "SanSerif", value: "san-serif" },
      { label: "Grotesque", value: "grotesque" },
    ]);
    const handlePrimaryColor = (value) => {
      primaryColorValue.value = value;
    };

    const handleSecondaryColor = (value) => {
      secondaryColorValue.value = value;
    };
    const isValidHexColor = (color) => {
      const hexRegex = /^#?([0-9A-F]{3}|[0-9A-F]{6})$/i;

      return hexRegex.test(color);
    };

    const onSaveTheme = () => {
  const primaryColor = primaryColorValue.value?.target?.value || '';
  const secondaryColor = secondaryColorValue.value?.target?.value || '';

  if (!primaryColor && !secondaryColor) {
    alert("Please provide at least one color (Primary or Secondary).");
    return;
  }

  if (primaryColor && !isValidHexColor(primaryColor)) {
    alert("Please enter a valid hex color code for Primary Color.");
    return;
  }

  if (secondaryColor && !isValidHexColor(secondaryColor)) {
    alert("Please enter a valid hex color code for Secondary Color.");
    return;
  }

  if (primaryColor) {
    document.documentElement.style.setProperty("--primary-color", primaryColor);
  }

  if (secondaryColor) {
    document.documentElement.style.setProperty("--secondary-color", secondaryColor);
  }
};
    const onResetTheme = () => {
      document.documentElement.style.setProperty("--primary-color", "#E75423");
      document.documentElement.style.setProperty(
        "--secondary-color",
        "#FFF0EB"
      );
    };

    const toggleCustomizer = () => {
      emit("close-customizer");
    };

    return {
      primaryColorValue,
      secondaryColorValue,
      CloseIcon,
      onSaveTheme,
      onResetTheme,
      toggleCustomizer,
      handlePrimaryColor,
      handleSecondaryColor,
      fontTypes,
      selectPlaceholder,
      selectedFont,
    };
  },
};
</script>

<style scoped>
.customizer-transition-enter-active,
.customizer-transition-leave-active {
  transition: transform 0.3s ease;
}
.customizer-transition-enter,
.customizer-transition-leave-to {
  transform: translateX(100%);
}
.customizer-transition-enter-to,
.customizer-transition-leave {
  transform: translateX(0);
}
</style>