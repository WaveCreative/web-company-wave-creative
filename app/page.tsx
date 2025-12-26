import Hero from "@/components/sections/Hero";
import Tentang from "@/components/sections/Tentang";
import Portofolio from "@/components/sections/Porto";
import Layanan from "@/components/sections/Service";
import Hubungi from "@/components/sections/Hubungi";
import "./globals.css"

export default function HomePage( ) {
  return (
    <main>
      <Hero />
      <Tentang />
      <Portofolio />
      <Layanan />
      <Hubungi />
    </main>
  );
}
