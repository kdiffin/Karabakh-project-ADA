import React, { ReactNode, useState } from "react";
import { BsChevronDoubleRight } from "react-icons/bs";
import { FaAngleDoubleRight, FaShareSquare } from "react-icons/fa";
import Popup from "./Popup";
import { useAtom } from "jotai";
import { HideNavbarAtom } from "~/state/atoms";

function InfoSquareText(props: {
  header: ReactNode;
  paragraph: ReactNode;
  isHomeText?: boolean;
  information: ReactNode;
}) {
  //this component is used in consts.jsx
  const [popupToggle, setPopupToggle] = useState(false);
  const [hideNavbar, setHideNavbar] = useAtom(HideNavbarAtom);

  return (
    <>
      <div className="">
        <p className="mb-2 text-xl font-semibold">{props.header}</p>
        <p className="">{props.paragraph}</p>
        {props.isHomeText ? (
          <a
            href="#Before-the-war"
            className="white group flex items-center justify-center"
          >
            {" "}
            <BsChevronDoubleRight
              size={15}
              className=" absolute bottom-3 right-3 transition-all   duration-500 active:scale-50 group-hover:rotate-90"
            />
          </a>
        ) : (
          <div
            onClick={() => {
              setPopupToggle(true);
              setHideNavbar(true);
            }}
            className="  absolute bottom-2 right-2 cursor-pointer   transition duration-100  active:scale-75    "
          >
            <div className="flex animate-pulse items-center justify-center">
              <FaShareSquare size={15} />
            </div>
          </div>
        )}
      </div>
      {popupToggle ? (
        <Popup
          setPopup={setPopupToggle}
          header={props.header}
          information={props.information}
        />
      ) : (
        <></>
      )}
    </>
  );
}

export default InfoSquareText;
