<template>
  <section class="wrapper">
    <div class="w-[433px]">
      <div class="h-[322px] w-auto card-wrapper p-10">
        <div class="flex gap-4">
          <p class="text-white text-size3 font-bold border-r border-r-grey-4">Cadana</p>
          <p class="text-size4 font-medium text-grey-4">Universal Bank</p>

        </div>

      </div>
      <div class="bg-grey-1 w-auto h-[181px] p-6 mb-5 rounded-lg">
         <div class="grid grid-cols-2 gap-5">
          <div>
            <p class="text-textColor-2 text-size4 font-medium text-left">
              Your Balance
            </p>
            <p class="text-textColor-1 text-size4 font-semibold text-left">
              {{toAmount(accountSummary.balance, 'USD') }}
            </p>
          </div>
          <div class="flex gap-4 items-end">
            <AppIcon name="arrow-up" />
            <p class=" font-medium text-size4 text-success">{{ accountSummary.percentageGain }}</p>
            <AppIcon name="arrow-down" />
            <p class=" font-medium text-size4 text-error">{{ accountSummary.percentageLoss }}</p>
          </div>
        </div>
       <div class="flex justify-center my-5 mx-5">
        <div class="border-b border-b-grey-3 w-[289px]" />
       </div>
         <div class="grid grid-cols-2 gap-5">
          <HeaderTitle
            title="Currency"
            subtitle="USD / US Dollar"
            titleClass="!text-textColor-2 !text-size4 font-medium text-left"
            subtitleClass="font-semibold !text-size4 !text-textColor-1 text-left"
          />
          <HeaderTitle
            title="Status"
            subtitle="Active"
            titleClass="font-medium !text-size4 !text-textColor-2 text-left"
            subtitleClass="font-semibold !text-size4 !text-textColor-1 text-left"
          />
        </div>
      </div>
      <AppButton
        label="Add New Card"
        width="w-[354px]"
        variant="secondary"
        buttonClass="rounded-lg mx-5 my-3"
      />
    </div>
    <section>
      <HeaderTitle
        title="My payment"
        titleClass="font-semibold !text-size2 !text-textColor-1 text-left mb-4"
      />
      <AppTab :tabs="tabs" @tab-click="changeTab" />

      <section>
        <HeaderTitle
          title="Upcoming Payments"
          titleClass="font-semibold !text-size2 !text-textColor-1 text-left mb-4 mt-6"
        />
        <TransactionList
          text="Next month"
          :data="upComingPayments"
          imgClass="w-[43pxx] h-[43px] rounded-xl"
        />
      </section>
    </section>
  </section>
</template>

<script>
import { ref } from "vue";
import HeaderTitle from "../components/HeaderTitle.vue";
import TransactionList from "../components/TransactionList.vue";
import AppButton from "../components/forms/AppButton.vue";
import AppTab from "../components/AppTab.vue";
import AppIcon from "../components/AppIcon.vue";
import toAmount from "../utils/toAmount";
import toSign from "../utils/toSign";
import { CURRENCY_CODES } from "../utils/constant";
import AllPayments from "../components/transactions/AllPayments";
import RegularPayments from "../components/transactions/RegularPayments";

export default {
  name: "MyDashboard",
  components: {
    HeaderTitle,
    TransactionList,
    AppTab,
    AppIcon,
    AppButton,
  },
  setup() {
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
        rightText: toAmount(toSign(400), CURRENCY_CODES.USD),
      },
      {
        title: "LinkedIn Ads",
        subtitle: "18 Apr 2022, 08:58 PM",
        image: require("../assets/linkedin.png"),
        rightText: toAmount(toSign(200.5), CURRENCY_CODES.USD),
      },
    ]);

    const changeTab = (index) => {
      activeTab.value = index;
    };

    return {
      upComingPayments,
      activeTab,
      tabs,
      changeTab,
      accountSummary,
      toAmount
    };
  },
};
</script>

<style scoped>
.card-wrapper {
  background-image: linear-gradient(180deg, #4A4A49 0%, #20201F 100%);
  border-radius: 15px;
}
.wrapper {
  display: grid;
  grid-template-columns: 1fr  2fr;
  grid-column-gap: 1.25rem;
  padding: 40px

}

</style>