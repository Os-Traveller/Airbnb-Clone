import Navbar from '@/components/navbar/Navbar';
import './globals.css';
import { Nunito } from 'next/font/google';
import ClientOnly from '@/components/shared/ClientOnly';
import React from 'react';

const font = Nunito({ subsets: ['latin'] });

export const metadata = {
  title: 'Airbnb-Clone',
  description: 'Airbnb-Clone',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang='en'>
      <body className={`${font.className} bg-neutral-100`}>
        <ClientOnly>
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
