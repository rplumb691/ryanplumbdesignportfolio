import { Archivo } from "next/font/google";
import localFont from "next/font/local";

export const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: ["400", "500", "600", "700"],
});

export const clashDisplay = localFont({
  src: [
    {
      path: "../public/Fonts/ClashDisplay-Variable.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-clash-display",
});
