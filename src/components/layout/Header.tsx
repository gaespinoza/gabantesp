'use client';

import React from 'react';

import Link from 'next/link';

import useScroll from '../../lib/hooks/useScroll';
import { cn } from '../../lib/utils';
import { Head } from './Head';
import { Icon } from '@iconify/react';


const Header = () => {
  const scrolled = useScroll(5);


  return (
    <div
      className={cn(
        ` z-40 sticky inset-x-0 top-0 w-full transition-all border-b border-gray-200`,
        {
          'border-b border-gray-200 bg-white/75 backdrop-blur-lg': scrolled,
          'border-b border-gray-200 bg-white': false,
        },
        `bg-gradient-to-l from-[#b2e1ea]`// from-0% via-sky-500 via-50% to-[#e7d474] to-100%`
      )}
    >
      <div className="flex h-[47px] items-center justify-between px-4  z-40">
        <div className="flex items-center space-x-4">
          <Link
            href="/"
            className="flex flex-row space-x-3 items-center justify-center md:hidden"
            
          >
            <Head/>
            <span className="font-bold text-xl flex ">Gabriel</span>
          </Link>
        </div>
        

        <div className="hidden md:block">
          <div className="h-8 w-8 rounded-full bg-zinc-300 flex items-center justify-center text-center">
          <Icon icon="lucide:smile" width="24" height="24" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;