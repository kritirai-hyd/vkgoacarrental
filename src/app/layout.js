import Header from "@/Components/Header/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/Components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Book a Self Drive Car Rental in Goa | VK Goa Car Rental",
  description:
    "VK Goa Car Rental offers 50+ self-drive cars across South Goa with 24/7 service, minimal paperwork, and quick WhatsApp booking. Explore Goa at your own pace!",
  keywords:
    "Goa self drive car rental, rent car in Goa, self drive cars, VK Goa Car Rental, South Goa rental, car hire Goa",
  authors: [{ name: "VK Goa Car Rental" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://vkgoacarrental.com",
    title: "Book a Self Drive Car Rental in Goa | VK Goa Car Rental",
    description:
      "VK Goa Car Rental offers 50+ self-drive cars across South Goa with 24/7 service, minimal paperwork, and quick WhatsApp booking.",
    images: [
      {
        url: "https://vkgoacarrental.com/images/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Self Drive Car Rental in Goa | VK Goa Car Rental",
    description:
      "VK Goa Car Rental offers 50+ self-drive cars across South Goa with 24/7 service, minimal paperwork, and quick WhatsApp booking.",
    images: ["https://vkgoacarrental.com/images/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Header />
      <body className={inter.className}>{children}</body>
      <Footer />
    </html>
  );
}