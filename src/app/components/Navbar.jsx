'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import NavLink from './NavLink';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import MenuOverlay from './MenuOverlay';
import Image from 'next/image';
import './navbar.css';

import DexIcon from '../../../public/dexscreener-icon.png';
import TelegramIcon from '../../../public/telegram-icon.png';
import XIcon from '../../../public/x-icon.png';

import connectWallet from '../../../public//images/connectwallet-logo.png';
import XiconComp from './svgComponents/XiconComp';
import TelegramIconComp from './svgComponents/TelegramIconComp';
import DexScreenerComp from './svgComponents/DexScreenerComp';

const navLinks = [
  {
    path: 'https://dexscreener.com/solana/4vuifb38tru1adpdghbvcz4c7hxhes1hfa2v8xjferfw',
    img: DexIcon,
    alt: 'Dex Screener',
    comp: <DexScreenerComp baseColor='white' hoverColor='#FFBECE' />,
  },
  {
    path: 'https://t.me/djbonksol',
    img: TelegramIcon,
    alt: 'Telegram',
    comp: <TelegramIconComp baseColor='white' hoverColor='#FFBECE' />,
  },
  {
    path: 'https://twitter.com/djbonksol',
    img: XIcon,
    alt: 'twitter',
    comp: <XiconComp baseColor='white' hoverColor='#FFBECE' />,
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className='fixed mx-auto top-0 left-0 right-0 bg-[#121212] bg-opacity-0 z-20'>
      <div className=' flex flex-row-reverse container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2'>
        <div className='w-1/3 flex justify-end'>
          <button className=' bg-white rounded-md px-1 hover:bg-[#FFBECE]'>
            <Image src={connectWallet} alt='Connnect Wallet' width={100} height={100} className='shadow-xl'/>
          </button>
        </div>
        <div className='w-1/3 flex justify-center'>
        <Link href={'/'} className='w-1/3 text-2xl md:text-5xl text-white font-semibold flex items-center gap-1'>
          <Image src='/images/djbonk-logo-transparent.png' alt='hero image' width={60} height={60} className='' />
        </Link>
        </div>
        <div className='w-1/3 mobile-menu block md:hidden'>
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'
            >
              <Bars3Icon className='h-5 w-5' />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className=' flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'
            >
              <XMarkIcon className='h-5 w-5' />
            </button>
          )}
        </div>
        <div className='md:w-1/3 menu hidden md:block justify-start' id='navbar'>
          <ul className='flex w-full p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.path} target='_blank' >
                  {/* <Image src={link.img} alt={link.alt} className="hover:bg-pink-100" /> */}
                  {link.comp}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
