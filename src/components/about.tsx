import React from "react";

const About = () => {
  return (
    <div className="bg-[#rec562972428] pt-4 md:p-8 ">
      <h1 className="text-center text-3xl font-serif pb-10">About us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        <div className="text-lg md:text-xl font-mono mb-4 md:mb-0">
          <p>
            <strong>Best-Walnuts -</strong> The first Ukrainian, vertically
            integrated company with a full cycle of walnut cultivation,
            processing and packaging
          </p>

          <p className="pt-5">
            <strong>Location:</strong> Our garden is located in the southwestern
            part of Ukraine, in the Mogilev-Podolsky district of the Vinnitsa
            region.
          </p>
          <p className="pt-5">
            <strong>Size of garden:</strong> We grow Chandler walnut in a garden
            with a total area of 1,200 hectares and a total of 500,000 trees.
            region.
          </p>

          <br />
          <a
            href="https://docs.google.com/presentation/d/1F1affIJ5y7EVXJlrnYgUPfP2Qs7sYrnR8KVa4vQbYIA/edit#slide=id.p5"
            className="bg-black text-white p-2 hover:bg-slate-600 font-serif rounded-xl"
          >
            Learn more
          </a>
        </div>

        <div className="flex justify-center">
          <img src="./gifka.gif" alt="" className="rounded-lg w-[450px]" />
        </div>
      </div>
    </div>
  );
};

export default About;
