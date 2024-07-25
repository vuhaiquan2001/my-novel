import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface IncreaseToNumberProps {
  initialValue: number;
  finalValue: number;
  duration: number;
  isIncrease: boolean;
  toFixed?: number;
}

const IncreaseToNumber: React.FC<IncreaseToNumberProps> = ({
  initialValue,
  finalValue,
  duration,
  isIncrease,
  toFixed = 1,
}) => {
  const [currentValue, setCurrentValue] = useState<number>(initialValue);

  useEffect(() => {
    let startTime: number | null = null;
    let requestId: number | null = null;

    const updateValue = (timestamp: number): void => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      const valueDiff = finalValue - initialValue;

      if (isIncrease) {
        setCurrentValue(initialValue + valueDiff * percentage);
      } else {
        setCurrentValue(finalValue - valueDiff * percentage);
      }

      if (progress < duration) {
        requestId = requestAnimationFrame(updateValue);
      }
    };

    requestId = requestAnimationFrame(updateValue);

    return () => {
      if (requestId !== null) {
        cancelAnimationFrame(requestId);
      }
    };
  }, [initialValue, finalValue, duration, isIncrease]);

  return (
    <div>
      <motion.div
        style={{ fontSize: "2rem", fontWeight: "bold" }}
        // animate={{ scale: [0.8, 1.2, 1] }}
        // transition={{ duration: 0.5 }}
      >
        {parseFloat(currentValue.toFixed(toFixed))}
      </motion.div>
    </div>
  );
};

export default IncreaseToNumber;
