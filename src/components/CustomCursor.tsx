import React, { useEffect } from 'react';
import { motion, useMotionValue } from 'framer-motion';

interface CustomCursorProps {
  isHovering: boolean;
}

const CustomCursor: React.FC<CustomCursorProps> = ({ isHovering }) => {
  // Initialize motion values for the cursor's X and Y positions.
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      // Adjust the offset (e.g., 16px) to center the cursor element
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [cursorX, cursorY]);

  // Define variants for the cursor's animation states.
  const variants = {
    default: {
      scale: 0.5,
      backgroundColor: 'rgba(255, 255, 255, 0.7)',
    },
    hover: {
      scale: 1.5,
      backgroundColor: 'rgba(0, 255, 221, 0.5)',
    },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-50"
      style={{
        translateX: cursorX,
        translateY: cursorY,
      }}
      variants={variants}
      animate={isHovering ? 'hover' : 'default'}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    />
  );
};

export default CustomCursor;
