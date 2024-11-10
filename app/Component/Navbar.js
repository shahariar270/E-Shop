"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { IoCartOutline } from 'react-icons/io5';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

export default function Navbar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <div className='flex w-[90%] justify-between items-center text-center m-auto py-4'>
      {/* Logo Section */}
      <div className='flex-shrink-0'>
        <Image
          src='/logo.png'
          alt='logo here'
          width={120}
          height={80}
          className='cursor-pointer'
        />
      </div>

      {/* Desktop Navbar Links */}
      <nav className='hidden md:flex'>
        <ul className='flex space-x-4'>
          <li className='p-2 text-lg md:text-xl'>
            <Link href='/'>Home</Link>
          </li>
          <li className='p-2 text-lg md:text-xl'>
            <Link href='/contact'>Contact</Link>
          </li>
          <li className='p-2 text-lg md:text-xl'>
            <Link href='/about'>About</Link>
          </li>
          <li className='p-2 text-lg md:text-xl'>
            <Link href='/signup'>Signup</Link>
          </li>
        </ul>
      </nav>

      {/* Icons Section */}
      <div className='flex space-x-4'>
        <Link href='/cart'>
          <IoCartOutline className='h-6 w-6 md:h-8 md:w-8' />
        </Link>
        <Link href='/wishlist'>
          <AiOutlineHeart className='h-6 w-6 md:h-8 md:w-8' />
        </Link>
        <button
          className='md:hidden text-2xl focus:outline-none'
          onClick={toggleMobileNav}
        >
          {isMobileNavOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Navbar - Toggle Menu */}
      {isMobileNavOpen && (
        <div className='absolute top-16 left-0 w-full bg-white shadow-lg md:hidden'>
          <nav className='flex flex-col items-center space-y-4 py-4'>
            <Link href='/' onClick={toggleMobileNav} className='text-lg'>
              Home
            </Link>
            <Link href='/contact' onClick={toggleMobileNav} className='text-lg'>
              Contact
            </Link>
            <Link href='/about' onClick={toggleMobileNav} className='text-lg'>
              About
            </Link>
            <Link href='/signup' onClick={toggleMobileNav} className='text-lg'>
              Signup
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
