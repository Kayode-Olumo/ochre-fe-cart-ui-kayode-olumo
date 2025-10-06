import type { CartItem, CartTotals } from "./types"
import { toCents } from "./currency"

export function removeFromCart(list: CartItem[], id: string): CartItem[] {
  return list.filter((item) => item.id !== id)
}


export function getCartTotals(items: CartItem[]): CartTotals {
  if (!items.length) {
    return { subtotal: 0, currency: "USD" }
  }

  const subtotal = items.reduce((acc, item) => {
    const cents = toCents(item.price.value)
    return acc + cents * (item.quantity || 1)
  }, 0)

  return {
    subtotal,
    currency: items[0].price.currency || "USD",
  }
}