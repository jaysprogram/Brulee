import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {Provider} from 'react-redux';
import {store} from './cart';
import ClientProvider from "./index";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Brulee Jewelry",
  description: "Description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ClientProvider>
          {children}
        </ClientProvider>
        </body>
    </html>
  );
}
