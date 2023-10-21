import React, { ReactNode } from "react";

function Popup(props: {
  closePopup: React.MouseEventHandler<HTMLDivElement>;
  header: ReactNode;
  information: ReactNode;
}) {
  return (
    <div
      className={`fixed  left-0  top-0 z-50 h-screen w-screen bg-black/70 transition-all`}
    >
      <div className="flex h-screen w-full justify-center  ">
        <div className="overflow-overlay relative m-5 h-[93%] w-[95%] bg-black/70 px-10 py-20 sm:m-10 sm:w-5/6  md:ml-20  md:px-20">
          <div
            className="absolute right-3 top-1 cursor-pointer p-5 text-xl font-semibold transition-all  active:scale-75"
            onClick={props.closePopup}
          >
            X
          </div>
          <div className="flex  flex-col  justify-center">
            <p className="text-center text-3xl font-semibold ">
              {props.header}
            </p>
            <div className="flex items-center justify-center ">
              <p className="mt-4 max-w-screen-md  text-2xl [&>p]:mt-10">
                {" "}
                {props.information}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
