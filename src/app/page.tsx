import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section className="rounded-3xl border border-black/10 bg-white/40 p-8 md:p-12 shadow-sm">
        <div className="text-center space-y-5">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-[color:var(--pm-forest)]">
            You&apos;re not the problem,
            <br />
            the hat was.
          </h1>

          <p className="text-neutral-700 max-w-2xl mx-auto">
            Clean, premium headwear designed with intention — and built to fit the way hats should.
          </p>

          <div className="flex justify-center gap-3">
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-2xl bg-[color:var(--pm-forest)] px-6 py-3 text-white font-medium hover:opacity-95 transition"
            >
              Shop Hats
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-2xl border border-black/10 bg-white/50 px-6 py-3 font-medium hover:bg-white/70 transition"
            >
              Our Story
            </Link>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-3 gap-4">
          {["/products/red-91.png", "/products/mallard.png", "/products/moose.png"].map((src) => (
            <div
              key={src}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-black/10 bg-white/50"
            >
              <Image src={src} alt="Peanut Melon hat" fill className="object-contain p-3" />
            </div>
          ))}
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-4">
        {[
          { title: "Simple designs", body: "Nothing loud. Just right." },
          { title: "Quality details", body: "Rope, embroidery, and fit done clean." },
          { title: "Drop-ready", body: "Built for limited runs and new colorways." },
        ].map((f) => (
          <div key={f.title} className="rounded-2xl border border-black/10 bg-white/40 p-6">
            <h3 className="font-semibold text-lg">{f.title}</h3>
            <p className="text-neutral-700 mt-2">{f.body}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
