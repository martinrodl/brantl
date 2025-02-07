import * as React from "react";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import "./globals.css";
import Header from "@/components/layout/header";

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Brantl - Pragmatické poradenství pro moderní firmy",
  description: "Brantl poskytuje poradenství zaměřené na inovace, růst a efektivitu moderních firem.",
  openGraph: {
    title: "Brantl - Pragmatické poradenství pro moderní firmy",
    description: "Pragmatické poradenství zaměřené na pomoc moderním firmám s růstem a inovacemi.",
    url: "https://brantl.cz",
  },
};

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  return (
    <html>
      <body className={`${montserrat.className} antialiased`}>
        <Header params={params} />
        {children}
        <footer className="border-t py-4">Footer Content</footer>
      </body>
    </html>
  );
}
