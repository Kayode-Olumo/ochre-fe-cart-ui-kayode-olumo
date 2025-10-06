"use client"

import { useState } from "react"
import { CartList } from "@/components/cart/CartList"
import { CartSummary } from "@/components/cart/CartSummary"
import { CartEmpty } from "@/components/cart/EmptyCart"
import { removeFromCart, getCartTotals } from "@/lib/cart"
import type { CartItem } from "@/lib/types"
import cartData from "@/data/cart.json"

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>(cartData as CartItem[])
  const totals = getCartTotals(items)

  const handleRemove = (itemId: string) => {
    setItems((currentItems) => removeFromCart(currentItems, itemId))
  }

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-background py-8 lg:px-4">
        <div className="mx-auto max-w-6xl px-4 lg:px-0">
          <h1 className="text-3xl font-bold text-foreground mb-8">Your Cart</h1>
          <CartEmpty />
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background py-8 lg:px-4">
      <div className="mx-auto max-w-6xl px-4 lg:px-0">
        <div className="flex flex-col lg:grid lg:grid-cols-[1fr_400px] gap-6 lg:items-start">
          <section aria-label="Cart items">
            <div className="flex items-center justify-between mb-6">
              <h1 className="font-medium text-[24px] leading-[36px] tracking-[0.07px]" style={{ color: "#27252C" }}>
                Your Cart
              </h1>
              <span className="text-muted-foreground text-lg">{items.length} items</span>
            </div>
            <CartList items={items} onRemove={handleRemove} />
          </section>

          <CartSummary totals={totals} />
        </div>
      </div>
    </main>
  )
}
