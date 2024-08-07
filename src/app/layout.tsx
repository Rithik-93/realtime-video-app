import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import NextTopLoader from 'nextjs-toploader';
import { Header } from "./header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevTinder",
  description:
    "An application to help pair programming with random devs online",
    icons:{
      icon:['/favicon.ico?v=4'],
      apple:['/apple-touch-icon.png?v=4'],
      shortcut:['/apple-touch-icon.png']
    }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
    <body className={inter.className}> 
    <NextTopLoader/>      
      <Providers>
        <Header/>
         {children}
      </Providers>        
      </body>
    </html>
  );
}
