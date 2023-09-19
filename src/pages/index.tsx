import Head from "next/head";
import Link from "next/link";
import Navbar from "~/components/Navbar";
import Section from "~/components/Section";

export default function Home() {
  return (
    <>
      <Head>
        <title>2nd Karabakh war</title>
        <meta
          name="description"
          content="Explore the Second Nagorno-Karabakh War, a 44-day conflict that unfolded in 2020. Delve into its historical context, major events, aftermath, and geopolitical impact.

"
        />
      </Head>
      <main>
        <div className=" font-Poppins overflow-overlay flex h-screen snap-both snap-mandatory scroll-smooth text-white">
          <Navbar />
        </div>
      </main>
    </>
  );
}
