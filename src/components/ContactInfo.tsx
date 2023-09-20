import React, { ReactNode } from "react";
import { FaDiscord, FaGithub, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function ContactInfo() {
  const SocialsItem = (props: {
    last?: boolean;
    link: string;
    children: ReactNode;
  }) => (
    <div
      className={`${
        !props.last && "border-b-2"
      } flex w-full justify-center  border-b-white/20 py-3`}
    >
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        {props.children}
      </a>
    </div>
  );

  return (
    <div className="group">
      <div className="absolute right-0 top-[40%] z-10 flex   h-64 w-8 flex-col justify-center rounded-bl-lg rounded-tl-lg bg-gray-700/70  transition-all duration-300 group-hover:w-12">
        <>
          <p className="vertical-text pointer-events-none absolute left-[10%] top-4 mb-4 flex select-none items-center justify-center font-semibold  opacity-100  transition-all duration-700 group-hover:opacity-0">
            Davud
          </p>
          <p className="vertical-text pointer-events-none absolute bottom-4 left-[10%] flex  select-none items-center justify-center text-center  font-semibold  opacity-100 transition-all duration-700 group-hover:opacity-0">
            Ibrahi<span className="-mt-[2px] ml-[1px] scale-[85%]">m</span>
          </p>
        </>

        <div
          className="flex flex-col items-center
           justify-evenly opacity-0     transition-all duration-700 group-hover:opacity-100"
        >
          <SocialsItem link="https://www.instagram.com/apeysincore/">
            <FaInstagram
              size={29}
              className="socials-icon transition-all duration-200"
            />
          </SocialsItem>
          <SocialsItem link="https://github.com/diffim">
            <FaGithub
              size={29}
              className="socials-icon transition-all duration-200"
            />
          </SocialsItem>

          <SocialsItem link="https://discordapp.com/users/593007920417996821">
            <FaDiscord
              size={29}
              className="socials-icon transition-all duration-200"
            />
          </SocialsItem>

          <SocialsItem
            last
            link="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=ibra.davud@gmail.com"
          >
            <SiGmail
              size={25}
              className="socials-icon transition-all duration-200"
            />
          </SocialsItem>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
