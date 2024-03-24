'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import MenuOverlay from './MenuOverlay';
import Image from 'next/image';
import './navbar.css';
import DexIcon from '../../../public/dexscreener-icon.png';
import TelegramIcon from '../../../public/telegram-icon.png';
import XIcon from '../../../public/x-icon.png';
import animation from '../../styles/hamburgerMenu.module.css'



const navLinks = [
  {
    path: 'https://dexscreener.com/solana/cht7k3d6hrrfygwxhcseoxz389jdvhpnsty2cy87errl',
    img: DexIcon,
    alt: 'Dex Screener',
    comp: '/icons/dex-icon.svg',
    compActive: '/icons/dex-active-icon.svg',
  },
  {
    path: 'https://t.me/baseclubio',
    img: TelegramIcon,
    alt: 'Telegram',
    comp: '/icons/telegram-icon.svg',
    compActive: '/icons/telegram-active-icon.svg',
  },
  {
    path: 'https://twitter.com/baseclubio',
    img: XIcon,
    alt: 'twitter',
    comp: '/icons/x-icon.svg',
    compActive: '/icons/x-active-icon.svg',
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [activeIcon, setActiveIcon] = useState(null);


  return (
    <nav className={`fixed mx-auto top-0 left-0 right-0  z-20 ${navbarOpen && ' border-b-2 bg-black bg-opacity-30'}`}>
      <div className=' flex flex-row-reverse container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2'>
        <div className='w-1/3 flex justify-end'>
        <Link href={'https://t.me/baseclubio_bot'} className='w-1/3 text-2xl md:text-5xl text-white font-semibold flex items-center justify-center gap-1 hover:scale-105'>
          <Image src='/icons/base-icon.svg' alt='hero image' width={80} height={80} className='' />
        </Link>
        </div>
        <div className='w-1/3 mobile-menu block md:hidden'>
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className='flex items-center '
            >
              <img src='/icons/base-hamburgerMenu-icon.svg' className={`h-12 w-12 ${animation.iconHoverEffect}`} />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className=' flex items-center '
            >
              <img src='/icons/base-hamburgerMenu-icon.svg' className={`h-12 w-12 ${animation.iconHoverEffect}`} />
            </button>
          )}
        </div>
        <div className='md:w-1/3 menu hidden md:block justify-start ' id='navbar'>
          <ul className='flex w-full p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
            {navLinks.map((link, index) => (
              <li key={index} onMouseEnter={() => setActiveIcon(index)} onMouseLeave={() => setActiveIcon(null)}>
                <Link href={link.path} target='_blank' >
                  {/* <Image src={link.img} alt={link.alt} className="hover:bg-pink-100" /> */}
                  <Image src={activeIcon === index ? link.compActive : link.comp} alt={link.alt} width={50} height={50} className='hover:scale-105' />
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
