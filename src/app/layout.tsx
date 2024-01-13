import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const roboto = Roboto({
  subsets: ["latin-ext"],
  display: "swap",
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

const roboto_condensed = Roboto_Condensed({
  subsets: ["latin-ext"],
  display: "swap",
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto-condensed",
});

export const metadata: Metadata = {
  title: "Alonso Solis Gerloni | Software Developer",
  description: "Alonso Solis Gerloni's personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} font-sans ${roboto_condensed.variable} font-sans`}
      >
        <Toaster />
        {children}
      </body>
    </html>
  );
}
