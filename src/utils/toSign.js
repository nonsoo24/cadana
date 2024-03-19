const toSign = (number) => {
  const sign = Math.sign(Number(number));
  return sign === 1 || sign === 0 ? `+${number}` : number.toString();
};

export default toSign;
