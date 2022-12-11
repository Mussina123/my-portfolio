import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillFilePersonFill } from "react-icons/bs";
import Resume from "../images/SWE-TB-Resume.pdf";

export default function SideBar() {
  const socials = [
    {
      id: 1,
      child: (
        <>
          <AiFillGithub size={40} />
        </>
      ),
      href: "https://github.com/Mussina123",
    },
    {
      id: 2,
      child: (
        <>
          <BsLinkedin size={40} />
        </>
      ),
      href: "https://www.linkedin.com/in/tyler-beck-webdev/",
    },
    {
      id: 3,
      child: (
        <>
          <HiOutlineMail size={40} />
        </>
      ),
      href: "mailto:softwaretpd2035@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          <BsFillFilePersonFill size={40} />
        </>
      ),
      href: Resume,
      download: true,
    },
  ];

  return (
    <div className="container">
      <div className="flex flex-row justify-center lg:flex lg:flex-col lg:top-[35%] lg:left-0 lg:fixed">
        {socials.map(({ id, child, href, download }) => (
          <ul key={id} className="">
            <a href={href} download={download} target="_blank" rel="noreferrer">
              <li className="pt-5 pr-4 pl-4 pb-2 hover:scale-110">{child}</li>
            </a>
          </ul>
        ))}
      </div>
    </div>
  );
}
