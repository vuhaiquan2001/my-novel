"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./BallFollowMouse.css"; // Tạo file này để thêm các kiểu CSS nếu cần
// parent = parentRef.current
export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
    rotation: 0,
  });
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    let lastTime = 0;
    let lastMousePosition = { x: 0, y: 0 };

    const handleMouseMove = (event: MouseEvent) => {
      const currentTime = new Date().getTime();
      if (currentTime - lastTime > 24) {
        // 24ms ~ 90fps
        const deltaX = event.clientX - lastMousePosition.x;
        const deltaY = event.clientY - lastMousePosition.y;
        const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

        setMousePosition({
          x: event.clientX,
          y: event.clientY,
          rotation: angle,
        });

        lastMousePosition = { x: event.clientX, y: event.clientY };
        lastTime = currentTime;
      }
    };
    const handleMouseLeave = () => {
      console.log("leave");
      setIsVisible(false);
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);
  return { mousePosition, isVisible };
};

const BallFollowMouse: React.FC = () => {
  const { mousePosition, isVisible } = useMousePosition();
  return (
    <>
      {isVisible && (
        <motion.div
          className="ball"
          animate={{
            x: mousePosition.x - 50, // Trừ 50 để tâm của quả bóng nằm giữa con trỏ
            y: mousePosition.y - 50,
            rotate: mousePosition.rotation,
            scale: 1.5,
            // transform: `translate(${mousePosition.x - 25}px, ${mousePosition.y - 25}px) rotate(${rotation}deg) scale(1.5, 1)`,
          }}
          transition={{
            type: "tween",
            ease: "backOut",
            stiffness: 300,
            damping: 20,
          }}
        />
      )}
    </>
  );
};

export default BallFollowMouse;
