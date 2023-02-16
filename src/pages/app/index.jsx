import Booking from "@/components/Booking";
import React from "react";
import Nav from "../../components/Nav";
import Typewriter from "typewriter-effect";
import Lottie from 'react-lottie';
import animationData from '../../components/lottie/map.json'
const index = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
  return (
    <div className="h-[100vh] bg-white font-sans bg">
      <div
        id="title"
        className="w-full h-[30vh] flex items-center justify-center"
      >
        <div className="w-[80%] h[80%] text-7xl font-bold flex items-center justify-center  mt-5 text-orange-500 tracking-tight">
          <Typewriter
            onInit={(typewriter) => {
              typewriter

                .typeString("Ready To Take Flight?")

                .pauseFor(1000)
                .deleteAll()
                .typeString("Let's Go!")
                .start();
            }}
          />
        </div>
      </div>
      <div>
      <Lottie 
	    options={defaultOptions}
        height={350}
        width={700}
      />
      </div>

      <Booking></Booking>
    </div>
  );
};

export default index;
