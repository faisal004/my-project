import React from "react";

const Whitelist = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
            <div className="w-full sm:p-4 px-4 mb-6">
              <h1 className="title-font font-medium text-4xl mb-2 text-gray-900 font-mono">
                Become a whitelist member
              </h1>
              <div className="leading-relaxed">
                Pour-over craft beer pug drinking vinegar live-edge gastropub,
                keytar neutra sustainable fingerstache kickstarter.
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
            <img
              className="object-cover object-center w-full h-full"
              src="./crypto-devs.svg"
              alt="stats"
              //this is comment
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Whitelist;
