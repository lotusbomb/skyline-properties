import Image from 'next/image';
import React from 'react'
import bluecircle from "@/images/Ellipse 1.png";
import whitecircle from "@/images/Ellipse 2.png";
import list1 from "@/images/featured1.png";
import list2 from "@/images/featured2.png";
import list3 from "@/images/featured3.png";

const lists = [
  {
    image: list1,
    price: "N12,000,000",
    title: "Affordable residential land",
    sub: "Crescent estate, Uyo",
    button: "View more",
  },
  {
    image: list2,
    price: "N12,000,000",
    title: "Affordable residential land",
    sub: "Crescent estate, Uyo",
    button: "View more",
  },
  {
    image: list3,
    price: "N12,000,000",
    title: "Affordable residential land",
    sub: "Crescent estate, Uyo",
    button: "View more",
  },
];
const Featured = () => {
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
            <h3 className="text-bluee mb-3 -mt-2 font-medium">FEATURED</h3>

            <h1 className="text-bluee font-semibold text-3xl leading-10">
                This could be yours
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-14 mt-10">
            {lists.map((index) => (
                <div key={index.title}>
                <div>
                    <Image
                    src={index.image}
                    alt={index.title}
                    width={850}
                    height={850}
                    />
                </div>
                <div className='mt-5'>
                    <span className='text-bluee text-[29px] font-medium'>{index.price}</span>
                    <h3 className=" mt-2 text-bluee font-medium text-[20px]">
                        {index.title}
                    </h3>
                    <p className='text-grey text-[18px] mb-3'>{index.sub}</p>
                    <button className='btn px-7 bg-lightbluee text-white text-[15px]'>{index.button}</button>
                </div>
                </div>
            ))}
            </div>
        </div>
    </section>
);
}

export default Featured