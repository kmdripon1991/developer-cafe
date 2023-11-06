/* eslint-disable no-unused-vars */
import React from 'react';

const Navbar = () => {
  return (
    <div className="">
      <div className="navbar bg-base-100 p-0 mt-0">
        <div className="flex-1">
          <h1 className="text-2xl font-bold cursor-pointer">Developer Cafe</h1>
        </div>
        <div className="flex-none">
          <div className="w-10">
            <img className="rounded-full cursor-pointer" src="/src/assets/images/profile.png"/>
          </div>
        </div>
      </div>
      <hr className="mt-6 border" />
    </div>
  );
};

export default Navbar;
