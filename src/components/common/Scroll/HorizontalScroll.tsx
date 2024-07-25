import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";

interface HorizontalScrollProps {
  children: React.ReactNode;
}

const HorizontalScroll: React.FC<HorizontalScrollProps> = ({ children }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-95%"]);

  return (
    // Carousel
    <section ref={targetRef} className="h-[600vh] bg-white">
      {/* Container */}
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        {/* horizontal translate x */}
        <motion.div style={{ x }} className="flex">
          <div className="h-[450px] w-screen flex-shrink-0 bg-red-500">
            Section 1
          </div>
          <div className="h-[450px] w-screen flex-shrink-0 bg-blue-500">
            Section 2
          </div>
          <div className="h-[450px] w-screen flex-shrink-0 bg-green-500">
            Section 3
          </div>
          <div className="h-[450px] w-screen flex-shrink-0 bg-yellow-500">
            Section 4
          </div>
          <div className="h-[450px] w-screen flex-shrink-0 bg-purple-500">
            Section 5
          </div>
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScroll;
