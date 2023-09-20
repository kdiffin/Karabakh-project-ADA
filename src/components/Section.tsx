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
      <div className="flex h-full w-full items-center justify-center">
        <div
          className="left-56 top-36 h-3/4   w-3/4 opacity-0"
          ref={props.uniqueRef}
        ></div>
      </div>
    </section>
  );
}

export default Section;
