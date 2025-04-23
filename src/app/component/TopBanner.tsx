import React from "react";
import { FaTimes } from "react-icons/fa";

const TopBanner = () => {
  return (
    <header className="flex flex-wrap gap-5 justify-between py-3.5 pr-7 pl-20 w-full text-base font-medium text-center text-white bg-sky-600 max-md:px-5 max-md:max-w-full">
      <p className="max-md:max-w-full">
        <span className="font-black">Courses from $149.00</span> Gain the skills
        to climb that career ladder.{" "}
        <span className="font-bold text-[rgba(255,202,126,1)]">
          3 days left!
        </span>
      </p>
      <button aria-label="Close banner">
        <FaTimes className="object-contain shrink-0 w-6 aspect-square" />
      </button>
    </header>
  );
};

export default TopBanner;