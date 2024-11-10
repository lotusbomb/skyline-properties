import React from 'react'
import facebook from '@/images/fb.png'
import instagram from '@/images/insta.png'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="ml-">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 mt-10">
          <div>
            <h2 className='md:text-3xl text-2xl text-bluee'>
              Skylineproperties<span className='text-lightbluee'>.</span>
            </h2>
            <p className='text-grey mt-7'>
              Skyline properties is the ultimate house hunting website for
              people looking to buy houses, apartments, and land. When looking
              for houses, apartments,and lands in Uyo, Nigeria, you&apos;ll feel
              right at home with us.
            </p>
          </div>

          <div className='text-bluee text-[17px] md:text-[20px] flex flex-col gap-4 text-justify md:ml-24 font-semibold'>
            <a href="#">Home</a>
            <a href="#">Properties</a>
            <a href="#">Contact us</a>
            <a href="#">About us</a>
          </div>

          <div className='text-grey text-[16px]'>
            <p>
              Skyline properties <br />
              47 West Hayes Valley road, 2nd floor, Uyo, Nigeria, 94102.
            </p>
            <p className='my-7'>09070705245</p>
            <p>Mondays-Fridays</p>
            <p>9am-6:30pm. WAT</p>
          </div>

        </div>
          <div className='flex mt-14 gap-16'>
            <Image src={instagram} alt="instagram" />

            <Image src={facebook} alt="facebook" />
          </div>
      </div>
    </footer>
  );
}

export default Footer