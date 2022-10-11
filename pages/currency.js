import React from "react";

const Currency = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 className="title-font font-medium text-3xl text-gray-900 m-6 font-mono">
            Create your own cryptocurrency by following the instruction below
          </h1>

          <ul className="space-y-1 max-w-md list-disc list-inside text-gray-500 dark:text-gray-400 font-mono">
            <li>Connect your wallet</li>
            <li>Connect your wallet to Goerli test net</li>
            <li>Enter your currency name,symbol and how many coins you want to mint</li>
            <li>Make sure you have test ether in your wallet</li>
          </ul>
        </div>
        <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
            
          </h2>
          <div className="relative mb-4">
            <label for="full-name" className=" font-mono leading-7 text-sm text-gray-600">
              Currency Name
            </label>
            <input
              type="text"
              id="full-name"
              name="full-name"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              spellcheck="false"
              data-ms-editor="true"
            />
          </div>
          <div className="relative mb-4">
            <label for="email" className=" font-mono leading-7 text-sm text-gray-600">
              Symbol for your Cryptocurrency
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label for="email" className="font-mono leading-7 text-sm text-gray-600">
              Amount of token you want to mint.
            </label>
            <input
              type="number"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button className="font-mono text-white bg-orange-500 border-0 py-2 px-8 focus:outline-none hover:bg-orange-600 rounded text-lg">
            Mint
          </button>
        </div>
      </div>
    </section>
  );
};

export default Currency;
