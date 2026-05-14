import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product } from "@/types/store-types";

export type CartItem = {
  id: string;
  product: Product;
  quantity: number;
  bundleSelections?: string[]; // display names of chosen posters
};

type CartStore = {
  items: CartItem[];
  isOpen: boolean;
  addItem: (product: Product, bundleSelections?: string[]) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
};

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      items: [],
      isOpen: false,

      addItem: (product, bundleSelections) =>
        set((state) => {
          const id = bundleSelections?.length
            ? `${product.slug}:${[...bundleSelections].sort().join(",")}`
            : product.slug;
          const existing = state.items.find((i) => i.id === id);
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.id === id ? { ...i, quantity: i.quantity + 1 } : i
              ),
            };
          }
          return {
            items: [
              ...state.items,
              { id, product, quantity: 1, bundleSelections },
            ],
          };
        }),

      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((i) => i.id !== id),
        })),

      updateQuantity: (id, quantity) =>
        set((state) => ({
          items:
            quantity <= 0
              ? state.items.filter((i) => i.id !== id)
              : state.items.map((i) =>
                  i.id === id ? { ...i, quantity } : i
                ),
        })),

      clearCart: () => set({ items: [] }),
      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
    }),
    {
      name: "jonadrew-cart",
      // don't persist drawer open state across page loads
      partialize: (state) => ({ items: state.items }),
    }
  )
);

export function cartTotal(items: CartItem[]) {
  return items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);
}

export function cartCount(items: CartItem[]) {
  return items.reduce((sum, i) => sum + i.quantity, 0);
}
