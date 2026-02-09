import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Energy Ingestion Engine",
  description: "Energy ingestion and analytics platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        {children}
      </body>
    </html>
  );
}
