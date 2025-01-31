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
      <body className="antialiased">
        <div className="flex flex-col min-h-screen max-w-6xl mx-auto px-4">
          <header className="sticky top-0 z-50 bg-white shadow">
            <div className="py-4">Header Content</div>
          </header>
          <main>{children}</main>
          <footer className="py-4 border-t">Footer Content</footer>
        </div>
      </body>
    </html>
  );
}
