import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Contact Us</h2>

      <div className="rounded-3xl border border-black/10 bg-white/40 p-6 md:p-8">
        <p className="text-neutral-700">For orders, collabs, wholesale, or questions — reach out:</p>

        <form
          className="mt-6 grid gap-4 max-w-xl"
          action="mailto:you@example.com"
          method="post"
          encType="text/plain"
        >
          <div className="grid gap-2">
            <label className="text-sm font-medium">Name</label>
            <input
              name="name"
              className="rounded-2xl border border-black/10 bg-white/70 px-4 py-3 outline-none focus:ring-2 focus:ring-[color:var(--pm-forest)]/30"
              placeholder="Your name"
            />
          </div>

          <div className="grid gap-2">
            <label className="text-sm font-medium">Email</label>
            <input
              name="email"
              type="email"
              className="rounded-2xl border border-black/10 bg-white/70 px-4 py-3 outline-none focus:ring-2 focus:ring-[color:var(--pm-forest)]/30"
              placeholder="you@email.com"
            />
          </div>

          <div className="grid gap-2">
            <label className="text-sm font-medium">Message</label>
            <textarea
              name="message"
              rows={5}
              className="rounded-2xl border border-black/10 bg-white/70 px-4 py-3 outline-none focus:ring-2 focus:ring-[color:var(--pm-forest)]/30"
              placeholder="What can we help with?"
            />
          </div>

          <button
            type="submit"
            className="rounded-2xl bg-[color:var(--pm-forest)] text-white px-6 py-3 font-medium hover:opacity-95 transition w-fit"
          >
            Send Message
          </button>

          <p className="text-xs text-neutral-600">
            Replace <code className="px-1 rounded bg-black/5">you@example.com</code> with your real email.
          </p>

          <Link href="/products" className="text-sm text-[color:var(--pm-forest)] underline w-fit">
            Back to Products
          </Link>
        </form>
      </div>
    </div>
  );
}
