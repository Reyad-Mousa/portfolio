import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Reyad | Portfolio",
  description: "Reyad Is a Frontend Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative `}>
        <div className=" flex ">
          <div className="bg-purple-200  animate-pulse transition absolute top-[-6rem] right-0 h-[15.25rem] -z-10 w-[15.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
          <div className="bg-blue-200 absolute   top-[-6rem]  h-[15.25rem] -z-10 w-[15.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] "></div>
        </div>
        <Header />
        {children}
      </body>
    </html>
  );
}
