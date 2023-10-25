import React from "react";
import { MdInfo, MdMenu } from "react-icons/md";

function Navbar({
  openPopup,
  openMenu,
}: {
  openPopup: VoidFunction;
  openMenu: VoidFunction;
}) {
  const navbarItems = [
    { name: "Home", id: "#Home" },
    { name: "Overview", id: "#Overview" },
    { name: "Before  War", id: "#Before-the-war" },
    { name: "After War", id: "#After-the-war" },
    { name: "Global Perspective", id: "#Global-Perspective" },
    { name: "Turning Point", id: "#The-Turning-Point" },
  ];

  return (
    <div className=" fixed  left-0 top-0 z-[1]   w-full    text-white backdrop-blur-xl">
      <div className="group relative z-10 flex w-full items-center justify-center bg-black/80 p-2">
        <p className="  text-center   text-2xl font-semibold opacity-100  transition-all duration-700   md:group-hover:opacity-0 ">
          The Second Karabakh War.
        </p>

        <div className="absolute hidden flex-1 gap-2 opacity-0 transition-all  duration-700 md:flex md:group-hover:opacity-100 ">
          {navbarItems.map((item, i) => {
            return (
              <a
                key={i}
                href={item.id}
                className="navbar-item--hover mx-5 cursor-pointer text-lg active:scale-90"
              >
                {item.name}
              </a>
            );
          })}
        </div>

        <MdMenu
          onClick={openMenu}
          size={24}
          className="absolute left-6 flex cursor-pointer active:scale-90 md:hidden"
        />

        <MdInfo
          onClick={openPopup}
          size={24}
          className="absolute right-6 cursor-pointer active:scale-90"
        />
      </div>
    </div>
  );
}

export default Navbar;
{
  /* <p
        className=" absolute   left-0
   right-0  text-center   text-2xl font-semibold opacity-100  transition-all duration-700   md:group-hover:opacity-0 "
      >
        The Second Karabakh War.
      </p>

      <div
        className="flex gap-2 bg-red-900 opacity-0 transition-all duration-700 
        hover:opacity-100  md:group-hover:opacity-100"
      >
        {navbarItems.map((item, i) => {
          return (
            <a
              key={i}
              href={item.id}
              className="navbar-item--hover mx-5 cursor-pointer text-lg active:scale-90"
            >
              {item.name}
            </a>
          );
        })}
      </div>

      <MdInfo
        onClick={openPopup}
        size={24}
        className="absolute right-6 cursor-pointer active:scale-90"
      />
    </div> */
}
