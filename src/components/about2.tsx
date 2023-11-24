"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export const About2 = () => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      // Get the scroll position
      const scrollY = window.scrollY;

      // Adjust the threshold based on when you want the animation to start
      const threshold = 360;

      // Check if the scroll position is beyond the threshold
      if (scrollY > threshold) {
        // Start the animation
        controls.start({ opacity: 1, y: 0, transition: { duration: 0.8 } });
      } else {
        // Reset the animation
        controls.start({ opacity: 0, y: 50 });
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      className="about2-container"
    >
      <img src="./about2.png" alt="" />
    </motion.div>
  );
};
