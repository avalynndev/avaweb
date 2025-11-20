import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import FallingLeaves from "@/components/fall";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "avalynndev",
    template: "%s | avalynndev",
  },
  description:
    "Personal portfolio of AvalynnDev – full-stack developer & indie creator.",
  keywords: [
    "avalynndev",
    "portfolio",
    "full stack developer",
    "indie developer",
    "next.js",
    "typescript",
    "web development",
  ],
  authors: [{ name: "avalynndev" }],
  creator: "avalynndev",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  metadataBase: new URL("https://avalynndev.vercel.app"),
  openGraph: {
    title: "avalynndev",
    description: "Personal portfolio of AvalynnDev.",
    url: "https://avalynndev.vercel.app",
    siteName: "avalynndev",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "avalynndev",
    description: "Personal portfolio of AvalynnDev.",
    creator: "@avalynndev",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <FallingLeaves />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
