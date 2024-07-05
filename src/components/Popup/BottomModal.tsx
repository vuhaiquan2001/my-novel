import React from "react";
import { motion, MotionProps, Variant } from "framer-motion";
// Tạo type mới kết hợp MotionProps và HTMLButtonElement
type BouncingButtonProps = MotionProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {};
const variants: { [key: string]: Variant } = {
  // Bạn có thể thêm các variants cụ thể ở đây nếu cần
};

function BottomModal({}: BouncingButtonProps) {
  return <motion.div variants={variants}></motion.div>;
}

export default BottomModal;
