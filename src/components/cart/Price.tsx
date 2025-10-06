import { formatCurrency } from "@/lib/currency"

interface PriceProps {
  minorUnits: number
  currency: string
  locale?: string
  className?: string
}

export function Price({ minorUnits, currency, locale = "en-GB", className }: PriceProps) {
  return <span className={className}>{formatCurrency(minorUnits, locale, currency)}</span>
}
