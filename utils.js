exports.CardVaildity = (cardNumber) => {
  const digits = [...cardNumber].map(Number).reverse();
  let sum = 0;

  for (let i = 0; i < digits.length; i++) {
    let digit = digits[i] * (i % 2 === 1 ? 2 : 1);
    sum += digit > 9 ? digit - 9 : digit;
  }

  return sum % 10 === 0;
};

// const cardNumber = "4280992000159468"; // Replace with your card number
// console.log(
//   luhnAlgorithm(cardNumber) ? true : "Invalid card number"
// );
