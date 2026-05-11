import Link from "next/link";
import { STORE_PRODUCTS } from "@/types/configs/store-config";
import type { Product } from "@/types/store-types";
import ConfettiTitle from "@/components/confetti-title";

function formatPrice(cents: number) {
  return `$${(cents / 100).toFixed(2)}`;
}

function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/store/${product.slug}`}
      className="group flex flex-col bg-white  rounded-md overflow-hidden "
    >
      <div className="relative aspect-square rounded-md bg-stone-100 overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.new && (
          <span className="absolute top-4 left-4 font-header bg-white text-sm font-semibold tracking-wide px-4 py-1 rounded-lg shadow-sm">
            New!
          </span>
        )}
      </div>
      <div className="p-4 flex flex-col gap-1 ">
        <span className="text-xs uppercase tracking-wide text-stone-400 font-semibold">
          {product.category}
        </span>
        <h2
          className={`font-header font-semibold text-xl  
          leading-tight ${product.unavailable ? "text-stone-400 group-hover:text-stone-400" : "group-hover:text-secondary-text"} `}
        >
          {product.name}
        </h2>

        {product.unavailable ? (
          <span className="text-sm text-red-400 font-semibold">Sold out</span>
        ) : (
          <div className="flex items-center justify-between ">
            <span className="text-sm font-semibold text-secondary-text">
              {formatPrice(product.price)}
            </span>
          </div>
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
          <ConfettiTitle text="Shop" />
          <h2 className="text-xl font-semibold mt-4">Prints and Posters</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-6xl">
          {STORE_PRODUCTS.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
}
