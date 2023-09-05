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
import { socials } from "@/utils/socials";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
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

        <title>Addis-Maya Playschool</title>
        <meta
          name="description"
          content="Welcome to Addis-Maya Playschool. We provide quality early childhood education."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/main-logo.jpeg" />

        {/* Open Graph and Twitter Card tags for social sharing */}
        <meta property="og:title" content="Addis-Maya Playschool" />
        <meta
          property="og:description"
          content="Welcome to Addis-Maya Playschool. We provide quality early childhood education."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.addis-maya.com" />
        <meta
          property="og:image"
          content="https://www.addis-maya.com/main-logo.jpeg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Addis-Maya Playschool" />
        <meta
          name="twitter:description"
          content="Welcome to Addis-Maya Playschool. We provide quality early childhood education."
        />
        <meta
          name="twitter:image"
          content="https://www.addis-maya.com/main-logo.jpeg"
        />
      </Head>
      <main className="overflow-hidden">
        <Header />
        <Hero />
        <About />
        <Program />
        <Information />
        <ParentsCorner />
        <Contact />
        <Footer />
        <div className="fixed top-[50%] translate-y-[-50%] right-0 h-[200px] text-4xl text-[#f38600] !hover:text-[#4035c0] bg-[#27980b53] w-[40px] rounded-md flex flex-col items-center justify-center gap-8">
          {socials.map((social) => (
            <div key={social.id} className="hover:scale-[1.01]">
              <a href={social.link} target="_blank" rel="noreferrer">
                {social.icon}
              </a>
            </div>
          ))}
        </div>
      </main>
      <ToastContainer />
    </>
  );
}
