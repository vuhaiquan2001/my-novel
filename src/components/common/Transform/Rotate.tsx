import React from "react";
import { motion, useInView, HTMLMotionProps } from "framer-motion";

type ScaleOptions = {
  scale: number;
  duration?: number;
  delay?: number;
};

type RotateAnimateProps = {
  children: React.ReactNode;
  rotationDegree?: number;
  duration?: number;
  inViewOptions?: { once: boolean; amount: number };
  scaleOptions?: ScaleOptions;
} & HTMLMotionProps<"div">;

function RotateAnimate({
  children,
  rotationDegree = 360,
  duration = 2,
  inViewOptions = { once: true, amount: 0.5 },
  scaleOptions,
  ...htmlProps
}: RotateAnimateProps) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, inViewOptions);

  const variants = {
    hidden: { rotate: 0, scale: 1 },
    visible: (custom: { scale: number }) => ({
      rotate: rotationDegree,
      scale: [1, custom.scale, 1],
      transition: {
        rotate: { duration, ease: "easeInOut" },
        scale: {
          duration: scaleOptions?.duration || duration / 2,
          delay: scaleOptions?.delay || 0,
          ease: "easeInOut",
        },
      },
    }),
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      custom={{ scale: scaleOptions?.scale || 1.1 }}
      {...htmlProps}
    >
      {children}
    </motion.div>
  );
}

export default RotateAnimate;
