import Head from "next/head";
import { Header, Hero } from "@/components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Daycare Website</title>
        <meta name="description" content="Daycare" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Hero />
      </main>
    </>
  );
}
