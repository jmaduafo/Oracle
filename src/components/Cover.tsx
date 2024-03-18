import React from "react";
import { motion} from "framer-motion";

function Cover({ children, rounded, visible }: { children: React.ReactNode, rounded: boolean, visible: boolean }) {
  const easing = [0.65, 0, 0.35, 1];

  return (
    
    <motion.div
        initial={{ opacity: visible ? 1 : 0 }}
        whileHover={{ opacity: 1, transition: { duration: 0.3, ease: easing } }}
        className={`absolute ${rounded ? 'rounded-full' : 'rounded-none'} top-0 left-0 bg-background40 w-full h-full flex justify-center items-center z-[8] ${visible ? 'visible' : 'invisible'} group-hover:visible`}
        >
            {children}
    </motion.div>
  );
}

export default Cover;
