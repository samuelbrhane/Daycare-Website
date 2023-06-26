import { FirstHero, HeroIntro, SecondHero, ThirdHero } from ".";

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

        <div className="carousel-inner">
          <div className="item active heroContainer relative">
            <img
              src="https://www.pexels.com/photo/girl-in-red-dress-3661553/"
              alt="hero"
              className="heroImage"
            />
            <HeroIntro />
          </div>

          <div className="item heroContainer">
            <img
              src="https://images.unsplash.com/photo-1615489548573-8165c2c35e1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGRheWNhcmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
              alt="hero"
              className="heroImage"
            />
            <FirstHero />
          </div>

          <div className="item heroContainer">
            <img
              src="https://images.pexels.com/photos/3662667/pexels-photo-3662667.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="hero"
              className="heroImage"
            />
            <SecondHero />
          </div>

          <div className="item heroContainer">
            <img
              src="https://images.unsplash.com/photo-1567746455504-cb3213f8f5b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGF5Y2FyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="hero"
              className="heroImage"
            />
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
