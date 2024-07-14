import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { Play } from '@phosphor-icons/react';
import SlideImage from '../assets/gobie.jpeg'
function Visit() {
  return (
    <div>
      <main className="w-full lg:h-full  h-auto grid md:grid-cols-2 absolute top-0 left-0 lg:px-24 md:px-8 px-5 pt-24 md:pt-32 lg:pt-0">
        <div className="flex flex-col justify-center md:gap-6 gap-3 md:order-1 order-2">
          <p className="span-color1 uppercase tracking-widest lg:span-base  span-sm font-normal">
            <Fade>Visit The Land of Amhara </Fade>
          </p>
          <h1 className=" span-color3 lg:span-7xl md:span-5xl span-3xl font-medium">
            <Fade>
              incredible travel destination with a rich cultural heritage,
              diverse landscapes and unique wildlife.
            </Fade>
          </h1>
          <p className="span-color3 md:span-base span-sm span-justify font-light">
            <Fade>
              Tatseq Tour and Travel offers customized tour packages and travel
              experience that center to unique needs of our clients
            </Fade>
          </p>
          <div className="w-full flex md:justify-start justify-between items-center lg:gap-12 md:gap-6 gap-0">
            <button
              className="outline-none border-none lg:px-7 px-5 py-3 bg-color2 text-white span-white font-extralight rounded-lg"
            >

            </button>
          
            <div className="flex items-center lg:gap-6 gap-3 cursor-pointer">
              <span className="relative flex h-14 w-14">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-color1 opacity-75"></span>
                <span className="relative flex justify-center items-center span-white rounded-full h-14 w-14 bg-color1">
                  <Play size={20} color="currentColor" weight="fill" />
                  <h1 className='gap-20 '> Visit us</h1>
                </span>
              </span>
              <button className="outline-none border-none">
                {/* {Herospans.secondButton} */}
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-end md:order-2 order-1">
          <Slide direction="right">
            <img
              src={SlideImage}
              alt="Hero Image"
              className=" lg:h-[85%] lg:w-[90%] md:h-[100%] md:w-full w-[90%] h-[50vh]"
            />
          </Slide>
        </div>
      </main>
    </div>
  );
}

export default Visit;
