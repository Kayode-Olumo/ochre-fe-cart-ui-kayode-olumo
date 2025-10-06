import { Button } from "@/components/ui/button"
import { Price } from "@/components/cart/Price"
import type { CartTotals } from "@/lib/types"

interface CartSummaryProps {
  totals: CartTotals
}

export function CartSummary({ totals }: CartSummaryProps) {
  return (
    <aside className="lg:sticky lg:top-8">
      <div className="bg-white border border-[#D9D8DF] rounded-2xl p-4 space-y-6">
        <h2 className="text-2xl font-normal text-foreground">Order Summary</h2>

        <div className="flex justify-between items-center pt-4">
          <span className="text-lg font-normal text-foreground">Total</span>
          <Price
            minorUnits={totals.subtotal}
            currency={totals.currency}
            className="text-2xl font-normal text-foreground"
          />
        </div>

        <Button className="w-full bg-[#b9b6c3] hover:bg-[#a8a5b5] text-white rounded-lg" size="lg">
          Proceed to Checkout
        </Button>
      </div>
    </aside>
  )
}
