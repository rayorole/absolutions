import React, { useEffect } from 'react';
import GalleyFluidra from '../assets/images/asset-fluidra.jpeg';
import GalleryPool from '../assets/images/image-asset.jpeg';
import GalleryDeck from '../assets/images/asset-deck.jpeg';
import GalleryGarden from '../assets/images/asset-pool-garden.jpeg';
import GalleryPoolLong from '../assets/images/asset-pool-long.jpeg';
import GalleryPoolBlue from '../assets/images/pool-asset-blue.jpeg';
import GalleryPoolMore from '../assets/images/pool-asset-more.jpeg';
import GalleryPoolWHouse from '../assets/images/pool-w-house.jpeg';

import Aos from 'aos';
import 'aos/dist/aos.css';

function Gallery() {
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <div className="bg-zinc-50 text-center py-12 px-4 text-neutral-700 border-b border-b-zinc-100">
      <div class="grid gap-4 grid-cols-2 grid-rows-4">
        <div
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
          className="rounded-lg overflow-hidden"
        >
          <img
            src={GalleyFluidra}
            alt="Vincent met man"
            className="object-cover h-56 rounded-lg"
          />
        </div>
        <div
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
          className="rounded-lg overflow-hidden"
        >
          <img
            src={GalleryPool}
            alt="Vincent met man"
            className="object-cover h-56 rounded-lg"
          />
        </div>
        <div
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
          className="rounded-lg overflow-hidden"
        >
          <img
            src={GalleryDeck}
            alt="Vincent met man"
            className="object-cover h-56 rounded-lg"
          />
        </div>
        <div
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
          className="rounded-lg overflow-hidden"
        >
          <img
            src={GalleryGarden}
            alt="Vincent met man"
            className="object-cover h-56 rounded-lg"
          />
        </div>
        <div
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
          className="rounded-lg overflow-hidden"
        >
          <img
            src={GalleryPoolLong}
            alt="Vincent met man"
            className="object-cover h-56 rounded-lg"
          />
        </div>
        <div
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
          className="rounded-lg overflow-hidden"
        >
          <img
            src={GalleryPoolBlue}
            alt="Vincent met man"
            className="object-cover h-56 rounded-lg"
          />
        </div>
        <div
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
          className="rounded-lg overflow-hidden"
        >
          <img
            src={GalleryPoolMore}
            alt="Vincent met man"
            className="object-cover h-56 rounded-lg"
          />
        </div>
        <div
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
          className="rounded-lg overflow-hidden"
        >
          <img
            src={GalleryPoolWHouse}
            alt="Vincent met man"
            className="object-cover h-56 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
