import React from 'react';
import UnsplashGirl from '../assets/images/unsplash-pool-girl.jpg';
import UnsplashBall from '../assets/images/ball-unsplash.jpg';
import '../styles/didyouknow.scss';

function DidYouKnow() {
  return (
    <div className="relative">
      <h2 className="text-center mt-10 text-stone-400 font-semibold text-xs">
        &laquo; Sleep om kaart te veranderen &raquo;
      </h2>
      <ul className="mt-1 py-5 px-[50vw] w-full flex overflow-x-auto gap-8 snap-x no-scrollbar">
        <li className="snap-center">
          <div className="relative flex-shrink-0 max-w-[95vw] overflow-hidden rounded-3xl">
            <img
              src={UnsplashGirl}
              alt="Img"
              className="absolute inset-0 w-full h-full object-cover object-bottom"
            />
            <div className="relative h-96 w-[768px] p-12 flex flex-col justify-between items-start">
              <div className="overflow-ellipsis">
                <p className="font-medium text-lg text-white">Wist je dat...</p>
                <h2 className="mt-3 w-2/3 text-md font-semibold tracking-tighter text-white">
                  Je met een frequencysturing op je pomp aan actief overwinteren
                  <br /> kunt doen en dit beter is voor de waterkwaliteit en je
                  zo veel <br /> minder werk hebt bij de opstart in het
                  voorjaar.
                </h2>
              </div>
            </div>
          </div>
        </li>
        <li className="snap-center">
          <div className="relative flex-shrink-0 max-w-[95vw] overflow-hidden rounded-3xl">
            <img
              src={UnsplashBall}
              alt="Img"
              className="absolute inset-0 w-full h-full object-cover object-bottom"
            />
            <div className="relative h-96 w-[768px] p-12 flex flex-col justify-between items-start">
              <div>
                <p className="font-medium text-white">Wist je dat...</p>
                <h2 className="mt-3 w-2/3 text-md font-semibold tracking-tighter text-white">
                  Chemicaliën geen effect hebben <br /> op de kleur van High
                  Density Polyethylene kuipen
                </h2>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default DidYouKnow;
