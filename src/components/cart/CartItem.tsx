"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Price } from "@/components/cart/Price"
import { toCents } from "@/lib/currency"
import type { CartItem as CartItemType } from "@/lib/types"
import { Trash2 } from "lucide-react"

interface CartItemProps {
  item: CartItemType
  onRemove: (id: string) => void
}

export function CartItem({ item, onRemove }: CartItemProps) {
  const priceInMinorUnits = toCents(item.price.value)

  return (
    <article className="flex gap-4 p-4 bg-card border border-border rounded-2xl max-w-full lg:max-w-[736px]">
      <div className="relative w-[80px] h-[80px] flex-shrink-0 rounded-lg overflow-hidden border border-[#D9D8DF]">
        <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" sizes="80px" />
      </div>

      <div className="flex-1 min-w-0 flex justify-between">
        <div className="flex flex-col items-start gap-1">
          <h3 className="font-normal text-foreground text-base leading-snug">{item.title}</h3>
          <p className="text-sm text-[#928ea2]">{item.variant}</p>
        </div>

        <div className="flex flex-col items-end justify-between">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onRemove(item.id)}
            aria-label={`Remove ${item.title}`}
            className="flex-shrink-0 h-8 w-8 text-destructive hover:text-destructive hover:bg-transparent cursor-pointer"
          >
            <Trash2 className="h-5 w-5" />
          </Button>
          <Price
            minorUnits={priceInMinorUnits}
            currency={item.price.currency}
            className="font-normal text-foreground text-xl"
          />
        </div>
      </div>
    </article>
  )
}
