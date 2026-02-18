import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

import { archivo, clashDisplay } from "@/lib/fonts";
import { Navbar } from "@/components/ui/navbar";

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
        <Navbar />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
