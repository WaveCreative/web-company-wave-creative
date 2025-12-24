import Image from "next/image";
import type { ReactNode } from "react"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import "./globals.css"

export default function Home({
  children, 
}: {
  children: ReactNode
}) {
  return (
    <body>
      <Navbar />
      isi homepage lu di sini
      <Footer />
    </body>
  );
}
