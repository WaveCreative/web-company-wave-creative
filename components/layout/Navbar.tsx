import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
  return (
    <header className="w-full ">
        
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-lg">
          Wave Creative
        </Link>
        <nav className="md:flex gap-6">
            <Link href="/">Beranda</Link>
            <Link href="/about">Tentang Kami</Link>
            <Link href="/services">Portfolio</Link>
            <Link href="/portfolio">Layanan</Link>
            <Link href="/contact">Hubungi Kami</Link>
        </nav>
      </div>
    </header>
  );
}
