"use client";

import { motion } from "framer-motion";

const Slogan = () => {
  return (
    <div className="border-b-2 bg-[url('/oreh5.jpg')] bg-cover bg-center flex flex-col items-center">
      <div className="text-center font-serif font-thin text-[40px] pt-24 text-white">
        We sell Best Walnuts <br />
        for small and huge wholesale!!
      </div>
      <motion.img
        src="/walnut-43.png"
        alt=""
        className="w-24 h-24 mt-[40px] mb-20"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
};

export default Slogan;
