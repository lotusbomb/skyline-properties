import React from "react";
import Call from "@/images/Call.png";
import Image from "next/image";
import pic from "@/images/hero.png";

const HeroSection = () => {
  return (
    <section className="pt-6">
      <div className="container mx-auto ">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <h1 className="text-bluee font-semibold text-xl md:text-2xl lg:text-4xl w-full md:w-3/4">
              Getting ready for a new house?
            </h1>
            <p className="text-grey font-light mt-4 md:mt-6 w-full md:w-3/4">
              Skyline properties is the ultimate house-hunting website for
              people looking to buy houses, apartments, and land.
            </p>
            <div className="flex gap-3 items-center mt-6">
              <button className="btn bg-lightbluee text-white text-xs sm:text-sm lg:text-[13px] py-2 px-4">
                View listings
              </button>
              <button className="btn flex items-center text-sm lg:text-[15px] py-2 px-4">
                <Image
                  src={Call}
                  alt="call button"
                  width={15}
                  className="mr-2"
                />
                Contact us
              </button>
            </div>
          </div>

          <div className="relative w-full md:w-1/2 mt-8 md:mt-0">
            <Image src={pic} alt="hero" layout="responsive" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
