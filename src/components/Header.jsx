import { Link } from "react-scroll";
import { useState } from "react";
import { links } from "@/utils/links";
import { Sidebar } from ".";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <section>
      <div className="fixed top-0 left-0 w-full bg-white px-4 md:px-12 lg:px-16 xl:px-20 py-2 shadow-md flex justify-between items-center z-50">
        {/* header logo */}
        <div className="relative w-[160px] h-[90px] xl:w-[250px] xl:h-[140px] ">
          <img src="/logo-bg.png" alt="logo-bg" className="w-full h-full" />
          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h1 className="text-center xl:text-3xl 2xl:text-4xl text-[#a123a2] font-[Lora] font-bold">
              Addis-Maya{" "}
              <span className="2xl:text-3xl xl:text-2xl text-black font-[Lobster]">
                Daycare and Preschool
              </span>
            </h1>
          </div>
        </div>

        {/* header links for large screen */}
        <div className="links">
          {links.map((link) => (
            <div key={link.id}>
              <Link
                offset={link.title === "Home" ? -75 : -100}
                smooth={true}
                duration={500}
                style={{ cursor: "pointer" }}
                to={link.title}
                className="link"
              >
                <p>{link.title}</p>
                <img src={link.image} alt="link" className="linkImage" />
              </Link>
            </div>
          ))}
        </div>

        {/* small screen menu icon */}
        <img
          src="/menu.png"
          alt="menu-icon"
          className="w-[50px] h-[40px] lg:hidden cursor-pointer hover:scale-[1.03]"
          onClick={() => setIsSidebarOpen((prev) => !prev)}
        />
      </div>

      {/* sidebar links for small screen */}
      <div
        className={`fixed z-40 top-0 bottom-0 w-[200px] px-8 shadow-md bg-[#e4e4e4] left-0 lg:hidden pt-[110px] md:pt-[130px] ${
          isSidebarOpen
            ? "left-0 ease-in-out duration-[0.7s]"
            : "left-[-999px] ease-in-out duration-1000"
        }`}
      >
        <Sidebar />
      </div>
    </section>
  );
};

export default Header;
