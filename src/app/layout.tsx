import '../styles/globals.css';
import type { Metadata } from 'next';
import { Gabarito as font } from 'next/font/google';
import Header from '@/components/layout/Header';
import HeaderMobile from '@/components/layout/HeaderMobile';
import { auth } from '@/lib/auth';
import MarginWidthWrapper from '@/components/layout/MarginWidthWrapper';
import PageWrapper from '@/components/layout/PageWrapper';
import SideNav from '@/components/layout/SideNav';
import  CssBaseline  from "@nextui-org/react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { NextUiProvider } from './providers';

const inter = font({
  weight: "400",
  subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Gabriel',
  description: 'gabantesp',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    const session = await auth();
    return (
        <html lang="en" className='light'>
          {/* <Head></Head> */}
          {/* <Head>{CssBaseline.flush()}</Head> */}

          <body className={`bg-white${inter.className}`}>
              <NextUiProvider>
                <div className="flex">
                    <SideNav session={session}/>

                    <main className="flex-1">
                      <MarginWidthWrapper>
                        <Header />
                        <HeaderMobile session={session}/>
                        <PageWrapper>{children}</PageWrapper>
                      </MarginWidthWrapper>
                    </main>
                </div>
              </NextUiProvider>
          </body>
        </html>
    );
}