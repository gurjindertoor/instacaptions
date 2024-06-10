import { Inter } from "next/font/google";
import "./globals.css";
import SparklesIcon from "./components/SparklesIcon";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "InstaCaptions",
  description: "Instantly generate captions for videos.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gradient-to-b from-bg-gradient-from to-bg-gradient-to min-h-screen text-white`}
      >
        <main className="p-4 max-w-2xl mx-auto">
          <header className="flex justify-between my-8">
            <Link href="/" className="flex gap-1">
              <SparklesIcon />
              <span>InstaCaptions</span>
            </Link>
            <nav className="flex gap-6 text-white/80">
              <Link href="/">Home</Link>
              <Link href="/Pricing">Pricing</Link>
              <Link href="mailto:contact@instacaptions.com">Contact</Link>
            </nav>
          </header>
          {children}
        </main>
      </body>
    </html>
  );
}
