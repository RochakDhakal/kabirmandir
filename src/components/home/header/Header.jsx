import React from "react";
import logo from "../../../assets/download.png";

export const Header = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-br from-white via-amber-300 to-amber-300 flex flex-col items-center justify-evenly">
      <img src={logo} alt="Ashram-Logo" className="sm:h-96 sm:w-96" />
      <div className=" h-1/6 text-center">
        <div className="lg:text-4xl uppercase text-gray-400 sm:text-4xl">
          कबीर सन्त सत्संग मन्दिर
        </div>
        <div className="lg:text-4xl uppercase text-gray-400 sm:text-4xl">
          Kabir Santa Satsang Mandir
        </div>
      </div>
    </div>
  );
};
