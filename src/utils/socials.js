import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import { MdEmail } from "react-icons/md";

export const socials = [
  {
    id: 3,
    name: "email",
    icon: <MdEmail />,
    link: "mailto:info@addis-maya.com?",
  },
  {
    id: 4,
    name: "linkedin",
    icon: <ImLinkedin />,
    link: "https://www.linkedin.com/company/addis-maya-play-school/",
  },
  {
    id: 1,
    name: "facebook",
    icon: <BsFacebook />,
    link: "https://www.facebook.com/people/Addis-Maya-Playschool/61550663834708/",
  },
  {
    id: 2,
    name: "twitter",
    icon: <AiFillTwitterCircle />,
    link: "https://www.twitter.com/1addismaya",
  },
];
