"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import './Festival.module.css'; // Import a CSS file for styles
import imageMapResize from './imageMapResizer'
import pinIcon from '../../../public/pin-location-icon.svg'
import Modal from 'react-modal';
import djBonkLogo from'../../../public/images/djbonk-logo.png'


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
            { x: 1067, y: 1070, modalTitle: 'YOOOOO', modalText: 'YOOOOO' },
            { x: 246, y: 2201, modalTitle: 'YOOOOO', modalText: 'YOOOOO'  },
            { x: 1583, y: 3304, modalTitle: 'YOOOOO', modalText: 'YOOOOO'  },
            { x: 293, y: 2528, modalTitle: 'YOOOOO', modalText: 'YOOOOO'  },
            { x: 1807, y: 2507, modalTitle: 'YOOOOO', modalText: 'YOOOOO'  },
            { x: 1741, y: 2066, modalTitle: 'YOOOOO', modalText: 'YOOOOO'  },
            { x: 1069, y: 3138, modalTitle: 'YOOOOO', modalText: 'YOOOOO'  },
          ]
        : [
            { x: 1871, y: 301, modalTitle: 'YOOOOO', modalText: 'YOOOOO'  },
            { x: 1043, y: 673, modalTitle: 'YOOOOO', modalText: 'YOOOOO'  },
            { x: 1430, y: 1549, modalTitle: 'YOOOOO', modalText: 'YOOOOO'  },
            { x: 2911, y: 560, modalTitle: 'YOOOOO', modalText: 'YOOOOO'  },
            { x: 1949, y: 1403, modalTitle: 'YOOOOO', modalText: 'YOOOOO'  },
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
              backgroundColor: '#fff', // Change the background color
              border: '1px solid #ccc', // Add border
              borderRadius: '8px', // Add border radius
              padding: '20px', // Add padding
              maxWidth: '400px', // Set max width
            },
            overlay: {
              backgroundColor: 'rgba(0, 0, 0, 0.5)', // Change overlay background color and transparency
            },
          };

      return (
        <div className='w-full h-full relative shadow-xl'>
          {isSmallScreen ? (
            <div>
              <img useMap='#image_map' src='/images/dj-mobile-background.jpg' alt='Festival Background' width={2160} height={3840} className='' />
              <map name='image_map'>
                <area alt='scena' title='scena' href='scena' coords='1067,1070,190' shape='circle' />
                <area alt='stand po lewej' title='stand po lewej' href='stand po lewej' coords='246,2201,139' shape='circle' />
                <area alt='solana' title='solana' href='solana' coords='1583,3304,93' shape='circle' />
                <area alt='drugi po lewej' title='drugi po lewej' href='drugi po lewej' coords='293,2528,134' shape='circle' />
                <area alt='stand po prawej' title='stand po prawej' href='stand po prawej' coords='1807,2507,155' shape='circle' />
                <area
                  alt='jeszcze jeden po prawej'
                  title='jeszcze jeden po prawej'
                  href='jeszcze jeden po prawej'
                  coords='1741,2066,103'
                  shape='circle'
                />
                <area alt='dzwiekowcy' title='dzwiekowcy' href='dzwiekowcy' coords='1069,3138,159' shape='circle' />
              </map>
            </div>
          ) : (
            <div>
              <img useMap='#image_map' src='/images/dj-background.jpg' alt='Festival Background' width={3840} height={2160} className='' />
              <map name='image_map'>
                <area alt='scena' title='scena' href='scena' coords='1871,301,190' shape='circle' />
                <area alt='stand po lewej' title='stand po lewej' href='stand po lewej' coords='1043,673,139' shape='circle' />
                <area alt='solana' title='solana' href='solana' coords='1430,1549,101' shape='circle' />
                <area alt='pies po prawej' title='pies po prawej' href='pies po prawej' coords='2911,560,91' shape='circle' />
                <area alt='token obok solany' title='token obok solany' href='token obok solany' coords='1949,1403,89' shape='circle' />
              </map>
            </div>
          )}
          {iconsPositions.map((pos, index) => (
            <div key={index} style={iconStyle(pos.x, pos.y)} className={`cursor-pointer `} onClick={() => openModal(pos)}>
              <Image src={pinIcon} alt='Linkedin Icon' className={`animate-bounce`} />
            </div>
          ))}

          {/* Modal */}
          <Modal isOpen={isModalOpen} onRequestClose={closeModal} style={modalStyles} contentLabel='Pin Modal'>
            {/* Your modal content here, using the selectedPin data */}
            <div className='flex flex-col items-center gap-2'>
              <div className='mb-2 flex flex-col items-center gap-1'>
                <Image src={djBonkLogo} width={100} className='' />
                <h2 className=''>{selectedPin?.modalTitle}</h2>
              </div>
              <p>{selectedPin?.modalText}</p>
              <button className='bg-gradient-radial  from-[#ef4136]  to-[#da6e6e] px-2 rounded-md cursor-pointer' onClick={closeModal}>
                Close
              </button>
            </div>
          </Modal>
        </div>
      );
    }

export default Festival;

