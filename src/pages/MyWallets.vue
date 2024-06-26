<template>
  <section class="wrapper h-full">
    <section class="dark:bg-dark-1 bg-grey-2 py-9">
      <p class="font-semibold text-size1 text-textColor-1 dark:text-white">
        My Wallets
      </p>

      <div class="mt-8 flex justify-center">
        <div>
          <div class="relative">
            <CreditCard
              cardOwner="Cadana"
              bankName="Universal Bank"
              cardNumber="5495  7381  3759  2321"
              expiryDate="04/24"
              cardType="mastercard"
              cardWrapper="h-[210px] w-[354px]"
            />
            <div class="absolute top-40 left-4">
              <CreditCard
                cardOwner="Cadana"
                bankName="Commercial Bank"
                cardNumber="85952548****"
                expiryDate="09/25"
                :cardTypeLogo="isDark ? VisaLogoLight : VisaLogo"
                cardType="visa"
                cardWrapper="w-[324px] h-[172px]"
                cardIconClass="!mt-4"
                cardNumberClass="!mt-2"
                cardExpiryClass="!mt-1"
              />
            </div>
          </div>

          <div
            class="bg-grey-1 w-[373px] p-6 mb-5 rounded-lg mt-40 border border-grey-3 dark:bg-dark-3 dark:border-dark-3"
          >
            <div class="grid grid-cols-2 gap-5">
              <div>
                <p
                  class="text-textColor-2 text-size4 font-medium text-left dark:textColor-3"
                >
                  Your Balance
                </p>
                <AppAmount
                  :amount="accountSummary.balance"
                  :currencyCode="CURRENCY_CODES.USD"
                />
              </div>
              <div class="flex gap-4 items-end">
                <div class="flex items-center gap-1">
                  <VsxIcon iconName="ArrowUp" :size="16" :color="colors.success" />
                  <p class="font-medium text-size4 text-success">
                    {{ accountSummary.percentageGain }}
                  </p>
                </div>
                <div class="flex items-center gap-1">
                  <img :src="ArrowDown" class="h-4 w-4" alt="arrow-down" />
                  <VsxIcon iconName="ArrowDown" :size="16" :color="colors.error" />
                  <p class="font-medium text-size4 text-error">
                    {{ accountSummary.percentageLoss }}
                  </p>
                </div>
              </div>
            </div>
            <div class="my-5 mx-1">
              <div class="border-b border-b-grey-3 w-[289px]" />
            </div>
            <div class="grid grid-cols-2 gap-5">
              <AppTitle
                title="Currency"
                subtitle="USD / US Dollar"
                titleClass="text-textColor-2 text-size4 font-medium text-left dark:textColor-3"
                subtitleClass="font-semibold text-size4 text-textColor-1 text-left dark:text-white"
              />
              <AppTitle
                title="Status"
                subtitle="Active"
                titleClass="font-medium text-size4 text-textColor-2 text-left"
                subtitleClass="font-semibold text-size4 text-textColor-1 text-left dark:text-white"
              />
            </div>
          </div>
          <AppButton
            label="Add New Card"
            ariaLabel="Add New Card"
            type="button"
            iconName="Add"
            :iconColor="isDark ? '#FFF0EB' : '#E75423'"
            width="w-[354px]"
            variant="secondary"
            buttonClass="rounded-lg mx-5 my-3  !dark:bg-dark-2 !dark:text-secondary"
          />
        </div>
      </div>
    </section>

    <section class="dark:bg-dark-2 bg-white">
      <NavBar />

      <div class="mt-8 max-w-[570px] pl-8">
        <AppTitle
          title="My Payments"
          titleClass="font-semibold text-size2 text-textColor-1 text-left mb-4 dark:text-white"
        />
        <AppTab :tabs="tabs" @tab-click="changeTab">
          <template v-slot:input>
            <AppInput
              :value="inputValue"
              id="search"
              placeholder="Search"
              @change="handleChange"
              inputClass="outline-none bg-white dark:bg-dark-1 dark:text-white text-textColor2"
              iconName="SearchNormal1"
            />
          </template>
        </AppTab>

        <section>
          <AppTitle
            title="Upcoming Payments"
            titleClass="font-semibold text-size2 text-textColor-1 text-left mb-4 mt-6 dark:text-white"
          />
          <TransactionList
            text="Next month"
            :data="upComingPayments"
            imgClass="w-[43pxx] h-[43px] rounded-xl"
          />
        </section>
      </div>
    </section>
  </section>
</template>

<script>
import { ref } from "vue";
import AppTitle from "../components/AppTitle.vue";
import TransactionList from "../components/TransactionList.vue";
import AppButton from "../components/forms/AppButton.vue";
import AppTab from "../components/AppTab.vue";
import NavBar from "../components/NavBar.vue";
import ArrowUp from "../assets/arrow-up.png";
import ArrowDown from "../assets/arrow-down.png";
import CreditCard from "../components/CreditCard.vue";
import AppAmount from "../components/AppAmount.vue";
import toAmount from "../utils/toAmount";
import toSign from "../utils/toSign";
import { CURRENCY_CODES } from "../utils/constant";
import AllPayments from "../components/transactions/AllPayments";
import RegularPayments from "../components/transactions/RegularPayments";
import VisaLogo from "../assets/visa.png";
import VisaLogoLight from "../assets/visa-dark.png";
import { useDark } from "@vueuse/core";
import PlusPrimary from "../assets/plus-primary.png";
import PlusSecondary from "../assets/plus-secondary.png";
import AppInput from "../components/forms/AppInput.vue";
import SearchIcon from "../assets/icons/search.png";
import colors from "../utils/colors"

export default {
  name: "MyWallets",
  components: {
    AppTitle,
    TransactionList,
    AppTab,
    AppButton,
    AppAmount,
    CreditCard,
    NavBar,
    AppInput,
  },
  setup() {
    const isDark = useDark();
    const inputValue = ref("");
    const accountSummary = ref({
      balance: 5240,
      percentageGain: "23.65%",
      percentageLoss: "10.40%",
    });
    const activeTab = ref(0);
    const tabs = ref([
      {
        label: "All Payments",
        component: AllPayments,
      },
      {
        label: "Regular Payments",
        component: RegularPayments,
      },
    ]);

    const upComingPayments = ref([
      {
        title: "Facebooks Ads",
        subtitle: "20 Apr 2022, 06:55 PM",
        image: require("../assets/facebook.png"),
        rightText: `+${toAmount(toSign(400), CURRENCY_CODES.USD)}`,
      },
      {
        title: "LinkedIn Ads",
        subtitle: "18 Apr 2022, 08:58 PM",
        image: require("../assets/linkedin.png"),
        rightText: `+${toAmount(toSign(200.5), CURRENCY_CODES.USD)}`,
      },
    ]);

    const changeTab = (index) => {
      activeTab.value = index;
    };

    const handleChange = (value) => {
      console.log("Input value changed:", value);
    };

    return {
      upComingPayments,
      activeTab,
      tabs,
      changeTab,
      accountSummary,
      toAmount,
      VisaLogo,
      VisaLogoLight,
      CURRENCY_CODES,
      isDark,
      PlusPrimary,
      PlusSecondary,
      ArrowUp,
      ArrowDown,
      handleChange,
      inputValue,
      SearchIcon,
      colors,
    };
  },
};
</script>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: 1fr 2fr;
}
</style>
