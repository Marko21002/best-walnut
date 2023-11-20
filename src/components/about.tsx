import React from "react";

const About = () => {
  return (
    <div className="bg-white mt-10 p-4 md:p-8 border-y-4 border-black">
      <h1 className="text-center text-3xl font-serif">About us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        <div className="text-lg md:text-xl font-mono mb-4 md:mb-0">
          The first Ukrainian, vertically integrated company with a full cycle
          of walnut cultivation, processing and packaging
          <br />
          <button className="bg-black text-white m-10">Learn more</button>
        </div>

        <div className="flex justify-center">
          <img
            src="/oreh2.jpeg"
            alt=""
            className="w-full md:max-w-lg rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
