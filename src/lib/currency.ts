export function toCents(value: number): number {
  return Math.round(value * 100)
}

export function fromCents(cents: number): number {
  return cents / 100
}

export function formatCurrency(
  cents: number,
  locale: string,
  currency: string
): string {
  const value = fromCents(cents)
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(value)
}