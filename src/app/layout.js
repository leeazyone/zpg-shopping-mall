//웹페이지 상단 미리보기 표시

import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Z.P.G',
  description: '쇼핑 웹사이트',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
          <Navbar />
          <main className="flex min-h-screen flex-col mt-[80px]">
            {children}
          </main>

      </body>
    </html>
  );
}