'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import './Festival.module.css'; // Import a CSS file for styles
import imageMapResize from './imageMapResizer';
import Modal from 'react-modal';
import Link from 'next/link';
import neonColor from '../../styles/neon.module.css'


function Festival() {
  
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPin, setSelectedPin] = useState(null);

  const [hoveredIndex, setHoveredIndex] = useState(null); // State to track currently hovered icon index


  //THIS CHANGES BACKGROUND TO DIFFERENT IMAGE ON SMALL SCREEN
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

  //THIS MAKES IMAGE MAP RESPONSIVE
  useEffect(() => {
    imageMapResize();
  }, []);

  //THIS HELPS TO KEEP TRACK OF THE IMAGE MAP IN CASE OF IMAGE RESOLUTION
  const iconStyle = (x, y) =>
      ({  position: 'absolute',
          top: `${(y / 720) * 100}%`,
          left: `${(x / 1080) * 100}%`,
          transform: 'translate(-50%, -50%)', // Center the icon on the coordinates
        });

  //HERE YOU CAN ADD MORE MAP POINTS TO THE IMAGE
  const iconsPositions = [
        { x: 380, y: 415, modalSvgSrc:"/modalContent/shake-bot.svg",  iconSrcActive:"/pinIcons/shake-bot-active.svg", iconSrc: '/pinIcons/shake-bot.svg', buttonText: 'Coming soon' },
        { x: 500, y: 600, modalSvgSrc:"/modalContent/shake-buy.svg", iconSrcActive:"/pinIcons/shake-buy-active.svg", iconSrc: '/pinIcons/shake-buy.svg', buttonText: 'Coming soon' },
        { x: 630, y: 325, modalSvgSrc:"/modalContent/shake-cards.svg", iconSrcActive:"/pinIcons/shake-cards-active.svg", iconSrc: '/pinIcons/shake-cards.svg', buttonText: 'Open', onClick: () => openPdfInNewTab('/pdf/bonkpaper.pdf')},
        { x: 1000, y: 500, modalSvgSrc:"/modalContent/shake-lapDance.svg", iconSrcActive:"/pinIcons/shake-dance-active.svg", iconSrc: '/pinIcons/shake-dance.svg', buttonText: 'Open YouTube', href: 'https://www.youtube.com/@djbonksolana' },
        { x: 260, y: 400, modalSvgSrc:"/modalContent/shake-lottery.svg", iconSrcActive:"/pinIcons/shake-lottery-active.svg", iconSrc: '/pinIcons/shake-lottery.svg', buttonText: 'Open Mixer', href: 'https://t.me/djbonk_bot' },
        { x: 501, y: 385, modalSvgSrc:"/modalContent/shake-nft.svg",  iconSrcActive:"/pinIcons/shake-nft-active.svg", iconSrc: '/pinIcons/shake-nft.svg', buttonText: 'Raydium', href: 'https://raydium.io/swap/?inputCurrency=sol&outputCurrency=22wZhMtqGPqyFKefPBNM8T5T5zKjwrWfDnfGW46SU9N3&fixed=in', buttonImg: '/images/Raydium-logo.png', buttonText2: 'Jupiter', href2: 'https://jup.ag/swap/SOL-DJBONK_22wZhMtqGPqyFKefPBNM8T5T5zKjwrWfDnfGW46SU9N3', buttonImg2: '/images/Jupiter-logo.png' },
        { x: 950, y: 350, modalSvgSrc:"/modalContent/shake-paper.svg", iconSrcActive:"/pinIcons/shake-paper-active.svg", iconSrc: '/pinIcons/shake-paper.svg', buttonText: 'Raydium', href: 'https://raydium.io/swap/?inputCurrency=sol&outputCurrency=22wZhMtqGPqyFKefPBNM8T5T5zKjwrWfDnfGW46SU9N3&fixed=in', buttonImg: '/images/Raydium-logo.png', buttonText2: 'Jupiter', href2: 'https://jup.ag/swap/SOL-DJBONK_22wZhMtqGPqyFKefPBNM8T5T5zKjwrWfDnfGW46SU9N3', buttonImg2: '/images/Jupiter-logo.png' },

      ];

  //FUNCTIONS FOR THE POPUP
  const openModal = (pin) => {
    setSelectedPin(pin);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPin(null);
    setIsModalOpen(false);
  };

  //POPUP STYLES
  const modalWidth = isSmallScreen ? '300px' : '600px';

  const modalStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'transparent', // Change the background color
      border: 'none', // Add border
      maxWidth: '600px', // Set max width
      width: modalWidth, // Use the defined width here
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Change overlay background color and transparency
    },
  };

  //PDF OPEN FUNCTION
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
      <div className='flex justify-center container'>
        <img useMap='#image_map' src='/images/shake-bg-svg.svg' alt='Shake Background' width={1080} height={720} className='' />
        <map name='image_map'>
          <area alt='bot' title='bot' href='bot' coords='380,415' shape='circle' />
          <area alt='buy' title='buy' href='buy' coords='500,600' shape='circle' />
          <area alt='cards' title='cards' href='cards' coords='630,325' shape='circle' />
          <area alt='lapDance' title='lapDance' href='lapDance' coords='1000,500' shape='circle' />
          <area alt='lottery' title='lottery' href='lottery' coords='260,400' shape='circle' />
          <area alt='nft' title='nft' href='nft' coords='501,385' shape='circle' />
          <area alt='paper' title='paper' href='paper' coords='950,350' shape='circle' />
        </map>
      </div>
      {iconsPositions.map((pos, index) => (
        <div
          key={index}
          style={iconStyle(pos.x, pos.y)}
          className={`cursor-pointer`}
          onClick={() => openModal(pos)}
          onMouseEnter={() => setHoveredIndex(index)} // Update hoveredIndex on mouse enter
          onMouseLeave={() => setHoveredIndex(null)}   // Reset hoveredIndex on mouse leave
        >
          <Image
            src={hoveredIndex === index ? pos.iconSrcActive : pos.iconSrc}
            alt={pos.title}
            className={`scale-30 xs:scale-60 sm:scale-70 md:scale-100`}
            width={95}
            height={90}
          />
        </div>
      ))}

      {/* Modal */}
      <Modal isOpen={isModalOpen} onRequestClose={closeModal} style={modalStyles} contentLabel='Pin Modal' className=''>
        <div className='container flex flex-col items-center gap-2 relative'>
          <Image src={selectedPin?.modalSvgSrc} alt={selectedPin?.modalTitle} width={600} height={300} title={selectedPin?.modalTitle} className='' />
          <button
            className='absolute top-0 right-0 bg-gradient-radial   from-[#E664BE]  to-[#E66484] px-2 rounded-md cursor-pointer text-white shadow-xl hover:filter hover:brightness-125'
            onClick={closeModal}
            title='Close popup'
          >
            X
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default Festival;
