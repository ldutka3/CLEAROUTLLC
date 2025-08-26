import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clear Out LLC — Junk Removal in Boulder County",
  description:
    "Fast, friendly junk removal, hauling, and moving help in Boulder County. Transparent pricing and same-week scheduling.",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Clear Out LLC — Junk Removal in Boulder County",
    description:
      "Fast, friendly junk removal, hauling, and moving help. Transparent pricing and same-week scheduling.",
    url: "https://clearout.example.com",
    siteName: "Clear Out LLC",
    locale: "en_US",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900">
        {children}
      </body>
    </html>
  );
}
