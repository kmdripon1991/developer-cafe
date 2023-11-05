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
          <div className="w-10 rounded-full">
            <img className="rounded-full cursor-pointer" src="https://statusneo.com/wp-content/uploads/2023/02/MicrosoftTeams-image551ad57e01403f080a9df51975ac40b6efba82553c323a742b42b1c71c1e45f1.jpg"/>
          </div>
        </div>
      </div>
      <hr className="mt-6 border" />
    </div>
  );
};

export default Navbar;
