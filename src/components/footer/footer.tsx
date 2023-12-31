"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import useBlockRef from "@/hooks/useBlockRef";
import { AccordionContext } from "@/context/AccordionContext";
import { useContext } from "react";

type Props = {};

const Footer = (props: Props) => {
  const blockRef = useRef(null);
  const { open } = useContext(AccordionContext);
  useBlockRef({ key: "footerPosition", blockRef, open });

  const menu = [
    "Home",
    "About",
    "Skills",
    "Experience",
    "Portfolio",
    "Contact",
  ];
  const socialMenu = [
    {
      name: "LinkedIn",
      iconUrl: "/assets/svg/linked.svg",
      link: "https://www.linkedin.com/in/andrey-sorokin-dev/",
      alt: "Linkedin icon",
    },
    {
      name: "Github",
      iconUrl: "/assets/svg/github.svg",
      link: "https://github.com/Soroand/mywebsite",
      alt: "Github icon",
    },
    {
      name: "Telegram",
      iconUrl: "/assets/svg/telegram.svg",
      link: "https://t.me/sorokin_andrey1990",
      alt: "Telegram icon",
    },
  ];

  return (
    <div
      ref={blockRef}
      className="bg-portfolio_main_bg mt-[80px] md:mt-[160px]"
    >
      <div className="flex flex-col max-w-[1000px] py-[60px] md:py-[120px] items-center text-center mx-auto text-text_white">
        <h2 className="text-text_footer_dark text-[48px] font-600">
          Andrey Sorokin
        </h2>
        <ul className="flex flex-wrap justify-center text-text_black mt-[50px] gap-[2rem] font-[600] hover:cursor-pointer">
          {menu.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
        {/* social icons blocks */}
        <div className="flex gap-[2rem] mt-[65px]">
          {socialMenu.map((item, index) => {
            return (
              <div
                key={item.name}
                className="flex p-[14px] items-center justify-center bg-footer_social_bg rounded-[10px]"
              >
                <Link target="_blank" href={item.link}>
                  <Image
                    // className="animate-glow rounded-sm hover:cursor-pointer"
                    className=" rounded-sm hover:cursor-pointer"
                    alt={item.alt}
                    src={item.iconUrl}
                    width={24}
                    height={24}
                  />
                </Link>
              </div>
            );
          })}
        </div>
        <span className="block mt-[60px]">
          {/* copyright symbol */}
          &copy; {new Date().getFullYear()} Andrey Sorokin. All Rights Reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;
