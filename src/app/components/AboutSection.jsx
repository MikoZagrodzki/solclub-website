'use client';
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: 'tokenomics',
    id: 'tokenomics',
    content: (
      <ul className='list-disc pl-2 space-y-1 leading-tight'>
        <p>Limited Token Supply:</p>
        <li>Experience value appreciation with our finite token supply.</li>
        <li>Secure your share of a scarce resource in the crypto space.</li>
        <p className='mt-1'>Staking and Governance:</p>
        <li>Boost network integrity by staking tokens.</li>
        <li>Participate in crucial decisions through token governance.</li>
        <p className='mt-1'>Token Burns:</p>
        <li>Enhance value through intentional token removal.</li>
        <li>Join us in creating a deflationary token economy.</li>
        <style jsx>{`
        
        ul.list-disc {
          list-style-type: none;
          padding-left: 1.5em;
        }

        ul.list-disc li::before {
          content: '•'; /* Unicode character for bullet point */
          color: red; /* Change the color to your desired color */
          display: inline-block;
          width: 1em;
          margin-left: -1.5em;
          margin-left: 1px
        }
        
      `}</style>
      </ul>
    ),
  },
  {
    title: 'contract',
    id: 'contract',
    content: (
      <ul className='list-disc pl-2'>
        <li className='break-all '>22wZhMtqGPqyFKefPBNM8T5T5zKjwrWfDnfGW46SU9N3</li>
        <style jsx>{`
        
        ul.list-disc {
          list-style-type: none;
          padding-left: 1.5em;
        }

        ul.list-disc li::before {
          content: '•'; /* Unicode character for bullet point */
          color: red; /* Change the color to your desired color */
          display: inline-block;
          width: 1em;
          margin-left: -1.5em;
        }

      `}</style>
      </ul>
      
    ),
  },
  // {
  //   title: 'tab3',
  //   id: 'tab3',
  //   content: (
  //     <ul className='list-disc pl-2'>
  //       <li>ELEMENT</li>
  //       <li>ELEMENT</li>
  //     </ul>
  //   ),
  // },
];

const AboutSection = () => {
  const [tab, setTab] = useState('tokenomics');
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className='relative z-10' id='about'>
      <div className='video-background top-0 left-0 w-full h-full'>
        <video autoPlay loop muted playsInline className='w-full h-full object-cover'>
          <source src='/videos/ADHD1-video.mp4' type='video/mp4' />
        </video>
      </div>
      <div className=' absolutez-20  gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 text-white'>
        {/* <Image src="/images/about-image.png" width={500} height={500} /> */}
        <div className='mt-4 md:mt-0 md:justify-around md:w-full text-left flex flex-col md:flex-row  h-full'>
          <div className='md:flex md:flex-col md:w-1/3'>
            <h2 className='text-4xl font-bold text-white mb-4  bg-black bg-opacity-30'>AGENDA</h2>
            <p className='text-base lg:text-lg bg-black bg-opacity-30 '>
              Welcome to the heart of our ADHD memecoin movement! Were not just a cryptocurrency; we&apos;re a community redefining the conversation
              around ADHD with humor and purpose. Our mission is to break stigmas, empower voices, and build a space where every meme contributes to a
              more inclusive and supportive future. Join us in rewriting the narrative around ADHD - this isn&apos;t just about coins; it&apos;s about
              a revolution fueled by laughter and unity. Welcome to the forefront of change!
            </p>
          </div>
          <div className='md:flex md:flex-col md:w-1/3'>
            <div className='flex flex-row justify-start mt-8'>
              <TabButton selectTab={() => handleTabChange('tokenomics')} active={tab === 'tokenomics'}>
                {' '}
                Tokenomics{' '}
              </TabButton>
              <TabButton selectTab={() => handleTabChange('contract')} active={tab === 'contract'}>
                {' '}
                Contract{' '}
              </TabButton>
              {/* <TabButton selectTab={() => handleTabChange('tab3')} active={tab === 'tab3'}>
                {' '}
                Tab 3{' '}
              </TabButton> */}
            </div>
            <div className='mt-8  bg-black bg-opacity-30'>{TAB_DATA.find((t) => t.id === tab).content}</div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .video-background {
          position: absolute;
          overflow: hidden;
          z-index: -1;
        }

        video {
          width: 100%;
          height: 100%;
        }

        .custom-list-item {
          color: red; /* Change the color to your desired color */
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
