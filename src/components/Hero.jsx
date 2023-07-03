import { FirstHero, HeroIntro, SecondHero, ThirdHero } from ".";
import Image from "next/image";

const Hero = () => {
  return (
    <div id="Home" className="pt-[90px] md:pt-[100px] lg:pt-[120px]">
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
            <Image src="/hero1.jpg" fill alt="hero" className="heroImage" />
            <HeroIntro />
          </div>

          <div className="item heroContainer">
            <Image src="/hero2.jpg" fill alt="hero" className="heroImage" />
            <FirstHero />
          </div>

          <div className="item heroContainer">
            <Image src="/hero3.jpg" fill alt="hero" className="heroImage" />
            <SecondHero />
          </div>

          <div className="item heroContainer">
            <Image src="/hero4.jpg" fill alt="hero" className="heroImage" />
            <ThirdHero />
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
