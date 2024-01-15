'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import './Festival.module.css'; // Import a CSS file for styles
import imageMapResize from './imageMapResizer';
import Modal from 'react-modal';


function Festival() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPin, setSelectedPin] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 640); // Adjust the breakpoint as needed
    };

    handleResize(); // Set initial screen size

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    imageMapResize();
  }, []);

  const iconStyle = (x, y) =>
    isSmallScreen
      ? {
          position: 'absolute',
          top: `${(y / 3840) * 100}%`,
          left: `${(x / 2160) * 100}%`,
          transform: 'translate(-50%, -50%)', // Center the icon on the coordinates
        }
      : {
          position: 'absolute',
          top: `${(y / 2160) * 100}%`,
          left: `${(x / 3840) * 100}%`,
          transform: 'translate(-50%, -50%)', // Center the icon on the coordinates
        };

  const iconsPositions = isSmallScreen
    ? [
      { x: 293, y: 2350, modalTitle: 'DEX', modalText: 'If you hate Raydium as much as we do, drop by in a bit, let us cook', iconSrc: '/pinIcons/dex-pin.png', buttonText: 'Coming soon' },
      { x: 1803, y: 2350, modalTitle: 'Prepaid Cards', modalText: `Your partner laughing at virtual money again? Buy her an Amazon voucher, that'll keep it quiet`, iconSrc: '/pinIcons/card-icon.png', buttonText: 'Coming soon' },
      { x: 234, y: 2020, modalTitle: 'Bonk Papers', modalText: 'Awesome Guide on How to Get to a Festival and Have a Blast', iconSrc: '/pinIcons/paper-icon.png', buttonText: 'Open', onClick: () => openPdfInNewTab('/pdf/bonkpaper.pdf')},
      { x: 1911, y: 2020, modalTitle: 'Youtube Channel', modalText: 'When was your first time with a green dildo on your favorite memecoin? What were you listening to then?', iconSrc: '/pinIcons/youtube-icon.png', buttonText: 'Open YouTube', href: 'https://www.youtube.com/@djbonksolana' },
      { x: 1954, y: 1560, modalTitle: 'Telegram Mixer', modalText: 'Mixer $DJBONK is a Telegram bot for secure, anonymous crypto transactions, enhancing user safety on the Solana blockchain', iconSrc: '/pinIcons/mixer-icon.png', buttonText: 'Open Mixer', href: 'https://t.me/djbonk_bot' },

      ]
    : [
        { x: 2527, y: 1013,  modalTitle: 'DEX', modalText: 'If you hate Raydium as much as we do, drop by in a bit, let us cook', iconSrc: '/pinIcons/dex-pin.png', buttonText: 'Coming soon' },
        { x: 1278, y: 1109, modalTitle: 'Prepaid Cards', modalText: `Your partner laughing at virtual money again? Buy her an Amazon voucher, that'll keep it quiet`, iconSrc: '/pinIcons/card-icon.png', buttonText: 'Coming soon' },
        { x: 2884, y: 1020, modalTitle: 'Bonk Papers', modalText: 'Awesome Guide on How to Get to a Festival and Have a Blast', iconSrc: '/pinIcons/paper-icon.png', buttonText: 'Open', onClick: () => openPdfInNewTab('/pdf/bonkpaper.pdf')},
        { x: 939, y: 944, modalTitle: 'Youtube Channel', modalText: 'When was your first time with a green dildo on your favorite memecoin? What were you listening to then?', iconSrc: '/pinIcons/youtube-icon.png', buttonText: 'Open YouTube', href: 'https://www.youtube.com/@djbonksolana' },
        { x: 2205, y: 1430, modalTitle: 'Telegram Mixer', modalText: 'Mixer $DJBONK is a Telegram bot for secure, anonymous crypto transactions, enhancing user safety on the Solana blockchain', iconSrc: '/pinIcons/mixer-icon.png', buttonText: 'Open Mixer', href: 'https://t.me/djbonk_bot' },

      ];

  const openModal = (pin) => {
    setSelectedPin(pin);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPin(null);
    setIsModalOpen(false);
  };

  const modalStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#EAEDF8', // Change the background color
      border: '1px solid #ccc', // Add border
      borderRadius: '8px', // Add border radius
      padding: '20px', // Add padding
      maxWidth: '400px', // Set max width
      width: '350px',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.8)',
      
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Change overlay background color and transparency
    },
  };

  const openPdfInNewTab = (pdfUrl) => {
    // Open the PDF in a new tab
    const newWindow = window.open(pdfUrl, '_blank');
  
    // Focus on the new tab (optional)
    if (newWindow) {
      newWindow.focus();
    }
  };

  return (
    <div className='w-full h-full relative '>
      {isSmallScreen ? (
        <div>
          <img useMap='#image_map' src='/images/dj-mobile-background.jpg' alt='Festival Background' width={2160} height={3840} className='' />
          <map name='image_map'>
            <area alt='' title='' href='dex' coords='293,2350' shape='circle' />
            <area alt='' title='' href='paper' coords='234,2020' shape='circle' />
            <area alt='' title='' href='youtube' coords='1885,2020' shape='circle' />
            <area alt='' title='' href='card' coords='1803,2350,4' shape='circle' />
            <area alt="" title="" href="mixer" coords="1954,1560,9" shape="circle"/>
          </map>
        </div>
      ) : (
        <div>
          <img useMap='#image_map' src='/images/dj-background-removebg.png' alt='Festival Background' width={3840} height={2160} className='' />
          <map name='image_map'>
            <area alt='dex' title='dex' href='dex' coords='2527,1013,13' shape='circle' />
            <area alt='paper' title='paper' href='paper' coords='2884,1020,8' shape='circle' />
            <area alt='youtube' title='youtube' href='youtube' coords='939,944,13' shape='circle' />
            <area alt='card' title='card' href='card' coords='1278,1109,10' shape='circle' />
            <area alt="" title="" href="mixer" coords="2205,1430" shape="circle"/>
          </map>
        </div>
      )}
      {iconsPositions.map((pos, index) => (
        <div key={index} style={iconStyle(pos.x, pos.y)} className={`cursor-pointer`} onClick={() => openModal(pos)}>
          <Image src={pos.iconSrc} alt={pos.title} className={`animate-bounce`} width={60} height={60} />
        </div>
      ))}

      {/* Modal */}
      <Modal isOpen={isModalOpen} onRequestClose={closeModal} style={modalStyles} contentLabel='Pin Modal'>
        {/* Your modal content here, using the selectedPin data */}
        <div className='flex flex-col items-center gap-2 relative'>
          <div className='mb-2 flex flex-col items-center gap-1'>
            <Image src="/images/djbonk-logo.png" alt={selectedPin?.modalTitle} width={80} height={80} title={selectedPin?.modalTitle} className='' />
            <h2 className='font-semibold text-black'>{selectedPin?.modalTitle}</h2>
          </div>
          <p className='text-black text-center' >{selectedPin?.modalText}</p>
          <a href={selectedPin?.href} target="_blank" onClick={selectedPin?.onClick} className='bg-gradient-radial  from-[#E664BE]  to-[#E66484] px-4 p-2 rounded-md cursor-pointer text-white shadow-xl hover:opacity-80' >{selectedPin?.buttonText}</a>
          <button className='absolute top-0 right-0 bg-gradient-radial   from-[#E664BE]  to-[#E66484] px-2 rounded-md cursor-pointer text-white shadow-xl hover:opacity-80' onClick={closeModal} title='Close popup'>
            X
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default Festival;
