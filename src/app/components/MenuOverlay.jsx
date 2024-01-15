import React from 'react';
import NavLink from './NavLink';
import Link from 'next/link';
import Image from 'next/image';

const MenuOverlay = ({ links }) => {
  return (
    <ul className='flex flex-col py-4 items-center gap-4'>
      {links.map((link, index) => (
        <li key={index}>
          <Link href={link.path} target='_blank'>
          {link.comp}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
