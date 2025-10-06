import { CartItem } from "@/components/cart/CartItem"
import type { CartItem as CartItemType } from "@/lib/types"

interface CartListProps {
  items: CartItemType[]
  onRemove: (id: string) => void
}

export function CartList({ items, onRemove }: CartListProps) {
  return (
    <div className="flex flex-col gap-4">
      {items.map((item) => (
        <CartItem key={item.id} item={item} onRemove={onRemove} />
      ))}
    </div>
  )
}
