export function formatAmountAsPrice(locale, currency, price) {
  return Intl.NumberFormat(locale, { style: 'currency', currency }).format(price);
}