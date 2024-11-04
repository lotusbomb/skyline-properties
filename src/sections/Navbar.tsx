import React from 'react'

const Navbar = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-50">
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <span className='font-semibold text-[20px] text-bluee'>Skylineproperties</span>
            <nav className="hidden md:flex gap-6 items-center text-bluee ">
              <a href="#">About us</a>
              <a href="#">Contact us</a>
              <button className="bg-fadedblue text-bluee btn font-medium">View listings</button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar