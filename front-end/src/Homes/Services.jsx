import React from "react";
import { Fade } from "react-awesome-reveal";
import { Card } from 'antd';
import servo from '../assets/gion1.jpg'

function Services() {
  return (
    <section className=" flex flex-col items-center justify-center relative mt-[95vh] lg:px-24 md:px-20 px-6">
    
      <main className="w-full pt-32 flex flex-col gap-10 items-center justify-center   ">
        <h2 className="md:text-4xl text-2xl font-medium capitalize text-color3 rounded-8-red">
          <Fade>Our service </Fade>
        </h2>

        <div className="w-full h-auto grid lg:grid-cols-4 md:grid-cols-2 lg:gap-7 md:gap-10 gap-7 my-12 z-20 px-8 md:px-0">
          <Card
            className="w-full bg-white flex flex-col items-center justify-center py-6 cursor-pointer transition duration-300 hover:shadow-xl px-5 rounded-xl cardPseudo after:bg-color1"
            cover={
              <div className="w-28 h-28 relative z-10 before:content-[''] before:absolute before:top-3 before:right-3 before:w-16 before:h-16 before:bg-color2/30 before:-z-10 before:rounded-tl-3xl before:rounded-br-3xl">
                <img src={servo} alt="Card cover" className="object-cover" />
              </div>
            }
          >
            <div className="w-full flex flex-col items-center gap-2">
              <h4 className="text-base rounded font-medium text-color3">
                User-friendly booking platform
              </h4>
              <p className="text-sm font-light text-center text-color3">
                User-centric, intuitive platform enabling personalized, effortless
                travel planning and bookings, fostering long-term customer loyalty
                and business growth.
              </p>
            </div>
          </Card>
          <Card
            className="w-full bg-white flex flex-col items-center justify-center py-6 cursor-pointer transition duration-300 hover:shadow-xl px-5 rounded-xl cardPseudo after:bg-color1"
            cover={
              <div className="w-28 h-28 relative z-10 before:content-[''] before:absolute before:top-3 before:right-3 before:w-16 before:h-16 before:bg-color2/30 before:-z-10 before:rounded-tl-3xl before:rounded-br-3xl">
                <img src={servo} alt="Card cover" className="object-cover" />
              </div>
            }
          >
            <div className="w-full flex flex-col items-center gap-2">
              <h4 className="text-base rounded font-medium text-color3">
                User-friendly booking platform
              </h4>
              <p className="text-sm font-light text-center text-color3">
                User-centric, intuitive platform enabling personalized, effortless
                travel planning and bookings, fostering long-term customer loyalty
                and business growth.
              </p>
            </div>
          </Card>
          <Card
            className="w-full bg-white flex flex-col items-center justify-center py-6 cursor-pointer transition duration-300 hover:shadow-xl px-5 rounded-xl cardPseudo after:bg-color1"
            cover={
              <div className="w-28 h-28 relative z-10 before:content-[''] before:absolute before:top-3 before:right-3 before:w-16 before:h-16 before:bg-color2/30 before:-z-10 before:rounded-tl-3xl before:rounded-br-3xl">
                <img src={servo} alt="Card cover" className="object-cover" />
              </div>
            }
          >
            <div className="w-full flex flex-col items-center gap-2">
              <h4 className="text-base rounded font-medium text-color3">
                User-friendly booking platform
              </h4>
              <p className="text-sm font-light text-center text-color3">
                User-centric, intuitive platform enabling personalized, effortless
                travel planning and bookings, fostering long-term customer loyalty
                and business growth.
              </p>
            </div>
          </Card>
          <Card
            className="w-full bg-white flex flex-col items-center justify-center py-6 cursor-pointer transition duration-300 hover:shadow-xl px-5 rounded-xl cardPseudo after:bg-color1"
            cover={
              <div className="w-28 h-28 relative z-10 before:content-[''] before:absolute before:top-3 before:right-3 before:w-16 before:h-16 before:bg-color2/30 before:-z-10 before:rounded-tl-3xl before:rounded-br-3xl">
                <img src={servo} alt="Card cover" className="object-cover" />
              </div>
            }
          >
            <div className="w-full flex flex-col items-center gap-2">
              <h4 className="text-base rounded font-medium text-color3">
                User-friendly booking platform
              </h4>
              <p className="text-sm font-light text-center text-color3">
                User-centric, intuitive platform enabling personalized, effortless
                travel planning and bookings, fostering long-term customer loyalty
                and business growth.
              </p>
            </div>
          </Card>
        </div>
      </main>
    </section>
  );
}

export default Services;