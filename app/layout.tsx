import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://hematology-ehc.com"),
  title: "Hematology & Hemostasis Conference 2026",
  description: "The Second International Hematology and Hemostasis Conference, 3–5 May 2026 in Saudi Arabia.",
  openGraph: {
    title: "Second International Hematology & Hemostasis Conference",
    description: "3–5 May 2026 • Eastern Province, Saudi Arabia",
    images: [{ url: "/media/conference-preview.webp", width: 1920, height: 1080 }],
  },
  twitter: { card: "summary_large_image", images: ["/media/conference-preview.webp"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={geist.variable}>{children}</body></html>;
}
