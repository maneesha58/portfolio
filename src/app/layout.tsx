import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Maneesha Prasanna | AI/ML Engineer",
  description:
    "Portfolio of Maneesha Prasanna — AI/ML Engineer specializing in Deep Learning, LLMs, and Full-Stack development.",
  keywords: [
    "AI",
    "ML",
    "Deep Learning",
    "LLM",
    "Portfolio",
    "Maneesha Prasanna",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
