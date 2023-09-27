import "./globals.css";

import type { Metadata } from "next";

import Fotoer from "@/components/footer";
import Navbar from "@/components/navbar";
import { PreviewProvider } from "@/contexts/preview-context";
import ModalProvider from "@/providers/modal-provider";
import { ToastProvider } from "@/providers/toast-provider";
import { urbanistFont } from "@/utils/fonts";

// default metadata for all pages

export const metadata: Metadata = {
  title: "Zakaria's Store",
  description: "the best store in the world for selling stuff",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "manifest", url: "/site.webmanifest" },
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#5bbad5" },
      { rel: "shortcut icon", url: "/favicon.ico" },
    ],
  },
  themeColor: "#ffffff",
  colorScheme: "light",
  openGraph: {
    url: "https://e-commerce-user-n13.vercel.app/",
    title: "Zakaria's Store",
    description: "the best store in the world for selling stuff",
    images: ["/social.webp"],
    type: "website",
    siteName: "Zakaria's Store",
  },
  twitter: {
    card: "summary_large_image",
    site: "https://e-commerce-user-n13.vercel.app/",
    creator: "@zakariamagdy",
    title: "Zakaria's Store",
    description: "the best store in the world for selling stuff",
    images: ["/social.webp"],
  },
  other: {
    "msapplication-TileColor": "#da532c",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={urbanistFont.variable}>
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
