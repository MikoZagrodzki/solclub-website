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

function Festival() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPin, setSelectedPin] = useState(null);

  const [hoveredIndex, setHoveredIndex] = useState(null); // State to track currently hovered icon index

  const [widowSize, setWindowSize] = useState(null);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  const [isFaqModalOpen, setIsFaqModalOpen] = useState(false);
  const [isFaqHovered, setIsFaqHovered] = useState(false);

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
      modalSvgSrc: '/modalContent/shake-bot.svg',
      iconSrcActive: '/pinIcons/shake-bot-active.svg',
      iconSrc: '/pinIcons/shake-bot.svg',
      class: '',
    },
    {
      x: 630,
      y: 325,
      modalTitle: 'cards',
      modalSvgSrc: '/modalContent/shake-cards.svg',
      iconSrcActive: '/pinIcons/shake-cards-active.svg',
      iconSrc: '/pinIcons/shake-cards.svg',
      class: '',
    },
    {
      x: 260,
      y: 400,
      modalTitle: 'lottery',
      modalSvgSrc: '/modalContent/shake-lottery.svg',
      iconSrcActive: '/pinIcons/shake-lottery-active.svg',
      iconSrc: '/pinIcons/shake-lottery.svg',
      class: '',
    },
    {
      x: 501,
      y: 385,
      modalTitle: 'nft',
      modalSvgSrc: '/modalContent/shake-nft.svg',
      iconSrcActive: '/pinIcons/shake-nft-active.svg',
      iconSrc: '/pinIcons/shake-nft.svg',
      class: 'z-0',
    },
    {
      x: 500,
      y: 600,
      modalTitle: 'buy',
      modalSvgSrc: '/modalContent/shake-buy.svg',
      iconSrcActive: '/pinIcons/shake-buy-active.svg',
      iconSrc: '/pinIcons/shake-buy.svg',
      class: 'z-40',
    },
    {
      x: 950,
      y: 350,
      modalTitle: 'paper',
      modalSvgSrc: '/modalContent/shake-paper.svg',
      iconSrcActive: '/pinIcons/shake-paper-active.svg',
      iconSrc: '/pinIcons/shake-paper.svg',
      class: '',
    },
    {
      x: 1000,
      y: 500,
      modalTitle: 'lapDance',
      modalSvgSrc: '/modalContent/shake-lapDance.svg',
      iconSrcActive: '/pinIcons/shake-dance-active.png',
      iconSrc: '/pinIcons/shake-dance.png',
      class: '',
    },
    {
      x: 385,
      y: 605,
      modalTitle: 'manByBar',
      modalSvgSrc: '',
      iconSrcActive: '/pinIcons/shake-manByBar.svg',
      iconSrc: '/pinIcons/shake-manByBar.svg',
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

  return (
    <div className='w-full h-full relative'>
      <div className='flex justify-center container '>
        <img useMap='#image_map' src='/images/shake-bg-svg.svg' alt='Shake Background' width={1080} height={720} className='' />
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
          className={`cursor-pointer`}
          onClick={
            pos.modalTitle !== 'manByBar'
              ? () => {
                  openModal(pos);
                }
              : null
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
            width={
              pos.modalTitle === 'manByBar' || pos.modalTitle === 'lapDance'
                ? widowSize <= 480
                  ? 45
                  : widowSize <= 520
                  ? 65
                  : widowSize <= 560
                  ? 70
                  : widowSize <= 600
                  ? 73
                  : widowSize <= 640
                  ? 80
                  : widowSize <= 680
                  ? 83
                  : widowSize <= 720
                  ? 84
                  : widowSize <= 760
                  ? 85
                  : widowSize <= 768
                  ? 90
                  : widowSize <= 800
                  ? 95
                  : widowSize <= 840
                  ? 95
                  : widowSize <= 880
                  ? 95
                  : widowSize <= 920
                  ? 100
                  : widowSize <= 960
                  ? 110
                  : widowSize <= 1000
                  ? 120
                  : widowSize <= 1040
                  ? 130
                  : widowSize <= 1080
                  ? 140
                  : 150
                : widowSize <= 480
                ? 28
                : widowSize <= 520
                ? 32
                : widowSize <= 560
                ? 36
                : widowSize <= 600
                ? 40
                : widowSize <= 640
                ? 45
                : widowSize <= 680
                ? 50
                : widowSize <= 720
                ? 55
                : widowSize <= 760
                ? 60
                : widowSize <= 768
                ? 60
                : widowSize <= 800
                ? 65
                : widowSize <= 840
                ? 67
                : widowSize <= 880
                ? 70
                : widowSize <= 920
                ? 72
                : widowSize <= 960
                ? 80
                : widowSize <= 1000
                ? 90
                : widowSize <= 1040
                ? 92
                : widowSize <= 1080
                ? 94
                : 95
            }
            height={90}
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
              onClick={() => openPdfInNewTab('/pdf/shake-paper-pdf.pdf')}
              className={`cursor-pointer flex flex-col items-center absolute ${isSmallScreen ? 'bottom-8' : 'bottom-20'} left-50 z-10`}
              >
              <Image
                src={'/modalContent/shake-paper-pdf.svg'}
                width={80}
                height={80}
                className={`  hover:scale-105 hover:brightness-125`}
              />
            </button>
          )}
          <button
            className='absolute top-0 right-0 bg-gradient-radial   from-[#E664BE]  to-[#E66484] px-2 rounded-md cursor-pointer text-white shadow-xl hover:filter hover:brightness-125'
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
          src='/icons/shake-speaker.svg'
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
          src={isFaqHovered ? '/icons/shake-faq-active.svg' : '/icons/shake-faq.svg'}
          width={isSmallScreen ? 27 : 45}
          height={isSmallScreen ? 27 : 45}
          className='w-32 hover:scale-105 cursor-pointer'
        />
      </button>
      <Modal
        isOpen={isFaqModalOpen}
        onRequestClose={() => setIsFaqModalOpen(false)}
        contentLabel='faq'
        className={`flex flex-col items-center w-screen min-h-screen ${gradientBg.gradientBackground}`}
      >
        <div className='container py-28 flex flex-col items-center gap-2 relative w-screen h-screen max-h-screen overflow-auto z-10'>
          <Image src={'/modalContent/shake-faq.svg'} alt={'faq'} width={600} height={300} className='' />
          <button
            className='absolute top-32 right-52 bg-gradient-radial from-[#E664BE] to-[#E66484] px-2 rounded-md cursor-pointer text-white shadow-xl hover:filter hover:brightness-125 z-40'
            onClick={() => setIsFaqModalOpen(false)}
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
