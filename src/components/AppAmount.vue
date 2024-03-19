<template>
    <div class="flex items-center">
        <p class="text-textColor-1 text-[20px] font-semibold text-left">
          {{ toAmount(0, currencyCode).split("").shift() }}
        </p>
        <p class="text-textColor-1 text-[20px] font-semibold text-left">
          {{ characteristic }}
        </p>
        <p class="text-textColor-2 text-[20px] font-semibold text-left">
          .{{ mantissa }}
        </p>
      </div>
  </template>
  
  <script>
  import toAmount from "../utils/toAmount";
  import { CURRENCY_CODES } from "../utils/constant";
  
  export default {
    name: 'AppAmount',
    props: {
      amount: {
        type: [String, Number],
        default: "",
        required: true,
      },
      currencyCode: {
        type: String,
        default: CURRENCY_CODES.USD,
        required: true
      },
    },
    setup(props) {
        const splitAmount = (value) => {
      return new Intl.NumberFormat("en-US", {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
      })
        .format(
          parseFloat(
            value
              .toString()
              .replace(/[^0-9.-]+/g, "")
              .trim()
          )
        )
        .split(".");
    };
    const [characteristic, mantissa] = splitAmount(
      props.amount
    );

  
      return {
        toAmount,
        CURRENCY_CODES,
        characteristic,
        mantissa,
      };
    },
  };
  </script>
  