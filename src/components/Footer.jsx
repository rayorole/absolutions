import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MenuIcon } from '@heroicons/react/outline';
import Aos from 'aos';
import 'aos/dist/aos.css';
import logo from '../assets/images/absolutions.png';
import vanbeers from '../assets/images/vanbeers.png';
import renolit from '../assets/images/renolit.png';

function Footer() {
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <>
      <footer className="bg-zinc-100 overflow-x-hidden border border-t-zinc-200 p-5 md:px-8 lg:px-12 flex items-center justify-between w-screen selection:bg-cyan-600 selection:text-white">
        <a href="/" className="hidden">
          <img src={logo} alt="AB" className="w-24" />
        </a>
        <div className="flex items-center">
          <div className="contact flex flex-col text-neutral-500 text-xs sm:text-sm font-semibold mr-8 sm:mr-20">
            <h3 className="text-lg text-neutral-700">Contact</h3>
            <a
              href="mailto:vincent@absolutesolutions.be"
              className="hover:underline"
            >
              vincent@absolutesolutions.be
            </a>
            <a href="tel:+32479659639" className="hover:underline">
              +32 479 65 96 39
            </a>
            <p className="mt-2 md:hidden">Het Leeg 19, 2930, Brasschaat</p>
          </div>
          <div className="contact hidden md:flex flex-col text-neutral-500 text-xs sm:text-sm font-semibold">
            <h3 className="text-lg text-neutral-700">AB Solutions BV</h3>
            <p>Het Leeg 19, 2930, Brasschaat</p>
            <p>BE 0733.624.559</p>
          </div>
        </div>
        <div className="text-neutral-500 text-sm font-semibold flex items-center">
          <div className="lg:flex lg:items-center lg:justify-between mr-8 hidden">
            <h3 className="text-xs">In samenwerking met</h3>
            <a href="https://www.renolit.com/nl/">
              <img className="w-24 -ml-3" src={renolit} alt="Renolit" />
            </a>
            <a href="http://vanbeers-p.eu/">
              <img className="w-24 -ml-3" src={vanbeers} alt="Vanbeers" />
            </a>
          </div>
          <div className="w-0.5 h-24 bg-neutral-300 mr-8"></div>
          <img src={logo} alt="AB" className="w-24" />
        </div>
      </footer>
    </>
  );
}

export default Footer;
