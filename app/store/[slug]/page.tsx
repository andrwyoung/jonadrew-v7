import { notFound } from "next/navigation";
import Link from "next/link";
import { STORE_PRODUCTS } from "@/types/configs/store-config";
import { AddToCartButton } from "@/components/store/add-to-cart-button";

function formatPrice(cents: number) {
  return `$${(cents / 100).toFixed(2)}`;
}

export function generateStaticParams() {
  return STORE_PRODUCTS.map((p) => ({ slug: p.slug }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = STORE_PRODUCTS.find((p) => p.slug === slug);

  if (!product) notFound();

  return (
    <div className="flex flex-col flex-1 bg-background text-text">
      <main className="flex flex-1 flex-col items-center px-4 sm:px-8 pt-16 pb-24">
        <div className="w-full max-w-4xl">
          <Link
            href="/store"
            className="text-sm text-stone-400 hover:text-secondary-text transition-colors mb-8 inline-block"
          >
            ← Back to shop
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-4">
            {/* Image */}
            <div className="aspect-square bg-stone-100 rounded-xl overflow-hidden">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Details */}
            <div className="flex flex-col gap-4">
              <span className="text-xs uppercase tracking-wide text-stone-400 font-semibold">
                {product.category}
              </span>
              <h1 className="font-logo text-5xl text-text">{product.name}</h1>
              <p className="text-2xl font-semibold text-secondary-text">
                {formatPrice(product.price)}
              </p>
              {product.limited !== undefined && (
                <p className="text-sm text-stone-400">
                  Limited to {product.limited} copies
                </p>
              )}
              <p className="text-base text-stone-600 leading-relaxed">
                {product.description}
              </p>

              <div className="mt-4">
                {product.available ? (
                  product.externalUrl ? (
                    <a
                      href={product.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-secondary text-white font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
                    >
                      Buy Now
                    </a>
                  ) : (
                    <AddToCartButton product={product} />
                  )
                ) : (
                  <span className="inline-block bg-stone-200 text-stone-400 font-semibold px-8 py-3 rounded-lg">
                    Sold Out
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
