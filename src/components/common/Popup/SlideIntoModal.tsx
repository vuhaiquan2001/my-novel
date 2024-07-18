import React, { useState, useEffect, CSSProperties } from "react";
import { motion, AnimatePresence } from "framer-motion";
// Định nghĩa các loại transition có thể sử dụng trong Framer Motion
type TweenTransition = {
  type: "tween";
  duration?: number;
  ease?:
    | "linear"
    | "easeIn"
    | "easeOut"
    | "easeInOut"
    | "circIn"
    | "circOut"
    | "backIn"
    | "backOut"
    | "anticipate"
    | string;
};

type SpringTransition = {
  type: "spring";
  damping?: number;
  stiffness?: number;
  duration?: number;
};

type KeyframesTransition = {
  type: "keyframes";
  values: number[];
  times?: number[];
  duration?: number;
};

type InertiaTransition = {
  type: "inertia";
  velocity?: number;
};

type CrossfadeTransition = {
  type: "crossfade";
};

// Union type của tất cả các loại transition
type TransitionType =
  | TweenTransition
  | SpringTransition
  | KeyframesTransition
  | InertiaTransition
  | CrossfadeTransition;

interface SlideModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  duration: number;
  fadeDuration?: number | undefined;
  transition?: TransitionType | undefined;
  direction: "left" | "right" | "top" | "bottom";
  position?: "left" | "right" | "top" | "bottom" | "center";
  overlayColor?: string;
  style?: CSSProperties;
  className?: string;
  zIndex?: number;
}

const initialTransition: TransitionType = {
  // type: "spring": Đây là loại hiệu ứng sử dụng spring (nhu động). Spring là một loại hiệu ứng chuyển động mềm mại,
  // cho phép phần tử bật lại và dao động một chút trước khi đạt đến vị trí cuối cùng.
  type: "spring",
  // damping: Đây là độ giảm của spring. Nó điều chỉnh mức độ mịn màng của chuyển động.
  // Giá trị damping càng cao, chuyển động sẽ càng dừng lại nhanh hơn.
  damping: 50,
  // stiffness: Đây là độ cứng của spring. Nó ảnh hưởng đến tần số và cường độ của các dao động.
  //  Giá trị stiffness càng cao, spring sẽ dao động nhanh hơn và dừng lại nhanh hơn.
  stiffness: 500,
  duration: 0.3,
};

const SlideModal: React.FC<SlideModalProps> = ({
  isOpen,
  onClose,
  children,
  duration = 0.3,
  fadeDuration = 0.2,
  transition = initialTransition,
  direction = "right",
  position = "center",
  overlayColor = "rgba(0, 0, 0, 0.5)",
  style,
  className,
  zIndex = 1000,
}) => {
  const [shouldRender, setShouldRender] = useState(isOpen);

  useEffect(() => {
    if (isOpen) setShouldRender(true);
  }, [isOpen]);

  const handleAnimationComplete = () => {
    if (!isOpen) setShouldRender(false);
  };

  const directionVariants = {
    left: { x: "-100%" },
    right: { x: "100%" },
    top: { y: "-100%" },
    bottom: { y: "100%" },
  };

  const modalVariants = {
    hidden: directionVariants[direction],
    visible: { x: 0, y: 0 },
    exit: directionVariants[direction],
  };
  const getPositionStyle = () => {
    switch (position) {
      case "left":
        return { left: 0, top: 0, bottom: 0 };
      case "right":
        return { right: 0, top: 0, bottom: 0 };
      case "top":
        return { top: 0, left: 0, right: 0 };
      case "bottom":
        return { bottom: 0, left: 0, right: 0 };
      default:
        return {
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        };
    }
  };
  // unmount on close
  if (!shouldRender) return null;

  return (
    <AnimatePresence onExitComplete={handleAnimationComplete}>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: fadeDuration }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: overlayColor,
            display: "flex",
            zIndex: zIndex,
          }}
          onClick={onClose}
        >
          <motion.div
            className={className || ""}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalVariants}
            transition={{ ...transition, duration }}
            style={{ ...getPositionStyle(), ...style, position: "absolute" }}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SlideModal;
