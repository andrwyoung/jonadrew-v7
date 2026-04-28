"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { useCartStore, cartTotal, cartCount } from "@/store/cart-store";
import {
  FaCartShopping,
  FaMinus,
  FaPlus,
  FaTrash,
  FaXmark,
} from "react-icons/fa6";

function formatPrice(cents: number) {
  return `$${(cents / 100).toFixed(2)}`;
}

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity } =
    useCartStore();
  const total = cartTotal(items);

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && closeCart()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/30 z-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />

        <Dialog.Content
          aria-describedby={undefined}
          className="fixed right-0 top-0 h-full w-full max-w-sm bg-white shadow-xl z-200 flex flex-col
            data-[state=open]:animate-in data-[state=closed]:animate-out
            data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right
            duration-300"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-stone-100">
            <Dialog.Title className="font-header font-semibold text-lg text-text">
              Cart ({cartCount(items)})
            </Dialog.Title>
            <Dialog.Close asChild>
              <button
                type="button"
                className="text-stone-400 hover:text-text transition-colors cursor-pointer"
                aria-label="Close cart"
              >
                <FaXmark size={20} />
              </button>
            </Dialog.Close>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center flex-1 gap-3 text-stone-400 py-24">
                <FaCartShopping size={40} />
                <p className="font-header font-semibold">Your cart is empty</p>
              </div>
            ) : (
              items.map(({ product, quantity }) => (
                <div
                  key={product.slug}
                  className="flex gap-4 items-start border-b border-stone-100 pb-4"
                >
                  <div className="w-16 h-16 rounded-lg bg-stone-100 overflow-hidden shrink-0">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-1 flex-1 min-w-0">
                    <p className="font-header font-semibold text-sm text-text truncate">
                      {product.name}
                    </p>
                    <p className="text-sm text-secondary-text font-semibold">
                      {formatPrice(product.price)}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(product.slug, quantity - 1)
                        }
                        className="w-7 h-7 rounded border border-stone-200 flex items-center justify-center text-stone-500 hover:border-stone-400 transition-colors cursor-pointer"
                        aria-label="Decrease quantity"
                      >
                        <FaMinus size={16} />
                      </button>
                      <span className="font-semibold w-4 text-center">
                        {quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(product.slug, quantity + 1)
                        }
                        className="w-7 h-7 rounded border border-stone-200 flex items-center justify-center text-stone-500 hover:border-stone-400 transition-colors cursor-pointer"
                        aria-label="Increase quantity"
                      >
                        <FaPlus size={16} />
                      </button>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeItem(product.slug)}
                    className="text-stone-400 hover:text-red-400 transition-colors cursor-pointer shrink-0 mt-1"
                    title="Remove Item"
                    aria-label="Remove item"
                  >
                    <FaTrash size={16} />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="px-6 py-5 border-t border-stone-100 flex flex-col gap-4">
              <div className="flex items-center justify-between font-header font-semibold text-text">
                <span>Total</span>
                <span>{formatPrice(total)}</span>
              </div>
              <button
                type="button"
                className="w-full bg-secondary text-white font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
              >
                Checkout
              </button>
            </div>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
