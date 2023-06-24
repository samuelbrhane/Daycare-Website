import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <section>
      <div className="fixed top-0 left-0 w-full bg-white px-4 md:px-12 lg:px-16 xl:px-20 py-2 shadow-md flex justify-between items-center z-50">
        {/* header logo */}
        <div className="relative w-[100px] h-[80px] md:w-[120px] md:h-[100px] lg:w-[150px] lg:h-[115px] xl:w-[170px] xl:h-[130px] 2xl:w-[185px] 2xl:h-[140px]">
          <img src="/logo-bg.png" alt="logo-bg" className="w-full h-full" />
          <img
            src="/logo.png"
            alt="logo"
            className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
          />
        </div>

        {/* header links for large screen */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-20">
          <Link href="/" className="link">
            <p>Home</p>
            <img src="/home.png" alt="home" className="linkImage" />
          </Link>
          <Link href="/program" className="link">
            <p>Program</p>
            <img src="/program.png" alt="program" className="linkImage" />
          </Link>
          <Link href="/schedule" className="link">
            <p>Schedule</p>
            <img src="/schedule.png" alt="schedule" className="linkImage" />
          </Link>
          <Link href="/information" className="link">
            <p>Information</p>
            <img src="/info.png" alt="information" className="linkImage" />
          </Link>
          <Link href="/about-us" className="link">
            <p>About Us</p>
            <img src="/about-us.png" alt="about-us" className="linkImage" />
          </Link>
          <Link href="/contact-us" className="link">
            <p>Contact Us</p>
            <img src="/contact.png" alt="contact-us" className="linkImage" />
          </Link>
        </div>

        {/* small screen menu icon */}
        <img
          src="/menu.png"
          alt="menu-icon"
          className="w-[100px] h-[80px] lg:hidden"
        />
      </div>
      {/* sidebar links for small screen */}
      <div className={`fixed top-0 bottom-0 w-[200px] left-0 lg:hidden`}></div>
    </section>
  );
};

export default Header;
