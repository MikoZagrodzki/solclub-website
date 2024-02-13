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
import connectWallet from '../../../public//images/connectwallet-logo.png';



const navLinks = [
  {
    path: '',
    img: DexIcon,
    alt: 'Dex Screener',
    comp: <Image src='/icons/dex-icon.svg' width={40} height={40} baseColor='white' hoverColor='#F6E2F6' />,
  },
  {
    path: '',
    img: TelegramIcon,
    alt: 'Telegram',
    comp: <Image src='/icons/telegram-icon.svg' width={40} height={40} baseColor='white' hoverColor='#F6E2F6' />,
  },
  {
    path: '',
    img: XIcon,
    alt: 'twitter',
    comp: <Image src='/icons/x-icon.svg' width={40} height={40} baseColor='white' hoverColor='#F6E2F6' />,
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className={`fixed mx-auto top-0 left-0 right-0  z-20 ${navbarOpen&&' border-b-2 bg-black bg-opacity-30'}`}>
      <div className=' flex flex-row-reverse container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2'>
        <div className='w-1/3 flex justify-end'>
          {/* <button className=' bg-white rounded-md px-1 hover:bg-[#F9EAF9]'>
            <Image src={connectWallet} alt='Connnect Wallet' width={100} height={100} className='shadow-xl '/>
          </button> */}
        </div>
        <div className='w-1/3 flex justify-center'>
        <Link href={'/'} className='w-1/3 text-2xl md:text-5xl text-white font-semibold flex items-center justify-center gap-1'>
          <Image src='/icons/shake-icon.svg' alt='hero image' width={80} height={80} className='' />
        </Link>
        </div>
        <div className='w-1/3 mobile-menu block md:hidden'>
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className='flex items-center px-3 py-2 border rounded border-black text-black hover:text-pink-400 hover:border-pink-600'
            >
              <Bars3Icon className='h-5 w-5' />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className=' flex items-center px-3 py-2 border rounded border-black text-black  hover:text-pink-400 hover:border-pink-600'
            >
              <XMarkIcon className='h-5 w-5' />
            </button>
          )}
        </div>
        <div className='md:w-1/3 menu hidden md:block justify-start ' id='navbar'>
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
