import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Brantl - Pragmatické poradenství pro moderní firmy",
  description:
    "Brantl poskytuje poradenství zaměřené na inovace, růst a efektivitu moderních firem.",
  openGraph: {
    title: "Brantl - Pragmatické poradenství pro moderní firmy",
    description:
      "Pragmatické poradenství zaměřené na pomoc moderním firmám s růstem a inovacemi.",
    url: "https://brantl.cz",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>{children}</body>
    </html>
  );
}
