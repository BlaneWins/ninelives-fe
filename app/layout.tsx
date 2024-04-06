'use client';

import React from 'react';
import { ThemeProvider } from "@material-tailwind/react";
import './ui/global.css';
import { roboto } from '@/app/ui/fonts';
import { gabriela } from '@/app/ui/fonts';


import { NavMenu } from './components/NavMenu';
import { FooterWithSocialLinks as Footer } from './components/Footer';

export default function RootLayout({
   children,
}: {
    children: React.ReactNode;
}) {

  const customTheme = {
    progress: {
      defaultProps: {
        color: "primary",
      },
      valid: {
        colors: [
          "primary",
        ],
      },
      styles: {
        variants: {
          filled: {
            "primary": {
              background: "bg-primary",
              color: "text-white",
            },
          },
        },
      },
    },
  };


  return (
    <ThemeProvider value={customTheme}>
      <html lang="en">
          <body className={`${roboto.className} antialiased`}>
              <NavMenu font={gabriela.className}/>
                  <div className="flex justify-center">
                      <div className="container">
                          {children}
                      </div>
                  </div>
              <Footer/>
          </body>
      </html>
    </ThemeProvider>
  );

}
