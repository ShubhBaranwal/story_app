import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.secretflames.app"), // Placeholder URL
  title: "Secret Flames - Unlock the Heat Now",
  description:
    "Hot, Intense and Unstoppable Stories – sirf तुम्हारे लिए. Apni sabse garm fantasies ko chhune ka samay aa gaya hai...",
  openGraph: {
    type: "website",
    siteName: "Secret Flames",
    title: "Secret Flames - Unlock the Heat Now",
    description: "Hot, Intense and Unstoppable Stories – sirf तुम्हारे लिए.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hi" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white min-h-screen`}
        suppressHydrationWarning
      >
        {/* Navbar, Header, Footer REMOVED for Landing Page */}
        {children}
        {/* Analytics kept as requested (or could be removed if 100% private really means no analytics, but usually apps track installs) */}
        {/* <Analytics /> */}
      </body>
    </html>
  );
}
