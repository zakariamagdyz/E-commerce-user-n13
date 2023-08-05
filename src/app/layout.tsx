import "./globals.css";

import type { Metadata } from "next";

import Fotoer from "@/components/footer";
import Navbar from "@/components/navbar";
import { interFont } from "@/utils/fonts";

// default metadata for all pages
export const metadata: Metadata = {
  title: "Store",
  description: "Store",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={interFont.variable}>
      <body className="font-sans">
        <Navbar />
        {children}
        <Fotoer />
      </body>
    </html>
  );
}
