import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MenuIcon } from '@heroicons/react/outline';
import logo from '../assets/images/absolutions.png';

function Footer() {
  return (
    <>
      <footer className="bg-neutral-200 overflow-x-hidden border border-t-neutral-300 p-5 md:px-8 lg:px-12 flex items-center justify-between w-screen selection:bg-cyan-600 selection:text-white">
        <a href="/" className="hidden">
          <img src={logo} alt="AB" className="w-24" />
        </a>
        <div className="contact flex flex-col text-neutral-700 text-xs sm:text-sm font-semibold">
          <h3 className="text-lg">Contact</h3>
          <a
            href="mailto:vincent@absolutesolutions.be"
            className="hover:underline"
          >
            vincent@absolutesolutions.be
          </a>
          <a href="tel:+32479659639" className="hover:underline">
            +32 479 65 96 39
          </a>
        </div>
        <div className=" text-neutral-700 text-sm font-semibold">
          <img src={logo} alt="AB" className="w-24" />
        </div>
      </footer>
    </>
  );
}

export default Footer;
