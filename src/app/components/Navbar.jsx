"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";

import DexIcon from '../../../public/dexscreener-icon.svg';
import TelegramIcon from "../../../public/telegram-icon.svg";
import XIcon from "../../../public/x-icon.svg";


const navLinks = [
  {
    path: 'https://dexscreener.com/solana/4vuifb38tru1adpdghbvcz4c7hxhes1hfa2v8xjferfw',
    img: DexIcon ,
    alt: 'Dex Screener',
  },
  {
    path: 'https://Telegram.org',
    img: TelegramIcon ,
    alt: 'Telegram',
  },
  {
    path: 'https://twitter.com/djbonksol',
    img:  XIcon ,
    alt: 'twitter',
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 bg-[#121212] bg-opacity-80 z-20">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold flex items-center gap-1"
        >
          <Image
              src="/images/djbonk-logo.png"
              alt="hero image"
              width={50}
              height={50}
              className="rounded-xl mr-2"
              /> DJBONK
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.path} target="_blank">
                  <Image src={link.img} alt={link.alt}/>
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
