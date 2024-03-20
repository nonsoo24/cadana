<template>
  <transition name="customizer-transition">
    <aside
      v-if="isOpen"
      class="top-0 left-0 z-40 w-[320px] h-screen bg-white transition-transform -translate-x-full sm:translate-x-0 border border-grey-5"
      aria-label="customization-panel"
    >
      <div
        class="flex justify-between items-center p-6 border-b border-b-grey-5"
      >
        <AppTitle
          title="CUSTOMIZATION"
          titleClass="font-semibold text-size4 text-textColor-1 text-left"
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
              <div class="border-b border-b-grey-5 w-full my-8" />
              <div class="w-full px-5">
                <AppInput
                  :value="primaryColorValue"
                  id="primary-color"
                  label="Primary Color"
                  ariaLabel="Primary Color"
                  placeholder="Enter primary color"
                  inputClass="bg-white border border-grey-3 text-text-textColor-1 font-medium text-size4 outline-none rounded-lg focus:ring-grey-3 focus:border-grey-3 block w-full p-2.5 h-[48px]"
                  :required="true"
                  @change="handlePrimaryColor"
                />
              </div>
              <div class="border-b border-b-grey-5 w-full my-8" />
              <div class="mt-4 px-5">
                <AppInput
                  :value="secondaryColorValue"
                  id="secondary-color"
                  label="Secondary Color"
                  ariaLabel="Secondary Color"
                  placeholder="Enter secondary color"
                  @change="handleSecondaryColor"
                  inputClass="bg-white border border-grey-3 text-text-textColor-1 font-medium text-size4 outline-none rounded-lg focus:ring-grey-3 focus:border-grey-3 block w-full p-2.5 h-[48px]"
                  :required="true"
                />
              </div>
              <div class="border-b border-b-grey-5 w-full my-8" />
            </div>
          </div>
          <div
            class="h-full px-3 py-4 overflow-y-auto bg-white dark:bg-gray-800"
          >
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
      console.log(primaryColorValue.value, "input");
    };

    const handleSecondaryColor = () => {
      //   secondaryColorValue.value = value
    };

    const onSaveTheme = () => {
      console.log(primaryColorValue.value, secondaryColorValue.value);
    };
    const onResetTheme = () => {
      console.log(primaryColorValue.value, "reset");
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
      handlePrimaryColor,
      handleSecondaryColor,
      CloseIcon,
      onSaveTheme,
      onResetTheme,
      toggleCustomizer,
      fontTypes,
      selectPlaceholder,
      selectedFont
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
