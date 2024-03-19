const toAmount = (amount, currencyCode = "NGN") =>
  new Intl.NumberFormat(currencyCode === "NGN" ? "en-NG" : "en-US", {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
    style: "currency",
    currency: currencyCode,
  }).format(Number(amount), 2);

export default toAmount;
