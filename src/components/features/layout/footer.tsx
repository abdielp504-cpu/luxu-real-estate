import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="border-t border-zinc-100 py-20 dark:border-zinc-800">
      <div className="container mx-auto px-6 flex flex-col items-center text-center">
        <Link href="/" className="text-3xl font-light tracking-[0.3em] uppercase mb-12 text-zinc-900 dark:text-zinc-50">
          Luxe<span className="font-bold">Estate</span>
        </Link>
        <p className="text-xs uppercase tracking-[0.4em] text-zinc-400 mb-12">Global Luxury Real Estate Network</p>
        <div className="flex gap-12 text-[10px] uppercase tracking-[0.2em] font-medium text-zinc-500">
          <Link href="#" className="hover:text-zinc-900 transition-colors">Instagram</Link>
          <Link href="#" className="hover:text-zinc-900 transition-colors">LinkedIn</Link>
          <Link href="#" className="hover:text-zinc-900 transition-colors">Pinterest</Link>
          <Link href="#" className="hover:text-zinc-900 transition-colors">Twitter</Link>
        </div>
        <Separator className="my-12 w-full max-w-xs bg-zinc-100 dark:bg-zinc-800" />
        <p className="text-[10px] tracking-[0.1em] text-zinc-400">© 2026 LUXE ESTATE. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
}
