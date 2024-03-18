import React, { useState } from "react";
import { satoshiRegular } from "@/styles/fonts";
import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

function ArtistsWorks({ activeSelect, setActiveSelect }: { activeSelect: string, setActiveSelect: React.Dispatch<React.SetStateAction<string>>} ) {
  const select = ["Albums", "EPs", "Singles"];

  return (
    <div className="">
      <div className="flex items-center justify-center gap-10 z-[10]">
        {select.map((sel) => {
          return (
            <motion.p
                layout
                onClick={() => setActiveSelect(sel)}
                className={`${
                satoshiRegular.className
                } px-8 py-1 hover:bg-accent hover:text-background duration-[.3s] rounded-full border-[1.5px] border-accent cursor-pointer z-[10] ${
                activeSelect === sel
                  ? "bg-accent text-background"
                  : "bg-transparent text-white"
                }`}
                key={sel}
            >
              {sel}
            </motion.p>
          );
        })}
      </div>
      <div>
        <div>
            <p>Previous Artist</p>
        </div>
        <div></div>
        <div>
            <p>Next Artist</p>
        </div>
      </div>
    </div>
  );
}

export default ArtistsWorks;
