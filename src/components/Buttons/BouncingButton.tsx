import React, { ReactNode } from "react";
import { motion, MotionProps, Variant } from "framer-motion";

const variants: { [key: string]: Variant } = {
  // Bạn có thể thêm các variants cụ thể ở đây nếu cần
};

// Tạo type mới kết hợp MotionProps và HTMLButtonElement
type BouncingButtonProps = MotionProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children?: ReactNode;
  };

function BouncingButton({
  children,
  className,
  ...props
}: BouncingButtonProps) {
  return (
    <motion.button
      className={className}
      {...props}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      variants={variants}
    >
      {children}
    </motion.button>
  );
}

export default BouncingButton;
