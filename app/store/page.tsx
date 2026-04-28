import Link from "next/link";
import { STORE_PRODUCTS } from "@/types/configs/store-config";
import type { Product } from "@/types/store-types";

function formatPrice(cents: number) {
  return `$${(cents / 100).toFixed(2)}`;
}

function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/store/${product.slug}`}
      className="group flex flex-col bg-white border border-stone-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
    >
      <div className="aspect-square bg-stone-100 overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4 flex flex-col gap-1">
        <span className="text-xs uppercase tracking-wide text-stone-400 font-semibold">
          {product.category}
        </span>
        <h2 className="font-header font-semibold text-text text-base leading-tight">
          {product.name}
        </h2>
        <div className="flex items-center justify-between mt-2">
          <span className="font-semibold text-secondary-text">
            {formatPrice(product.price)}
          </span>
          {product.limited !== undefined && (
            <span className="text-xs text-stone-400">
              {product.limited} available
            </span>
          )}
        </div>
        {!product.available && (
          <span className="text-xs text-red-400 font-semibold">Sold out</span>
        )}
      </div>
    </Link>
  );
}

export default function StorePage() {
  return (
    <div className="flex flex-col flex-1 bg-background text-text">
      <main className="flex flex-1 flex-col items-center px-4 sm:px-8 pt-16 pb-24">
        <div className="flex flex-col items-center pb-12">
          <h1 className="text-7xl font-logo mb-1">Shop</h1>
          <p className="text-base text-stone-500 mt-2">
            Prints, originals, and more
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
          {STORE_PRODUCTS.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
}
