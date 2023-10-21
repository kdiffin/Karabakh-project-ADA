import React from "react";

function Section(props: {
  id: string;
  bgclassName: any;
  uniqueRef: React.LegacyRef<HTMLDivElement> | undefined;
}) {
  return (
    <section
      id={props.id}
      className={`grid-none w-screen flex-none snap-center
    bg-black bg-cover bg-no-repeat
    ${props.bgclassName} 

      h-screen text-white    `}
    >
      <div className=" relative h-screen w-screen items-center justify-center">
        <div
          className="left-1/2 top-1/2 z-50 h-3/4 w-3/4    translate-x-1/4 translate-y-1/4 bg-red-900 opacity-0"
          ref={props.uniqueRef}
        ></div>
      </div>
    </section>
  );
}

export default Section;
