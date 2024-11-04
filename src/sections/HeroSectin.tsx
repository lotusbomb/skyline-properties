import React from 'react'
import Call from '@/images/Call.png'
import Image from 'next/image'
import pic from '@/images/hero.png'

const HeroSectin = () => {
  return (
    <section className="pt-6">
      <div className="container">
        <div className="flex items-center gap-8">
          <div>
            <h1 className="text-bluee font-semibold text-4xl w-1/2">
              Getting ready for a new house ?
            </h1>
            <p className="text-grey font-light mt-6 w-3/4">
              Skyline properties is the ultimate house hunting website for
              people looking to buy houses, apartments, and land.
            </p>
            <div className="flex gap-1 items-center mt-[32px]">
              <button className="btn bg-lightbluee text-white text-[13px]">
                View listings
              </button>
              <button className="btn text-[15px]">
                <span className="mr-2 ">
                  <Image src={Call} alt="call button" width={15} />
                </span>
                Contact us
              </button>
            </div>
          </div>

          <div className="relative mt-20">
            <Image src={pic} alt="hero" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSectin