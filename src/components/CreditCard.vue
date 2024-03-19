<template>
  <div
    class="min-w-min min-h-min rounded-lg p-6 font-gordita"
    :class="[
      cardWrapper,
      {
        [`card-wrapper-${cardType}`]: true,
      },
    ]"
  >
    <div
      class="flex gap-4"
      :class="[
        {
          [`card-owner-${cardType}`]: true,
        },
      ]"
    >
      <p>
        {{ cardOwner }}
      </p>
      <p>{{ bankName }}</p>
    </div>

    <div
      class="flex justify-between items-center mt-6"
      :class="[
        cardIconClass,
        {
          [`card-icon-${cardType}`]: true,
        },
      ]"
    >
      <img :src="Chip" alt="chip-icon" width="37.92px" height="30px" />
      <img :src="WiFi" alt="wifi-icon" width="33px" height="34px" />
    </div>
    <div
      class="mt-4"
      :class="[
        cardNumberClass,
        {
          [`card-number-${cardType}`]: true,
        },
      ]"
    >
      <p>{{ cardNumber }}</p>
    </div>

    <div
      class="mt-6 flex justify-between items-center"
      :class="[
        cardExpiryClass,
        {
          [`card-expiry-${cardType}`]: true,
        },
      ]"
    >
      <p>{{ expiryDate }}</p>
      <img
        :src="cardTypeLogo"
        alt="card-type-logo"
        width="40px"
        height="36px"
      />
    </div>
  </div>
</template>

<script>
import Chip from "../assets/chip.png";
import WiFi from "../assets/wifi.png";
import MasterCard from "../assets/master-card.png";

export default {
  name: "CreditCard",
  props: {
    cardOwner: String,
    bankName: String,
    cardNumber: String,
    expiryDate: String,
    cardType: {
      type: String,
      default: "mastercard",
      validator: (value) => ["mastercard", "visa", "verve"].includes(value),
    },
    cardTypeLogo: {
      type: String,
      default: MasterCard,
    },
    titleClass: {
      type: String,
      default: "text-size4 text-textColor-2",
    },
    cardWrapper: {
      type: String,
      default: "",
    },
    cardIconClass: {
      type: String,
      default: "",
    },
    cardNumberClass: {
      type: String,
      default: "",
    },
    cardExpiryClass: {
      type: String,
      default: "",
    },
  },

  setup() {
    return {
      Chip,
      WiFi,
    };
  },
};
</script>

<style scoped>
@font-face {
    font-family: 'Gordita';
    src: url('../assets/fonts/gordita/Gordita-Medium.otf');
}
.font-gordita {
    font-family: 'Gordita', sans-serif;
}
.card-wrapper {
  background-image: linear-gradient(180deg, #4a4a49 0%, #20201f 100%);
  font-family: Gordita;
}
.card-wrapper-mastercard {
  background-image: linear-gradient(180deg, #4a4a49 0%, #20201f 100%);
}
.card-owner-mastercard p:first-child {
  @apply text-white text-size3 font-bold border-r border-r-grey-4 pr-3;
}
.card-owner-mastercard p:last-child {
  @apply text-size4 font-medium text-grey-4;
}

.card-number-mastercard p {
  @apply font-bold text-white text-[17px];
  letter-spacing: 3px;
}
.card-expiry-mastercard p {
  @apply font-bold text-white text-size4;
}

.card-wrapper-visa {
  background-image: rgba(149, 149, 149, 1) rgba(50, 64, 0, 1);
}
.card-owner-visa p:first-child {
  @apply text-white text-size3 font-bold border-r border-r-grey-4 pr-3;
}
.card-owner-visa p:last-child {
  @apply text-size5 font-medium text-grey-3;
}

.card-number-visa p:first-child {
  @apply font-bold text-textColor-1 text-[16px];
  letter-spacing: 2px;
}
.card-expiry-visa p {
  @apply font-bold text-textColor-2 text-size4;
}
</style>