import React from "react";
import { MdInfo } from "react-icons/md";

function Navbar({ openPopup }: { openPopup: VoidFunction }) {
  const wonders = [
    { name: "Home", id: "#Home" },
    { name: "Overview", id: "#Overview" },
    { name: "Before  War", id: "#Before-the-war" },
    { name: "After War", id: "#After-the-war" },
    { name: "Global Perspective", id: "#Global-Perspective" },
    { name: "Turning Point", id: "#The-Turning-Point" },
  ];
  return (
    <div className="group absolute  left-0 top-0 flex h-12 w-full  items-center justify-center bg-black/80 text-white backdrop-blur-xl">
      <p
        className="pointer-events-none absolute   left-0
   right-0 select-none text-center   text-2xl font-semibold opacity-100 transition-all duration-700   group-hover:opacity-0 "
      >
        The Second Karabakh War.
      </p>

      <div
        className="flex gap-2 opacity-0 transition-all 
        duration-700  group-hover:opacity-100"
      >
        {wonders.map((wonder, i) => {
          return (
            <a
              key={i}
              href={wonder.id}
              className="navbar-item--hover mx-5 cursor-pointer text-lg active:scale-90"
            >
              {wonder.name}
            </a>
          );
        })}
      </div>

      <MdInfo
        onClick={openPopup}
        size={24}
        className="absolute right-6 cursor-pointer active:scale-90"
      />
    </div>
  );
}

export default Navbar;
