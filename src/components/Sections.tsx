import React from "react";

function Sections({ closeSections }: { closeSections: VoidFunction }) {
  const navbarItems = [
    { name: "Home", id: "#Home" },
    { name: "Overview", id: "#Overview" },
    { name: "Before  War", id: "#Before-the-war" },
    { name: "After War", id: "#After-the-war" },
    { name: "Global Perspective", id: "#Global-Perspective" },
    { name: "Turning Point", id: "#The-Turning-Point" },
  ];

  return (
    <div
      className={`fixed  left-0  top-0 z-50 h-screen w-screen bg-black/70 transition-all`}
    >
      <div className="flex h-screen w-full items-center justify-center text-white  ">
        <div className="overflow-overlay relative m-10  w-[90%] bg-black/70 px-20   py-20  sm:w-3/4">
          <div
            className="absolute right-3 top-1 cursor-pointer p-5 text-xl font-semibold transition-all  active:scale-75"
            onClick={closeSections}
          >
            X
          </div>

          <div className="flex flex-col items-center justify-center gap-8">
            {navbarItems.map((item, i) => {
              return (
                <a
                  key={i}
                  href={item.id}
                  className="navbar-item--hover mx-5  cursor-pointer text-center  text-3xl active:scale-90"
                >
                  {item.name}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sections;
