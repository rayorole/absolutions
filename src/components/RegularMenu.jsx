import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { motion } from 'framer-motion';

function RegularMenu() {
  return (
    <motion.div className="hidden md:flex text-zinc-600 font-medium">
      <motion.a whileHover={{ x: 2 }} className="p-1" href="/">
        Home
      </motion.a>
      <motion.a whileHover={{ x: 2 }} className="p-1 ml-4" href="/hdpe">
        HDPE zwembaden
      </motion.a>
      <motion.a whileHover={{ x: 2 }} className="p-1 ml-4" href="/bouwkundig">
        Bouwkundige zwembaden
      </motion.a>
      <motion.a whileHover={{ x: 2 }} className="p-1 ml-4" href="/realisaties">
        Realisaties
      </motion.a>
      <motion.a whileHover={{ x: 2 }} className="p-1 ml-4" href="/contact">
        Contact
      </motion.a>
    </motion.div>
  );
}

export default RegularMenu;
