import React from 'react'
import { motion } from 'framer-motion';
import { Cursor } from '@/type/types';

function CustomCursor({ x, y, isHovered, className, children }: Cursor) {
    const easing: readonly number[] = [0, 0.55, 0.45, 1];

    return (
        <motion.div
          initial={{ opacity: isHovered ? 0 : 1, scale: isHovered ? 0.5 : 1 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0.5,
            x: x,
            y: y,
          }}
          // exit={{ opacity: isHovered ? 0 : 1, scale: isHovered ? .5 : 1}}
          transition={{ duration: 0.5, ease: easing }}
          // Makes sure that cursor is invisible when artist container is not hovered over
          className={`${
            isHovered ? "visible" : "invisible"
          } z-[100] fixed top-0 left-0 pointer-events-none rounded-full ${className} flex justify-center items-center`}
        >
          {children}
        </motion.div>
    );
}

export default CustomCursor