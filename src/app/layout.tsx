import "./globals.css";

import type { Metadata } from "next";

import Fotoer from "@/components/footer";
import Navbar from "@/components/navbar";
import { PreviewProvider } from "@/contexts/preview-context";
import ModalProvider from "@/providers/modal-provider";
import { ToastProvider } from "@/providers/toast-provider";
import { interFont } from "@/utils/fonts";

// default metadata for all pages
export const metadata: Metadata = {
  title: "Zakaria's Store",
  description: "the best store in the world for selling stuff",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={interFont.variable}>
      <body className="font-sans">
        <PreviewProvider>
          <ToastProvider />
          <ModalProvider />
          <Navbar />
          {children}
          <Fotoer />
        </PreviewProvider>
      </body>
    </html>
  );
}
