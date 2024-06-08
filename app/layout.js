import { Montserrat } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import Header from "@/components/Header";
import ContextProvider from "@/Context/Context";
import Footer from "@/components/Footer";
import { ProductContextProvider } from "@/Context/CreateProduct";
import { Toaster } from "react-hot-toast";
import CartProvider from "@/Context/CartProvider";
import AdminProvider from "@/Context/AdminProvider";
import sm from '../public/hero-pattern.png'

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Trident",
  description: "A store for all your needs",
  favicon: "/favicon.ico",
  appleTouchIcon: "/apple-touch-icon.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader color="#444" height={4} />
        <ContextProvider>
          <AdminProvider>
            <ProductContextProvider>
              <CartProvider>
                <Header />
                <Toaster />
                {children}
                <Footer />
              </CartProvider>
            </ProductContextProvider>
          </AdminProvider>
        </ContextProvider>
      </body>
    </html>
  );
}
