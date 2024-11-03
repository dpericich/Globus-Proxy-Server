export const sortPrice = prices => {
  const price = getPrice(prices);
  return price !== undefined ? `$${price}` : "Contact for Pricing & Dates"
}

export const showCurrency = prices => {
  const price = getPrice(prices);
  return price !== undefined ? "USD" : null;
}
export const setMissingDateAndPriceTextSize = prices => {
  const price = getPrice(prices);
  return price === undefined ? true : false;
}

export const reverseDate = date => {
  let dateSplit = date.split('-')
  return `${dateSplit[1]}-${dateSplit[2]}-${dateSplit[0]}`
}

const getPrice = (prices) => {
  return prices?.sort()[0];
};