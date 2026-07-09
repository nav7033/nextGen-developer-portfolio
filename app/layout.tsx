import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ weight: ["400", "600", "700"], subsets: ["latin"], variable: "--font-poppins" });

export const metadata: Metadata = {
  title: "Naveen Kumar | Premium Front-End Portfolio",
  description: "Crafting fast, responsive, and ultra-modern web experiences using Next.js 15, TypeScript, and Framer Motion.",
  openGraph: {
    title: "Naveen Kumar Mandal | Front-End Developer Portfolio",
    description: "High-end React & Next.js solutions with clean code interfaces.",
    type: "website",
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-background text-white selection:bg-brand-purple/30 selection:text-white">
        <div className="fixed inset-0 grid-bg pointer-events-none z-0" />
        {children}
      </body>
    </html>
  );
}