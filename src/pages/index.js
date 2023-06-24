import Head from "next/head";
import { Header, Hero } from "@/components";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;1,400;1,500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Chakra+Petch:ital,wght@0,300;0,400;1,300&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&family=Kablammo&family=Lilita+One&family=Lobster&family=Tilt+Prism&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
        />
        <script
          defer
          src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"
        ></script>
        <script
          defer
          src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"
        ></script>

        <title>Daycare Website</title>
        <meta name="description" content="Daycare" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="overflow-hidden">
        <Header />
        <Hero />
      </main>
    </>
  );
}
