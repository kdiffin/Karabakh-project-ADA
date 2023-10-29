import React, { ReactNode } from "react";
import { BsGithub } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

function InformationPopup(props: {
  closePopup: React.MouseEventHandler<HTMLDivElement>;
}) {
  //may be needed later on
  //   function ParagraphComponent(props: { children: ReactNode }) {
  //     return (
  //       <>
  //         <div className="p-2 text-2xl">{props.children}</div>
  //       </>
  //     );
  //   }

  return (
    <div
      className={`fixed  left-0  top-0 z-50 h-screen w-screen bg-black/70 transition-all`}
    >
      <div className=" flex h-screen w-full items-center justify-center text-white  ">
        <div className="overflow-overlay relative max-h-[95vh] w-[95%] bg-black/70 px-20 py-20 sm:m-10   sm:ml-20  sm:w-3/4">
          <div
            className="absolute right-3 top-1 cursor-pointer p-5 text-xl font-semibold text-white transition-all  active:scale-75"
            onClick={props.closePopup}
          >
            X
          </div>

          <div className="flex  flex-col  justify-center">
            <p className="mb-2 text-3xl font-semibold ">
              Some things to be aware of before proceeding:
            </p>

            <div className="flex flex-col gap-2 p-4">
              <div>
                {" "}
                <p className="text-2xl ">The team consists of 2 members:</p>
                <div className="flex flex-col gap-4 p-6">
                  <p className="flex items-center gap-2 text-xl ">
                    Davud Ibrahim: Lead Engineer and Designer
                  </p>

                  <p className="flex items-center gap-2 text-xl ">
                    Eldar Verdiyev: Content Manager and Researcher
                  </p>
                </div>
              </div>

              <hr className="mb-6 border-gray-500" />

              <div>
                <p className="text-2xl ">
                  This site is open source! if you have any suggestions feel
                  free to:
                </p>

                <div className="flex flex-col gap-4 p-6">
                  <p className="flex items-center gap-2 text-xl ">
                    Send me an Email:{" "}
                    <a
                      href="mailto:ibra.davud@gmail.com"
                      target="_blank"
                      className="mt-1"
                      rel="noopener noreferrer"
                    >
                      <SiGmail size={20} />
                    </a>
                  </p>

                  <p className="flex items-center gap-2 text-xl ">
                    Submit a pull request:
                    <a
                      href="https://github.com/kdiffin/Karabakh-project-ADA/tree/main"
                      target="_blank"
                      className="mt-1"
                      rel="noopener noreferrer"
                    >
                      <BsGithub size={20} />
                    </a>
                  </p>
                </div>

                <hr className="mb-6 border-gray-500" />

                <div>
                  <p className="text-2xl ">References (links): </p>
                  <ul className="flex list-disc flex-col gap-4 p-6 hover:[&>*]:underline">
                    <li>
                      <a
                        href="https://genprosecutor.gov.az/en/page/azerbaycan/i-ve-ii-qarabag-muharibesi/44-gun-suren-veten-muharibesi-ii-qarabag-muharibesi
                  "
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-xl "
                      >
                        https://genprosecutor.gov.az/en/page/azerbaycan/i-ve-ii-qarabag-muharibesi/44-gun-suren-veten-muharibesi-ii-qarabag-muharibesi
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://www.virtualkarabakh.az/"
                        className="flex items-center gap-2 text-xl "
                      >
                        https://www.virtualkarabakh.az/
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://44days.info/
                      "
                        className="flex items-center gap-2 text-xl "
                      >
                        https://44days.info/
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://mod.gov.az/en/armenia-azerbaijan-conflict-599/
                      "
                        className="flex items-center gap-2 text-xl "
                      >
                        https://mod.gov.az/en/armenia-azerbaijan-conflict-599/
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://president.az/en/pages/view/azerbaijan/karabakh2/"
                        className="flex items-center gap-2 text-xl"
                      >
                        https://president.az/en/pages/view/azerbaijan/karabakh2/
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InformationPopup;
