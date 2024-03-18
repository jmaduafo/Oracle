import React, { useState } from "react";
import { satoshiRegular } from "@/styles/fonts";
import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { Collections, ArtistProps } from "@/type/types";

type Works = {
  activeSelect: string;
  setActiveSelect: React.Dispatch<React.SetStateAction<string>>;
  selectedCollectionArray: Collections[] | undefined | null;
  setSelectedCollectionArray: React.Dispatch<
    React.SetStateAction<Collections[] | null | undefined>
  >;
  artistInfo: ArtistProps
}

function ArtistsWorks({
  activeSelect,
  setActiveSelect,
  selectedCollectionArray,
  setSelectedCollectionArray,
  artistInfo
}: Works 
) {

  const select = ["Albums", "EPs", "Singles"];

  function activeSelection(selection: string) {
    setActiveSelect(selection);
    if (selection === 'Albums') {
      setSelectedCollectionArray(artistInfo.albums)
    } else if (selection === 'EPs') {
      setSelectedCollectionArray(artistInfo.eps)
    } else if (selection === 'Singles') {
      setSelectedCollectionArray(artistInfo.singles)
    }
  }

  return (
    <div className="">
      <div className="flex items-center justify-center gap-10 z-[10]">
        {select.map((sel) => {
          return (
            <motion.p
              layout
              onClick={() => activeSelection(sel)}
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
      <div className="flex items-center justify-center gap-10 mt-10">
        <div className="z-[10]">
          <p>Previous Artist</p>
        </div>
        <div className="z-[10] flex items-center gap-6">
          {/* <ChevronLeftIcon className="w-10 cursor-pointer" strokeWidth={2} color="#fff"/> */}
          <div className="w-[40vw] rounded-2xl overflow-x-auto p-2">
            <div className="w-fit flex flex-nowrap gap-2">
              {[1, 2, 3, 4, 5, 6, 7].map(ele => {
                return (
                  <div key={ele} className="w-[120px] h-[120px] bg-white rounded-xl"></div>
                )
              })}

            </div>

           
          </div>
          {/* <ChevronRightIcon className="w-10 cursor-pointer" strokeWidth={2} color="#fff"/> */}
        </div>
        <div className="z-[10]">
          <p>Next Artist</p>
        </div>
      </div>
    </div>
  );
}

export default ArtistsWorks;
