import Image from "next/image";
import { HeroContent } from ".";

const Hero = () => {
  return (
    <div id="Home" className="pt-[90px] md:pt-[100px]">
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li
            data-target="#myCarousel"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
          <li data-target="#myCarousel" data-slide-to="3"></li>
        </ol>

        <div className="carousel-inner h-[182px] md:h-[330px] lg:h-[430px] xl:h-[540px] 2xl:h-[590px]">
          <div className="item active heroContainer relative">
            <Image src="/gallery1.jpeg" fill alt="hero" className="heroImage" />
            <HeroContent firstText="Inquiry &" secondText="Exploration" />
          </div>

          <div className="item heroContainer">
            <Image src="/hero13.jpeg" fill alt="hero" className="heroImage" />
            <HeroContent firstText="Engaging &" secondText="Stimulating" />
          </div>

          <div className="item heroContainer">
            <Image src="/hero144.jpeg" fill alt="hero" className="heroImage" />
            <HeroContent firstText="Caring &" secondText="Communicator" />
          </div>

          <div className="item heroContainer">
            <Image src="/hero12.jpeg" fill alt="hero" className="heroImage" />
            <HeroContent firstText="Agency &" secondText="Reflective" />
          </div>
        </div>

        <a
          className="left carousel-control"
          href="#myCarousel"
          data-slide="prev"
        >
          <span className="glyphicon glyphicon-chevron-left"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="right carousel-control"
          href="#myCarousel"
          data-slide="next"
        >
          <span className="glyphicon glyphicon-chevron-right"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Hero;
