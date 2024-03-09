import React from 'react';
import './ui/global.css';
import { roboto } from '@/app/ui/fonts';

import { NavMenu } from './components/NavMenu';
import { FooterWithSocialLinks as Footer } from './components/Footer';


export default function RootLayout({
   children,
}: {
    children: React.ReactNode;
}) {
  return (
      <html lang="en">
          <body className={`${roboto.className} antialiased`}>
              <NavMenu/>
                  <div className="flex justify-center">
                      <div className="container">
                          {children}
                      </div>
                  </div>
              <Footer/>
          </body>
      </html>
  );

}
