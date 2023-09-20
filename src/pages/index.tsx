import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import ContactInfo from "~/components/ContactInfo";
import InfoSquare from "~/components/InfoSquare";
import InformationPopup from "~/components/InformationPopup";
import Navbar from "~/components/Navbar";
import Section from "~/components/Section";
import {
  INFO_GLOBAL_PERSPECTIVE,
  INFO_OVERVIEW,
  INFO_BEFORE,
  INFO_AFTER_WAR,
  INFO_HOME,
  INFO_SHUSHA,
} from "~/components/SectionInformation";

export default function Home() {
  //this is done using the react-intersection-observer api
  //https://github.com/thebuilder/react-intersection-observer
  const { ref: homeRef, inView: homeIsVisible } = useInView();
  const { ref: BeforeTheWarRef, inView: BeforeTheWarIsVisible } = useInView();
  const { ref: afterTheWarRef, inView: afterTheWarIsVisible } = useInView();
  const { ref: overviewRef, inView: overviewIsVisible } = useInView();
  const { ref: globalRef, inView: globalIsVisible } = useInView();
  const { ref: shushaRef, inView: shushaIsVisible } = useInView();
  const [showInformationPopup, setShowInformationPopup] = useState(false);

  //cou;ldnt use state cuz of inf rerender thing
  let infoInsideSquare = <h1>what</h1>;
  if (homeIsVisible) {
    infoInsideSquare = INFO_HOME;
  } else if (BeforeTheWarIsVisible) {
    infoInsideSquare = INFO_BEFORE;
  } else if (overviewIsVisible) {
    infoInsideSquare = INFO_OVERVIEW;
  } else if (afterTheWarIsVisible) {
    infoInsideSquare = INFO_AFTER_WAR;
  } else if (globalIsVisible) {
    infoInsideSquare = INFO_GLOBAL_PERSPECTIVE;
  } else if (shushaIsVisible) {
    infoInsideSquare = INFO_SHUSHA;
  }

  return (
    <>
      <Head>
        <title>2nd Karabakh war</title>
        <meta
          name="description"
          content="Explore the Second Nagorno-Karabakh War, a 44-day conflict that unfolded in 2020. Delve into its historical context, major events, aftermath, and geopolitical impact."
        />
      </Head>

      <main>
        <div className=" overflow-overlay edge flex h-screen snap-both snap-mandatory scroll-smooth font-Poppins text-white">
          <Navbar openPopup={() => setShowInformationPopup(true)} />
          <div className="flex-none flex-col">
            <Section
              id="Home"
              bgclassName="home-background"
              uniqueRef={homeRef}
            />
            <Section
              uniqueRef={overviewRef}
              id="Overview"
              bgclassName="Overview-background"
            />
            <Section
              uniqueRef={BeforeTheWarRef}
              id="Before-the-war"
              bgclassName="before-the-war-background"
            />
            <Section
              uniqueRef={afterTheWarRef}
              id="After-the-war"
              bgclassName="after-the-war-background"
            />
          </div>
          <div className="flex-none flex-col">
            <Section
              id="Global-Perspective"
              uniqueRef={globalRef}
              bgclassName="global-perspective-background"
            />
            <Section
              id="The-Turning-Point"
              uniqueRef={shushaRef}
              bgclassName="shusha-background"
            />
          </div>
          <InfoSquare content={infoInsideSquare} />
        </div>
      </main>

      {showInformationPopup ? (
        <InformationPopup closePopup={() => setShowInformationPopup(false)} />
      ) : (
        <></>
      )}
    </>
  );
}
