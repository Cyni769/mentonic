
import React from "react";
import type { Metadata } from "next";
import { Rethink_Sans , Space_Mono, Figtree } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
});

const geistSans = Rethink_Sans({
  variable: "--font-rethink-sans",
  subsets: ["latin"],
});

const geistMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Mevlint",
  description: "Platform to post your creative world, promote it and make sure it gets its adaptation it deserves. Easy to collaborate and get critics for free. If not enough learn and upscale from professional media accessible with ease.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${figtree.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
