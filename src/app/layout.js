import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Shared/Navbar";
import Footer from "./components/Shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Car Doctor Pro",
  description: "Car Repairing Workshop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="mytheme">
      <body className={inter.className}>
          <Navbar></Navbar> 
          {children}
          <Footer></Footer>
      </body>
    </html>
  );
}
