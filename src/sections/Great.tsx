import Image from "next/image";
import React from "react";
import pic2 from "@/images/section2.png";
import check from "@/images/checkmark.png";
import bluecircle from "@/images/Ellipse 1.png";
import whitecircle from "@/images/Ellipse 2.png";

const Great = () => {
  return (
    <section className="py-6 mt-20">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
          <div className="relative w-full lg:w-1/2 mt-10 lg:mt-0">
            <Image
              src={pic2}
              alt="hero2"
              layout="responsive"
              width={950}
              height={600}
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col w-full lg:w-1/2 mt-10 lg:mt-0">
            <div className="flex items-center mb-4">
              <Image
                src={bluecircle}
                alt="blue circle"
                width={20}
                height={20}
                className="z-10 absolute"
              />
              <Image
                src={whitecircle}
                alt="white circle"
                width={20}
                height={20}
                className="z-20 ml-2"
              />
            </div>
            <h3 className="text-bluee font-medium text-sm md:text-lg mb-3">
              WHAT MAKES US GREAT
            </h3>
            <h1 className="text-bluee font-semibold text-xl lg:text-3xl md:text-2xl leading-snug mb-4">
              We are the company that you need.{" "}
              <br className="hidden md:block" /> Your comfort is our priority
            </h1>
            <p className="text-grey font-light mt-3 text-justify lg:text-left w-full lg:w-11/12 text-sm md:text-base">
              We offer real estate services and information in Uyo, Nigeria, so
              you can find the perfect place to live. We are the cleanest city
              in Nigeria, and we want it to be yours! Come visit us today!
            </p>
            <div className="mt-6 space-y-4">
              <p className="flex items-center text-bluee text-sm md:text-base">
                <span className="mr-4">
                  <Image src={check} alt="check" width={18} height={18} />
                </span>
                Get access to 24hrs power supply and security.
              </p>
              <p className="flex items-center text-bluee text-sm md:text-base">
                <span className="mr-4">
                  <Image src={check} alt="check" width={18} height={18} />
                </span>
                Our lands are free from government acquisition.
              </p>
              <p className="flex items-center text-bluee text-sm md:text-base">
                <span className="mr-4">
                  <Image src={check} alt="check" width={18} height={18} />
                </span>
                Payment plans of up to 6 months available.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Great;
