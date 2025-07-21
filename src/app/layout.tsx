// app/layout.tsx
import "./globals.css";
import { Geist, Geist_Mono, Reenie_Beanie } from "next/font/google";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const reenie = Reenie_Beanie({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-reenie",
});

export const metadata = {
  title: "Dear Avril",
  description: "For you",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${reenie.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
