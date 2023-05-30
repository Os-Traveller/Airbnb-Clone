import Navbar from '@/components/navbar/Navbar';
import './globals.css';
import { Nunito } from 'next/font/google';
import ClientOnly from '@/components/shared/ClientOnly';
import { ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';
import getCurrentUser from './actions/getCurrentUser';

const font = Nunito({ subsets: ['latin'] });

export const metadata = {
  title: 'Airbnb-Clone',
  description: 'Airbnb-Clone',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const currentUser = await getCurrentUser();

  return (
    <html lang='en'>
      <body className={`${font.className} bg-neutral-100`}>
        <ClientOnly>
          <section id='modal-root'></section>
          <Navbar currentUser={currentUser} />
          <Toaster />
        </ClientOnly>
        <main>{children}</main>
      </body>
    </html>
  );
}
