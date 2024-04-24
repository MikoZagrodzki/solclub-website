'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import './Festival.module.css'; // Import a CSS file for styles
import imageMapResize from './imageMapResizer';
import Modal from 'react-modal';
import Link from 'next/link';
import neonColor from '../../styles/neon.module.css';
import speakerAnimation from '../../styles/speakerAnimation.module.css';
import iconsAnimation from '../../styles/iconsAnimation.module.css';
import gradientBg from '../../styles/gradientBg.module.css';
import calculateWidth from './calculateWidth';
import CardPay from './CardPay';
import hideScroll from '../../styles/hideScrollingBar.module.css'
import fontStyles from '../../styles/fonts.css'
import { BOT_LINK } from '@/links';

function Festival() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPin, setSelectedPin] = useState(null);

  const [hoveredIndex, setHoveredIndex] = useState(null); // State to track currently hovered icon index

  const [widowSize, setWindowSize] = useState(null);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  const [isFaqModalOpen, setIsFaqModalOpen] = useState(false);
  const [isFaqHovered, setIsFaqHovered] = useState(false);

  const [isCardModalOpen, setIsCardModalOpen] = useState(false);

  const audioRef = useRef(null);

  const toggleMusic = () => {
    setIsMusicPlaying(!isMusicPlaying);
    if (!isMusicPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  //THIS CHANGES BACKGROUND TO DIFFERENT IMAGE ON SMALL SCREEN
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 640); // Adjust the breakpoint as needed
      setWindowSize(window.innerWidth);
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
  const iconStyle = (x, y) => ({
    position: 'absolute',
    top: `${(y / 720) * 100}%`,
    left: `${(x / 1080) * 100}%`,
    transform: 'translate(-50%, -50%)', // Center the icon on the coordinates
  });

  //HERE YOU CAN ADD MORE MAP POINTS TO THE IMAGE
  const iconsPositions = [
    {
      x: 380,
      y: 415,
      modalTitle: 'bot',
      modalSvgSrc: '/modalContent/base-bot.svg',
      iconSrcActive: '/pinIcons/base-bot-active.svg',
      iconSrc: '/pinIcons/base-bot.svg',
      class: '',
      modalHref: BOT_LINK,
    },
    {
      x: 630,
      y: 325,
      modalTitle: 'cards',
      modalSvgSrc: '/modalContent/base-cards.svg',
      iconSrcActive: '/pinIcons/base-cards-active.svg',
      iconSrc: '/pinIcons/base-cards.svg',
      class: '',
    },
    {
      x: 260,
      y: 400,
      modalTitle: 'lottery',
      modalSvgSrc: '/modalContent/base-lottery.svg',
      iconSrcActive: '/pinIcons/base-lottery-active.svg',
      iconSrc: '/pinIcons/base-lottery.svg',
      class: '',
    },
    {
      x: 501,
      y: 385,
      modalTitle: 'nft',
      modalSvgSrc: '/modalContent/base-nft.svg',
      iconSrcActive: '/pinIcons/base-nft-active.svg',
      iconSrc: '/pinIcons/base-nft.svg',
      class: 'z-0',
    },
    {
      x: 500,
      y: 600,
      modalTitle: 'buy',
      modalSvgSrc: '/modalContent/base-buy.svg',
      iconSrcActive: '/pinIcons/base-buy-active.svg',
      iconSrc: '/pinIcons/base-buy.svg',
      class: 'z-40',
    },
    {
      x: 950,
      y: 350,
      modalTitle: 'paper',
      modalSvgSrc: '/modalContent/base-paper.svg',
      iconSrcActive: '/pinIcons/base-paper-active.svg',
      iconSrc: '/pinIcons/base-paper.svg',
      class: '',
    },
    {
      x: 1000,
      y: 500,
      modalTitle: 'lapDance',
      modalSvgSrc: '/modalContent/base-lapDance.svg',
      iconSrcActive: '/pinIcons/base-dance-active.svg',
      iconSrc: '/pinIcons/base-dance.svg',
      class: '',
    },
    {
      x: 385,
      y: 605,
      modalTitle: 'manByBar',
      modalSvgSrc: '',
      iconSrcActive: '/pinIcons/base-manByBar.svg',
      iconSrc: '/pinIcons/base-manByBar.svg',
      class: '',
    },
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

  const openCardModal = () => {
    setIsCardModalOpen(true);
  };

  const closeCardModal = () => {
    setIsCardModalOpen(false);
  };

  //\\\\\\OPEN CARD MODAL ON /URL
  useEffect(() => {
    // Check if window is defined (to ensure it's running in the client-side context)
    if (typeof window !== 'undefined' && window.location.hash === '#BASECLUB-CARD') {
      // Run this code once when the component mounts
      openPopupOrModal();
    }
  }, []); // Empty dependency array ensures this effect runs only once

  const openPopupOrModal = () => {
    // Implement your logic to open the popup/modal here
    // For example, set state to open the popup
    setIsCardModalOpen(true);
  };
    //\\\\\\END OF OPEN CARD MODAL ON /URL


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

  const modalFaqStyles = {
    content: {
      backgroundColor: 'transparent',
      border: 'none',
      // maxWidth: '600px',
      minHeight: '100vh',
      width: '100%',
      overflow: 'hidden',
    },
    overlay: {
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
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

  //\\\\\\\\\\\\\LADIES RANDOM BLINK ANIMATION\\\\\\\\\\\\\
  const getRandomDelayFactor = () => Math.random();

  const [isSrcActive, setIsSrcActive] = useState({});
  const [randomDelays, setRandomDelays] = useState({});

  useEffect(() => {
    // Calculate random delays for each image
    const delays = {};
    iconsPositions.forEach((_, index) => {
      delays[index] = Math.random() * 20000 + 5000; // Adjust the maximum delay time (in milliseconds) as needed and add a base delay of 5000 ms
    });
    setRandomDelays(delays);

    // Set up intervals with random delays
    const intervals = iconsPositions.map((_, index) =>
      setInterval(() => {
        // Toggle the state for the current image index twice to create flicker effect
        setIsSrcActive((prev) => ({ ...prev, [index]: !prev[index] }));
        setTimeout(() => {
          setIsSrcActive((prev) => ({ ...prev, [index]: !prev[index] }));
        }, 300); // Adjust the duration of each flicker as needed (300ms for example)
      }, delays[index])
    );

    return () => {
      // Clean up intervals on component unmount
      intervals.forEach((interval) => clearInterval(interval));
    };
  }, []); // Empty dependency array to run effect only once
  //\\\\\\\\\\\\\END OF LADIES RANDOM BLINK ANIMATION\\\\\\\\\\\\\


  return (
    <div className='w-full h-full relative'>
      <div className='flex justify-center container '>
        <img useMap='#image_map' src='/images/base-bg-svg.svg' alt='base Background' width={1080} height={720} className='' />
        <map name='image_map'>
          {/* <area alt='bot' title='bot' href='bot' coords='380,415' shape='circle' />
          <area alt='buy' title='buy' href='buy' coords='500,600' shape='circle' />
          <area alt='cards' title='cards' href='cards' coords='630,325' shape='circle' />
          <area alt='lapDance' title='lapDance' href='lapDance' coords='1000,500' shape='circle' />
          <area alt='lottery' title='lottery' href='lottery' coords='260,400' shape='circle' />
          <area alt='nft' title='nft' href='nft' coords='501,385' shape='circle' />
          <area alt='paper' title='paper' href='paper' coords='950,350' shape='circle' /> */}
        </map>
      </div>
      {iconsPositions.map((pos, index) => (
        <div
          key={index}
          style={iconStyle(pos.x, pos.y)}
          className={`${pos.modalTitle === 'manByBar'?'':'cursor-pointer'}`}
          onClick={
            pos.modalTitle === 'manByBar'
              ? null
              : pos.modalTitle === 'cards'
                ? () => {
                    openCardModal();
                  }
                : () => {
                    openModal(pos);
                  }
          }
          onMouseEnter={pos.modalTitle !== 'manByBar' ? () => setHoveredIndex(index) : null}
          onMouseLeave={pos.modalTitle !== 'manByBar' ? () => setHoveredIndex(null) : null}
        >
          <Image
            key={index}
            src={hoveredIndex === index ? pos.iconSrcActive : isSrcActive[index] ? pos.iconSrcActive : pos.iconSrc}
            alt={pos?.modalTitle}
            className={`${pos.modalTitle !== 'manByBar' ? iconsAnimation.jumpAnimation : ''} `}
            style={{ '--delay-factor': getRandomDelayFactor() }}
            width={calculateWidth(pos.modalTitle, widowSize)}
            height={calculateWidth(pos.modalTitle, widowSize)}
            // style={{ height: 'auto' }} // Example inline styles
          />
        </div>
      ))}

      {/* Modal */}
      <Modal isOpen={isModalOpen} onRequestClose={closeModal} style={modalStyles} contentLabel='Pin Modal' className=''>
        <div className='container flex flex-col items-center gap-2 relative'>
          <Image src={selectedPin?.modalSvgSrc} alt={selectedPin?.modalTitle} width={600} height={300} title={selectedPin?.modalTitle} className='' />
          {selectedPin?.modalTitle === 'paper' && (
            <button
              onClick={() => openPdfInNewTab('/pdf/base-paper-pdf.pdf')}
              className={`cursor-pointer flex flex-col items-center absolute ${isSmallScreen ? 'bottom-8' : 'bottom-20'} left-50 z-10`}
            >
              <Image src={'/modalContent/base-paper-pdf.svg'} alt={selectedPin?.modalTitle} width={80} height={80} className={`  hover:scale-105 hover:brightness-125`} />
            </button>
          )}
          {selectedPin?.modalTitle === 'bot' && (
            <Link
            href={selectedPin?.modalHref} 
            target='_blank'
            className={`cursor-pointer flex flex-col items-center absolute ${isSmallScreen ? 'bottom-6' : 'bottom-12'} left-50 z-10`}
          >
            <Image src={'/icons/base-open-bot-Icon.svg'} alt={selectedPin?.modalTitle} width={isSmallScreen?40:80} height={isSmallScreen?40:80} className={`hover:scale-105 hover:brightness-125`} />
          </Link>
          )}
          <button
            className='absolute top-0 right-0 bg-[#379FFF] px-2 rounded-full cursor-pointer text-white shadow-xl hover:filter hover:brightness-125'
            onClick={closeModal}
            title='Close popup'
          >
            X
          </button>
        </div>
      </Modal>

      <div className='fixed bottom-0 left-0 w-32'>
        {/* PNG Image */}
        <img
          src='/icons/base-speaker.svg'
          alt='PNG Image'
          onClick={toggleMusic}
          className={`${speakerAnimation.pngImage} ${isMusicPlaying ? speakerAnimation.jumpingMore : speakerAnimation.jumpingLess}  `}
          width={70}
          height={70}
        />

        {/* Audio Player */}
        <audio ref={audioRef} loop preload>
          <source src='audio/shakeshake-song.mp4' type='audio/mp4' />
          Your browser does not support the audio element.
        </audio>
      </div>
      <button
        onClick={() => setIsFaqModalOpen(true)}
        onMouseEnter={() => setIsFaqHovered(true)}
        onMouseLeave={() => setIsFaqHovered(false)}
        className='fixed bottom-2 right-2'
      >
        <Image
          src={isFaqHovered ? '/icons/base-faq-active.svg' : '/icons/base-faq.svg'}
          width={isSmallScreen ? 20 : 45}
          height={isSmallScreen ? 20 : 45}
          className={` hover:scale-105 cursor-pointer ${isSmallScreen ? 'w-20' : 'w-32'}`}
        />
      </button>
      {/* FAQ MODAL */}
      <Modal
        isOpen={isFaqModalOpen}
        onRequestClose={() => setIsFaqModalOpen(false)}
        contentLabel='faq'
        className={`flex flex-col items-center w-screen h-screen min-h-screen overflow-auto ${gradientBg.gradientBackground} ${hideScroll.hideScrollbar}`}
      >
        <div className=' relative  mt-28 flex flex-col items-center gap-2 h-screen min-h-screen z-10'>
          <div className={` w-11/12 flex flex-col items-center gap-10 pb-10`}>
          <Image src={isSmallScreen?'/modalContent/base-faq-small.svg':'/modalContent/base-faq.svg'} alt={'faq'} width={600} height={300} className='py-10' />
          {/* <Link className='w-10/12' href={''} target='_blank' > 
            <img src={'/modalContent/shake-kycCard-faq-lastBit.svg'} alt={'faq'}  className='w-full' />
          </Link> */}
          <Image src={'/modalContent/base-faq-chart.svg'} alt={'faq'} width={600} height={300} className='py-10' />
          </div>
          <button
            className={`absolute top-0 right-4 bg-[#379FFF] px-2 rounded-full cursor-pointer text-white shadow-xl hover:filter hover:brightness-125 z-40`}
            onClick={() => setIsFaqModalOpen(false)}
            title='Close popup'
          >
            X
          </button>
        </div>
      </Modal>

      {/* Card Modal */}
      <Modal
        isOpen={isCardModalOpen}
        onRequestClose={closeCardModal}
        contentLabel='Card'
        className={`flex flex-col items-center w-screen min-h-screen ${gradientBg.gradientBackground} `}
      >
        <div className=' pt-28 flex flex-col items-center relative w-screen h-screen min-h-screen overflow-auto z-10'>
          <img src='/modalContent/base-kycCard-header.svg' className='w-full max-w-2xl px-4'/>
          <CardPay closeModal={closeCardModal} faqOnClick={()=>{closeCardModal(), setIsFaqModalOpen(true)}}/>
          {/* <Faq /> */}
        </div>

      </Modal>
    </div>
  );
}

export default Festival;
