import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import Link from "next/link";
import { GeistSans } from "geist/font/sans";



const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"],weight:['400','700'] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="!scroll-smooth max-md:scroll-p-10 scroll-p-24  "
    >
      {/*   <head>
        <Link rel="preconnect" href="https://fonts.googleapis.com" />
        <Link rel="preconnect" href="https://fonts.gstatic.com" />
        <Link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        ></Link>
      </head> */}
      <body className={poppins.className}>
        <div className="shadow-md shadow-slate-200 sticky top-0 bg-white z-50">
          <Navbar  />
        </div>
        {children}
        <div className="text-white bg-slate-800 font-semibold">
          <footer className="max-w-[1020px] mx-auto px-10 py-16">
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}
