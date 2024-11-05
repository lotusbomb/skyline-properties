import Image from "next/image";
import React from "react";
import cta from "@/images/cta.jpeg";

const HeroPart2 = () => {
  return (
    <section className="relative">
      <div className="relative h-[600px] overflow-hidden mt-20 py-6">
        {/* Text Container */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-10 -mt-40">
          <h1 className="text-white text-5xl mb-4 max-w-[900px] w-full font-bold tracking-wide">
            Start your home search, find your dream home, you&apos;re going to
            love it!
          </h1>
          <p className="text-white text-lg mb-6 max-w-[550px] w-full">
            Your Perfect Home Awaits: Start your Search Today, Discover Your
            Dream Home, and Fall in Love with Every Detail
          </p>
          <button className="btn px-7 py-3 bg-lightbluee text-white text-[15px]">
            View listings
          </button>
        </div>

        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-0"/>
        <Image
          src={cta}
          alt="cta"
          width={1800}
          height={600}
          className="object-cover w-full h-full"
        />
      </div>
    </section>
  );
};

export default HeroPart2;
