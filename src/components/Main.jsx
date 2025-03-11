import React from "react";
import Button from "./Button";
import heroImage from "/images/image-hero-desktop.png";
import heroImageMobile from "/images/image-hero-mobile.png";
import Sponsors from "./Sponsors";

function Main() {
  return (
    <main className=" flex flex-col-reverse items-center md:grid md:grid-cols-2 gap-1 md:gap-10 md:pl-30 md:pr-16 box-border ">
      <div className=" text-center md:text-start px-4 md:px-0 md:mt-12">
        <h1 className=" my-6 md:my-12 text-3xl md:text-6xl text-black font-extrabold">
          Make <br className="hidden md:block" /> remote work
        </h1>
        <p className=" text-md md:text-xl my-6 text-[hsl(0_0%_41%)]">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <div className=" flex justify-center md:justify-start w-full">
          <Button border="2px solid black" bg="black" textColor="white">
            Learn more
          </Button>
        </div>
        <Sponsors />
      </div>
      <div className=" md:h-120">
        <picture>
          <source
            media="(max-width: 400px)"
            srcset={heroImageMobile}
            sizes=""
          />
          <img className=" h-full w-full" src={heroImage} alt="Hero image" />
        </picture>
      </div>
    </main>
  );
}

export default Main;
