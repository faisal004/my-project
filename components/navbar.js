import React from "react";

const Navbar = () => {
  return (
    <div className="bg-slate-100">
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            
            <span className="ml-3 text-3xl font-mono">CRYPTO DEVS</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900">First Link</a>
            <a className="mr-5 hover:text-gray-900">Second Link</a>
            <a className="mr-5 hover:text-gray-900">Third Link</a>
            <a className="mr-5 hover:text-gray-900">Fourth Link</a>
          </nav>
          <button className="inline-flex font-mono items-center text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500  border-0 py-1 px-3 focus:outline-none hover:bg-orange-400 rounded text-base mt-4 md:mt-0">
            Connect your Wallet
            
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
