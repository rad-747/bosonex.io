import type { Metadata } from 'next';
import './globals.css';
import Header from '../components/navbar'; // Adjust the path as needed
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from '../components/footer'; // Adjust the path as needed
import Carousel from '../components/grid'; // Adjust the path as needed
import CarouselComponent from '../components/grid';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
