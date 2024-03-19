<template>
  <TransactionList
    text="Today"
    :data="allPayments"
    imgClass="w-[43px] h-[43px] rounded-full"
  />
</template>

<script>
import { ref } from "vue";
import TransactionList from "../TransactionList.vue";
import toAmount from "../../utils/toAmount.js";
import toSign from "../../utils/toSign.js";
import { CURRENCY_CODES } from "../../utils/constant";

export default {
  name: "RegularPayments",
  components: {
    TransactionList,
  },

  setup() {
    const allPayments = ref([
      {
        title: "Payoneer",
        subtitle: "20 Apr 2022, 06:55 PM",
        image: require("../../assets/payoneer.png"),
        rightText: toAmount(toSign(4800.24), CURRENCY_CODES.USD),
      },
      {
        title: "Remitly",
        subtitle: "18 Apr 2022, 08:58 PM",
        image: require("../../assets/remitly.png"),
        rightText: toAmount(toSign(-1800.24), CURRENCY_CODES.USD),
      },
    ]);

    return {
      allPayments,
    };
  },
};
</script>
