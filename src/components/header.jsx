import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MenuIcon } from '@heroicons/react/outline';
import logo from '../assets/images/absolutions.png';
import HamburgerMenu from './HamburgerMenu';
import RegularMenu from './RegularMenu';
import '../styles/header.scss';

function Header() {
  return (
    <>
      <header className="bg-zinc-50 border border-b-neutral-100 py-3 px-5 md:px-8 lg:px-12 flex items-center justify-between fixed top-0 w-screen selection:bg-cyan-600 selection:text-white">
        <a href="/" className="focus:outline-none">
          <img src={logo} alt="AB" className="w-24 focus:outline-none" />
        </a>
        <HamburgerMenu />
        <RegularMenu />
      </header>
    </>
  );
}

export default Header;
