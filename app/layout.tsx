import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { archivo, clashDisplay } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Ryan — Product Designer",
  description:
    "Designer-forward product portfolio for Ryan: intentional systems, ecommerce, and storytelling across case studies.",
  openGraph: {
    title: "Ryan — Product Designer",
    description:
      "Designer-forward product portfolio for Ryan: intentional systems, ecommerce, and storytelling across case studies.",
    url: "https://example.com",
    siteName: "Ryan Portfolio",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="bg-bg text-ink">
      <body
        className={`${archivo.variable} ${clashDisplay.variable} bg-bg text-ink antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
