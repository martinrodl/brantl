import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <header className="sticky top-0 z-50 bg-white shadow">Header Content</header>
        {children}
        <footer className="py-4 border-t">Footer Content</footer>
      </body>
    </html>
  );
}
