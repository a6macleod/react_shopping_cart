function priceConverter(priceInCents) {
  const priceInDollars = parseFloat(priceInCents / 100).toFixed(2)
  return priceInDollars;
}

export default priceConverter;
