import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Layout from "@/components/layout/Layout";
import '@/styles/animations.css';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Excellent J&C Autos | Buying, Selling, Auto Loans & Spare Parts",
  description:
    "Excellent J&C Autos offers quality vehicles, auto loans, spare parts, and trusted buying and selling services.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`} >
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
