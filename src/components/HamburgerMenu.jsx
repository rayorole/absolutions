import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { motion } from 'framer-motion';

function HamburgerButton(props) {
  const [menu, setMenu] = useState(false);

  function toggleMenu() {
    setMenu(!menu);
  }

  return (
    <div className="flex select-none md:hidden z-30">
      <motion.button
        whileTap={{ scale: 1.1 }}
        onClick={toggleMenu}
        className="rounded-full p-2 z-20 hover:bg-zinc-100 transition duration-200 ease-in-out"
      >
        <MenuIcon className={menu ? 'hidden' : 'w-7 text-zinc-400'} />
        <XIcon className={menu ? 'w-7 text-zinc-400' : 'hidden'} />
      </motion.button>
      <motion.div
        variants={{
          open: {
            width: 240,
            display: 'flex',
            transform: 'translateX(0%)',
            transition: {
              type: 'spring',
              duration: 0.05,
              stiffness: 40,
              delay: 0,
            },
          },
          closed: {
            width: 0,
            transform: 'translateX(4em)',
          },
        }}
        initial={false}
        animate={menu ? 'open' : 'closed'}
        className="bg-zinc-100 fixed top-0 right-0 h-screen border-l border-zinc-200 p-3"
      >
        <motion.div
          initial={false}
          animate={menu ? 'show' : 'hide'}
          className="w-60 h-3/4 flex items-center flex-col justify-center text-zinc-600 font-medium"
          variants={{
            show: {
              transform: 'translateX(0)',
              opacity: 1,
              transition: { delay: 0.6, duration: 0.2 },
            },
            hide: {
              transition: { delay: 0.3, duration: 0.2 },
              opacity: 0,
            },
          }}
        >
          <motion.a whileHover={{ x: 2 }} className="p-1" href="/">
            Home
          </motion.a>
          <motion.a whileHover={{ x: 2 }} className="p-1 mt-1" href="/hdpe">
            HDPE zwembaden
          </motion.a>
          <motion.a
            whileHover={{ x: 2 }}
            className="p-0.5 mt-1"
            href="/bouwkundig"
          >
            Bouwkundige zwembaden
          </motion.a>
          <motion.a
            whileHover={{ x: 2 }}
            className="p-1 mt-1"
            href="/realisaties"
          >
            Realisaties
          </motion.a>
          <motion.a whileHover={{ x: 2 }} className="p-1 mt-1" href="/contact">
            Contact
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default HamburgerButton;
