import './globals.css';
import LayoutWrapper from './components/layoutwrapper';
import { Chicle, Geist, Geist_Mono } from 'next/font/google';
import Navbar from './components/Navbar';
import ClientLayoutWrapper from './components/ClientLayoutWrapper';
import { UserProvider } from './Context/page';
import Profile from './Profile/page';

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
});

export const metadata = {
  title: 'Core Fitness',
  description: 'Track your goals and stay fit!',
};

export default function RootLayout({ children }){


  
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans bg-black `}
      >
         <UserProvider>
          <ClientLayoutWrapper>
            <LayoutWrapper>{children}</LayoutWrapper>
          </ClientLayoutWrapper>
          </UserProvider>
         
      </body>
    </html>
  );
}
