import React from "react"
import Lottie from "lottie-react";
import { roboto2 } from "../assets"
import robot from "../assets/robot.json";
const Footer = () => {
  return (
    <div className="bg-black-200 sm:px-16 px-6 sm:py-12 py-10 min-h-[250px] mt-20">
     
      <Lottie
        animationData={robot}
        style={{ height: 180, width: 180 }}
        alt="logo"
        className="w-36 m-auto"
      />
      <p className="text-secondary text-[17px] leading-[30px] text-center absolute bottom-8 left-0 right-0 mx-auto select-none">
        {new Date().getFullYear()} &copy; KAGIFZU. All rights reserved.
      </p>
    </div>
  );
}

export default Footer
