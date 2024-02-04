'use client';
import { Introduction, Experience, About, Contact } from '@/lib/landingPageUtils';
import { Divider } from '@nextui-org/divider';


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