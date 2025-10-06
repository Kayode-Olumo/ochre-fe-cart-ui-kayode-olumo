import { Button } from "@/components/ui/button"
import { ShoppingBag } from "lucide-react"
import Link from "next/link"

export function CartEmpty() {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
        <ShoppingBag className="w-8 h-8 text-muted-foreground" />
      </div>
      <h2 className="text-2xl font-semibold text-foreground mb-2">Your cart is empty</h2>
      <p className="text-muted-foreground mb-6 max-w-sm">
        Looks like you haven&apos;t added anything to your cart yet. Start shopping to fill it up!
      </p>
      <Button asChild size="lg">
        <Link href="#">Continue Shopping</Link>
      </Button>
    </div>
  )
}
