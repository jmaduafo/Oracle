import React from "react";
import { motion} from "framer-motion";

function Cover({ children, rounded }: { children: React.ReactNode, rounded: boolean }) {
  const easing = [0.65, 0, 0.35, 1];

  return (
    
    <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1, transition: { duration: 0.3, ease: easing } }}
        className={`absolute ${rounded ? 'rounded-full' : 'rounded-none'} top-0 left-0 bg-background30 w-full h-full flex justify-center items-center z-[8] invisible group-hover:visible`}
        >
            {children}
    </motion.div>
  );
}

export default Cover;
