<template>
  <transition name="customizer-transition">
    <aside
      v-if="isOpen"
      class="top-0 left-0 z-40 w-[320px] h-screen bg-white transition-transform -translate-x-full sm:translate-x-0 border border-grey-5 dark:bg-dark-4 dark:border-dark-4"
      aria-label="customization-panel"
    >
      <div
        class="flex justify-between items-center p-6 border-b border-b-grey-5 dark:border-dark-4"
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
        <fieldset class="border-0">
          <div class="flex justify-center mt-10">
            <div class="w-full">
              <div class="w-full px-5">
                <AppSelect
                  v-model="selectedFont"
                  id="system-font"
                  label="System Font"
                  :defaultOptionText="selectPlaceholder"
                  :options="fontTypes"
                  :value="fontTypes[0].value"
                />
              </div>
              <div
                class="border-b border-b-grey-5 w-full my-8 dark:border-b-dark-2"
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
                  :customRightIcon="true"
                  @change="handlePrimaryColor"
                >
                <template v-slot:customRightIcon>
                  <ColorIndicator
                  backgroundColor="bg-primary"
                  dotColor="bg-white"
                  dotSize="w-[5px] h-[5px]"
                  size="w-[19.2px] h-[19.2px]"
                />
                </template>
              </AppInput>
              </div>
              <div
                class="border-b border-b-grey-5 w-full my-8 dark:border-b-dark-2"
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
                  :customRightIcon="true"
                  @change="handleSecondaryColor"
                >
                <template v-slot:customRightIcon>
                  <ColorIndicator
                  backgroundColor="bg-secondary"
                  dotColor="bg-white"
                  dotSize="w-[5px] h-[5px]"
                  size="w-[19.2px] h-[19.2px]"
                />
                </template>
              </AppInput>

              </div>
              <div
                class="border-b border-b-grey-5 w-full my-8 dark:border-b-dark-2"
              />
            </div>
          </div>
          <div class="h-full px-3 py-4 overflow-y-auto">
            <div class="absolute bottom-16">
              <div class="w-full">
                <AppButton
                  label="Save Changes"
                  ariaLabel="Save Changes"
                  type="button"
                  width="w-[288px]"
                  variant="secondary"
                  buttonClass="rounded-lg"
                  @click="onSaveTheme"
                />

                <AppButton
                  label="Reset Setting"
                  ariaLabel="Reset Setting"
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
import { ref, onMounted } from "vue";
import AppButton from "../components/forms/AppButton.vue";
import AppTitle from "../components/AppTitle.vue";
import CloseIcon from "../assets/close-icon.png";
import AppInput from "../components/forms/AppInput";
import AppSelect from "../components/forms/AppSelect";
import ColorIndicator from "../components/ColorIndicator";
import { PRIMARY_THEME_COLOR, SECONDARY_THEME_COLOR } from "../utils/constant";
import { saveToStorage, getFromStorage, removeToStorage } from "../utils/store";

export default {
  name: "AppCustomizer",
  components: {
    AppButton,
    AppTitle,
    AppInput,
    AppSelect,
    ColorIndicator,
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
    const selectPlaceholder = ref("Select font");
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
      const primaryColor = primaryColorValue.value?.target?.value || "";
      const secondaryColor = secondaryColorValue.value?.target?.value || "";

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
        document.documentElement.style.setProperty(
          "--primary-color",
          primaryColor
        );
        saveToStorage({key: PRIMARY_THEME_COLOR, data:JSON.stringify(primaryColor)  })
      }

      if (secondaryColor) {
        document.documentElement.style.setProperty(
          "--secondary-color",
          secondaryColor
        );
        saveToStorage({key: SECONDARY_THEME_COLOR, data:JSON.stringify(secondaryColor)  })
      }
    };
    const onResetTheme = () => {
      document.documentElement.style.setProperty("--primary-color", "#E75423");
      document.documentElement.style.setProperty(
        "--secondary-color",
        "#FFF0EB"
      );

      removeToStorage(PRIMARY_THEME_COLOR)
      removeToStorage(SECONDARY_THEME_COLOR)
    };

    const toggleCustomizer = () => {
      emit("close-customizer");
    };

    onMounted(() => {
      const primaryTheme = JSON.parse(
        getFromStorage(PRIMARY_THEME_COLOR)
      );
      const secondaryTheme = JSON.parse(
        getFromStorage(SECONDARY_THEME_COLOR)
      );

      if (primaryTheme) {
        document.documentElement.style.setProperty(
          "--primary-color",
          primaryTheme
        );
      }
      if (secondaryTheme) {
        document.documentElement.style.setProperty(
          "--secondary-color",
          secondaryTheme
        );
      }
    });

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
