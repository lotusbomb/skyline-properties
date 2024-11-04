import Image from 'next/image';
import React from 'react'
import pic2 from '@/images/section2.png'
import check from '@/images/checkmark.png'
import bluecircle from '@/images/Ellipse 1.png'
import whitecircle from '@/images/Ellipse 2.png'


const Great = () => {
  return (
    <section className="pt-6">
      <div className="container">
        <div className="flex gap-20">
          <div className="relative mt-20">
            <Image src={pic2} alt="hero2" width={950} />
          </div>
          <div className="mt-40">
            <div className="flex mb-2">
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
            <h3 className='text-bluee mb-3 font-medium'>WHAT MAKES US GREAT</h3>
            <h1 className="text-bluee font-semibold text-3xl leading-10">
              We are the company that you need. <br /> Your comfort is our
              priority
            </h1>
            <p className="text-grey font-light mt-3 text-justify w-5/6">
              We offer real estate services and information in Uyo, Nigeria, so
              you can find the perfect place to live. We are the cleanest city
              in Nigeria, and we want it to be yours! Come visit us today!
            </p>
            <div>
              <p className="flex items-center mt-6 text-bluee">
                <span className="mr-5">
                  <Image src={check} alt="check" width={18} />
                </span>
                Get access to 24hrs power supply and security.
              </p>
              <p className="flex items-center mt-4 text-bluee">
                <span className="mr-5">
                  <Image src={check} alt="check" width={18} />
                </span>
                Our lands are free from government acquisition
              </p>
              <p className="flex items-center mt-4 text-bluee">
                <span className="mr-5">
                  <Image src={check} alt="check" width={18} />
                </span>
                Payment plans of up to 6 months available
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Great