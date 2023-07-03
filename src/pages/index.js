import Head from "next/head";
import { About, Header, Hero, Information, Program } from "@/components";

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
        <Program />
        <Information />
        <About />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.973344989569!2d38.860547274672776!3d9.066192590996614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b852e7090e477%3A0x7269a2c279e47924!2zRmFtaWx5IERheWNhcmUg4Y2L4Yia4YiKIOGLqOGIheGNg-GKk-GJtSDhiJvhiYbhi6s!5e0!3m2!1sen!2set!4v1688388730391!5m2!1sen!2set"
          className="w-full h-[500px]"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </main>
    </>
  );
}
