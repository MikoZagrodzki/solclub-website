"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import DexIcon from '../../../public/dexscreener-icon.svg';
import TelegramIcon from "../../../public/telegram-icon.svg";
import XIcon from "../../../public/x-icon.svg";
import '../globals.css'; 

const HeroSection = () => {

  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async () => {
    const contractAddress = "Token Contract Address";
    try {
      await navigator.clipboard.writeText(contractAddress);
      setIsCopied(true);
    } catch (err) {
      console.error('Failed to copy to clipboard:', err);
    }
  };

  useEffect(() => {
    let timeout;
    if (isCopied) {
      timeout = setTimeout(() => setIsCopied(false), 2000);
    }

    return () => clearTimeout(timeout);
  }, [isCopied]);

  return (
    <section className='lg:py-16'>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='col-span-8 place-self-center text-center sm:text-left justify-self-start'
        >
          <h1 className=' text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600'>Hello, I&apos;m </span>
            <br></br>
            <TypeAnimation
              sequence={['ADHD', 3000, 'Your Future Coin', 1000, 'The One And Only', 1000, 'Your Inner Voice', 1000]}
              wrapper='span'
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
            Dive into our ADHD memecoin madness - where humor meets crypto and the revolution begins with you!
          </p>
          <div>
            <button
              // href='#contract'
              className='px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white'
              onClick={copyToClipboard}
            >
              Copy Contract
            </button>
            {isCopied && (
              <div className="fixed inset-0 flex items-center justify-center">
                <div className="bg-primary-600 p-6 rounded-full shadow-md border-2 border-white">
                  <p className="text-white font-bold">Contract Address has been copied!</p>
                </div>
              </div>
            )}
            <Link
              href='https://DexScreener.com' 
              target='_blank'
              className='px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3'
            >
              <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Check Out The Chart</span>
            </Link>
            <div className="flex gap-4 mt-4 justify-center sm:justify-start">
              <Link href='https://DexScreener.com' target='_blank'>
                <Image src={DexIcon} alt='Github Icon' />
              </Link>
              <Link href='https://Telegram.org' target='_blank'>
                <Image src={TelegramIcon} alt='Linkedin Icon' />
              </Link>
              <Link href='https://twitter.com' target='_blank'>
                <Image src={XIcon} alt='Linkedin Icon' />
              </Link>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='col-span-4 place-self-center mt-4 lg:mt-0'
        >
          <div className='rounded-full bg-[#000000] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
            <Image
              src='/images/hero-image.png'
              alt='hero image'
              className='rounded-3xl absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
