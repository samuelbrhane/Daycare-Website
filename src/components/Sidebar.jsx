import { links } from "@/utils/links";
import React from "react";
import { Link } from "react-scroll";

const Sidebar = () => {
  return (
    <div className="flex flex-col items-center gap-6">
      {links.map((link) => (
        <div key={link.id}>
          <Link
            offset={link.title === "Home" ? -75 : -10}
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
  );
};

export default Sidebar;
