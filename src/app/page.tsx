'use client';
import { SocialList, Introduction, Experience, About, Contact } from '@/lib/landingPageUtils';
import { cn } from '@/lib/utils';
import { Icon } from '@iconify/react';
import { Divider } from '@nextui-org/divider';
import Link from 'next/link';


export default function Home() {
  
    return (
      <>
        <span className="font-bold text-1xl text-center">Hi there!</span>
        <Introduction/>
        <Experience/>
        <About/>
        <Divider/>
        <Contact/>
      </>
    );
  }