import React, { useState } from 'react';
import NavLink from './NavLink';
import Link from 'next/link';
import Image from 'next/image';

const MenuOverlay = ({ links }) => {
  const [activeIcon, setActiveIcon] = useState(null);

  return (
    <ul className='flex flex-col py-4 items-center gap-4'>
      {links.map((link, index) => (
        <li key={index} onMouseEnter={() => setActiveIcon(index)} onMouseLeave={() => setActiveIcon(null)} >
          <Link href={link.path} target='_blank'>
            <Image src={activeIcon === index ? link.compActive : link.comp} alt={link.alt} width={50} height={50} className='hover:scale-105' />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
