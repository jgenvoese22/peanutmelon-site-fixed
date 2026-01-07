import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Peanut Melon",
  description: "You're not the problem, the hat was.",
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="text-sm text-neutral-700 hover:text-neutral-950 transition">
    {children}
  </Link>
);

function CartIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="opacity-80"
      aria-hidden="true"
    >
      <path d="M7 7H21L20 14H8L7 7Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path
        d="M7 7L6.6 5.6C6.4 4.9 5.8 4.4 5.1 4.4H3"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path d="M9 20C9.6 20 10 19.6 10 19C10 18.4 9.6 18 9 18C8.4 18 8 18.4 8 19C8 19.6 8.4 20 9 20Z" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M18 20C18.6 20 19 19.6 19 19C19 18.4 18.6 18 18 18C17.4 18 17 18.4 17 19C17 19.6 17.4 20 18 20Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
    </svg>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen relative">
        {/* subtle texture overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.10] mix-blend-multiply"
          style={{ backgroundImage: "url(/bg-noise.png)" }}
        />

        <header className="sticky top-0 z-50 border-b border-black/10 bg-[color:var(--pm-cream)]/80 backdrop-blur">
          <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
            <nav className="flex items-center gap-6">
              <NavLink href="/products">Products</NavLink>
              <NavLink href="/about">About Us</NavLink>
              <NavLink href="/contact">Contact Us</NavLink>
            </nav>

            <Link href="/" className="text-xl md:text-2xl font-semibold tracking-tight" aria-label="Peanut Melon home">
              <span className="italic text-[color:var(--pm-forest)]">Peanut Melon</span>
            </Link>

            <div className="w-[110px] flex justify-end items-center gap-3">
              <Link
                href="/products"
                className="text-sm rounded-full px-3 py-1 border border-black/10 hover:border-black/20 hover:bg-black/5 transition"
              >
                Shop
              </Link>
              <Link
                href="/products"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white/40 hover:bg-white/60 transition"
                aria-label="View products"
              >
                <CartIcon />
              </Link>
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-6xl px-4 py-10 relative">{children}</main>

        <footer className="border-t border-black/10 relative">
          <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-neutral-600">
            © {new Date().getFullYear()} Peanut Melon Hat Co.
          </div>
        </footer>
      </body>
    </html>
  );
}
