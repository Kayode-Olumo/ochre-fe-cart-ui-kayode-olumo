export interface CartItem {
  id: string;
  title: string;
  variant?: string;
  image: string;
  price: {
    currency: string;
    value: number;
  };
  quantity: number;
}

export interface CartTotals {
  subtotal: number;
  currency: string;
}