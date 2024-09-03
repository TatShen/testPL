import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Footer from "@/Components/Footer/Footer/Footer";
import Header from "@/Components/Header/Header";

const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TL",
  description: "test app by Tatsiana Lapushkina",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <header className="globalHeader">
          <Header></Header>
        </header>
        <main className="globalMain">{children}</main>
        <footer className="globalFooter">
          <Footer/>
        </footer>
      </body>
    </html>
  );
}
