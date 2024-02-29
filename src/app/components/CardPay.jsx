import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function CardPay(props) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 640); // Adjust the breakpoint as needed
    };

    handleResize(); // Set initial screen size
  }, []);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <div className='flex flex-col items-center w-full h-full min-h-screen px-2 '>
      <div className={`relative container max-w-3xl rounded-xl bg-white/30 flex flex-col items-center `}>
        <div
          className={`z-40 flex flex-col items-center absolute ${
            isSmallScreen ? 'top-[92px]' : 'top-[92px]'
          } left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${isSmallScreen ? 'w-10/12' : 'w-10/12'} bg-white`}
        >
          <img src={'/icons/shake-icon.svg'} alt='Shake logo' className={` ${isSmallScreen ? 'h-[74px]' : 'h-[72px]'} `} onLoad={handleImageLoad} />
        </div>
        {isImageLoaded && ( // Render iframe only if image is loaded
          <iframe
            src='https://checkout.zypto.com/prepaid/9z7kt6walxq599xvb7kj75lh31px7qkg21wjajpknmiijig12shyqoqapruh'
            allowTransparency='true'
            allowFullScreen='true'
            className={` flex flex-col gap-40 w-full ${isSmallScreen ? 'h-screen min-h-[1100px] ' : 'h-auto min-h-[1000px] '} rounded-xl`}
          />
        )}
        <div className='max-w-2xl'>
          <img src='/modalContent/shake-kycCard-faq.svg' className='w-full  h-auto px-4' />
          <button className='max-w-2xl px-4 py-10 h-auto'  onClick={props.faqOnClick}>
            <img src={'/modalContent/shake-kycCard-faq-lastBit.svg'} alt={'faq'} className='w-full' />
          </button>
        </div>
        <button
          className={`absolute top-4 right-4 bg-gradient-radial from-[#E664BE] to-[#E66484] px-2 rounded-md cursor-pointer text-white shadow-xl hover:filter hover:brightness-125 z-50`}
          onClick={props.closeModal}
          title='Close popup'
        >
          X
        </button>
      </div>
    </div>
  );
}
