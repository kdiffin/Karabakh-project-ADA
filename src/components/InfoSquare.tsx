import React, { ReactNode, useState } from "react";
import { BsChevronDoubleRight, BsChevronDoubleLeft } from "react-icons/bs";

function InfoSquare(props: { content: ReactNode }) {
  const [infoMost, setInfoMost] = useState(false);
  return (
    <div
      className={`fixed bottom-24 rounded-r-sm bg-black/[85%]  transition-all duration-700  ${
        infoMost ? "w-[90%]  p-6 md:h-36 md:w-[485px]" : "h-16 w-16 "
      } `}
    >
      {!infoMost ? (
        <div className=" flex   h-full items-center justify-center">
          <span
            onClick={() => setInfoMost(true)}
            className="cursor-pointer  active:scale-90"
          >
            <BsChevronDoubleRight size={40} />
          </span>
        </div>
      ) : (
        <>
          {" "}
          <BsChevronDoubleLeft
            size={18}
            className={`absolute    right-2
             top-2 cursor-pointer opacity-100 transition-all 
            duration-500 active:scale-75`}
            onClick={() => setInfoMost(false)}
          />
          <div>
            {" "}
            {/* props.content is located at consts.jsx */}
            <span className="infoSquareTextAnimation transition-all duration-500">
              {props.content}
            </span>
          </div>
        </>
      )}
    </div>
  );
}

export default InfoSquare;
