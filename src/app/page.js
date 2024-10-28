// import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Thar Dairy</title>
        <meta
          name="description"
          content="Pure Gold from the Heart of the Thar Desert"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HeroSection />
      </main>
    </>
  );
}
