import Image from "next/image";
import Link from "next/link";
import { PRODUCTS } from "@/lib/products";

export default function ProductsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Products</h2>
        <p className="text-sm text-neutral-600">Limited drops • Clean details • Built to wear</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PRODUCTS.map((p) => (
          <div key={p.id} className="rounded-3xl border border-black/10 bg-white/40 p-4 hover:shadow-sm transition">
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-black/10 bg-white/50">
              <Image src={p.image} alt={p.name} fill className="object-contain p-4" />
            </div>

            <div className="mt-4 flex items-start justify-between gap-3">
              <div>
                <div className="font-medium">{p.name}</div>
                {p.note && <div className="text-sm text-neutral-600 mt-1">{p.note}</div>}
              </div>
              <div className="font-semibold text-[color:var(--pm-forest)]">{p.price}</div>
            </div>

            <div className="mt-4 flex gap-2">
              <Link
                href="/contact"
                className="flex-1 text-center rounded-2xl bg-[color:var(--pm-forest)] text-white py-2 font-medium hover:opacity-95 transition"
              >
                Buy / Inquire
              </Link>
              <Link
                href="/contact"
                className="rounded-2xl border border-black/10 bg-white/50 px-4 py-2 font-medium hover:bg-white/70 transition"
              >
                Questions
              </Link>
            </div>
          </div>
        ))}
      </div>

      <p className="text-sm text-neutral-600">
        Replace images in <code className="px-1 rounded bg-black/5">/public/products</code> with your real photos.
      </p>
    </div>
  );
}
