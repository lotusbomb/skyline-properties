import Image from 'next/image';
import React from 'react'
import bluecircle from "@/images/Ellipse 1.png";
import whitecircle from "@/images/Ellipse 2.png";
import arrow from '@/images/arrow-right.png'
import list1 from "@/images/list1.png"; 
import list2 from "@/images/list2.png";
import list3 from "@/images/list3.png";

const list = [
  {
    image: list1,
    title: 'Lands for sale'
  },
  {
    image: list2,
    title: 'Houses for rent'
  },
  {
    image: list3,
    title: 'Houses for sale'
  }
]

const Listings = () => {
  return (
    <section className="pt-6 mt-20">
      <div className="container">
        <div className="flex mb-5">
          <Image
            src={bluecircle}
            alt="blue circle"
            className="z-10 absolute"
            width={20}
          />
          <Image
            src={whitecircle}
            alt="white circle"
            className="z-20 ml-2"
            width={20}
          />
        </div>
        <h3 className="text-bluee mb-3 font-medium">OUR LISTING</h3>

        <div className="flex items-center justify-between">
          <h1 className="text-bluee font-semibold text-3xl leading-10">
            We&apos;ve got what you need
          </h1>
          <div className="inline-flex cursor-pointer text-bluee">
            See all{" "}
            <span className="ml-3">
              <Image src={arrow} alt="arrow" />
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 mt-10">
          {list.map((index) => (
            <div key={index.title}>
              <div>
                <Image
                  src={index.image}
                  alt={index.title}
                  width={850}
                  height={850}
                />
              </div>
              <h3 className='mt-4 text-bluee font-medium text-[28px]'>{index.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Listings