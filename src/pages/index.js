import Head from "next/head";
import {
  About,
  Contact,
  Footer,
  Header,
  Hero,
  Information,
  Program,
  ParentsCorner,
} from "@/components";
import { social, socials } from "@/utils/socials";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
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
        <ParentsCorner />
        <Contact />
        <Footer />
        <div className="fixed top-[50%] translate-y-[-50%] right-0 h-[200px] text-4xl text-[#4035c0] !hover:text-[#4035c0] bg-[#eaea83c6] w-[40px] rounded-md flex flex-col items-center justify-center gap-8">
          {socials.map((social) => (
            <div key={social.id} className="hover:scale-[1.01]">
              <a href={social.link} target="_blank" rel="noreferrer">
                {social.icon}
              </a>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
