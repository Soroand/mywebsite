"use client";
import { useContext, useEffect, useRef } from "react";
import Image from "next/image";
import CustomButton from "@/components/reusable/button";
import useBlockRef from "@/hooks/useBlockRef";
import { AccordionContext } from "@/context/AccordionContext";

type Props = {};

const Portfolio = (props: Props) => {
  //Block position
  const blockRef = useRef(null);
  const { open } = useContext(AccordionContext);
  useBlockRef({ key: "portfolioPosition", blockRef, open });

  const portfolio = [
    {
      id: 1,
      company: "Beanfield",
      image: "/assets/portfolio/beanfield/beanfield_website.webp",
      project: "Web app",
      description:
        "Frontend development of a new website for Beanfield Metroconnect, a Canadian ISP. The website is built with React, Redux Toolkit, RTK query and SCSS.",
      link: "https://www.beanfield.com/residential",
      btnText: "Live Demo",
    },
    {
      id: 2,
      company: "1511 Paris",
      image: "/assets/portfolio/1511/1511_website.webp",
      project: "Web app",
      description:
        "Fullstack development of a new website for 1511 Paris, a French fashion brand. The website is built with React, Redux Toolkit, RTK query and SCSS.",
      link: "https://1511.paris",
      btnText: "Live Demo",
    },
    {
      id: 3,
      company: "Herstasis",
      image: "/assets/portfolio/herstasis/herstasis_app.webp",
      project: "Mobile App",
      description:
        "React Native application for menapuse health tracking and management. The app is built with React Native, Redux and SAGA.",
      link: "https://www.herstasis.com/",
      btnText: "Live Demo",
    },
    {
      id: 4,
      company: "Many Hats",
      image: "/assets/portfolio/manyhats/manyhats_website.webp",
      project: "Web App",
      description:
        "Corporate website for Many Hats, a Canadian digital agency. The website is built with NextJS, Redux Toolkit, RTK query and SCSS.",
      link: "https://www.wewearmanyhats.com",
      btnText: "Live Demo",
    },
    {
      id: 5,
      company: "Kid Security",
      image: "/assets/portfolio/kidsecurity/kidsecurity_app.webp",
      project: "Mobile App",
      description:
        "React Native application for kids safety and security. The app is built with React Native, Redux and Thunk middleware.",
      link: "https://www.kidsecurity.org/en/",
      btnText: "Live Demo",
    },
  ];
  return (
    <div
      ref={blockRef}
      className="flex flex-col max-w-[1000px] items-center text-center mt-[80px] md:mt-[160px] mx-auto text-text_white"
    >
      <h3 className="font-[500] text-[16px]">My Recent Work</h3>
      <h2 className="text-[32px] font-[600] uppercase mt-[12px] text-text_blue">
        Portfolio
      </h2>
      <div className="flex flex-col md:grid md:grid-cols-3 gap-[29px] mt-[65px]">
        {portfolio.map((item) => {
          return (
            <div
              key={item.id}
              className="flex flex-col max-w-[322px] max-h-[497px] p-[1px] bg-card-border rounded-[18px] overflow-hidden"
            >
              <div className="text-left pl-[37px] pb-[37px] pr-[45px] bg-about_card_bg rounded-[18px] h-full">
                <Image
                  title="Portfolio image"
                  alt={item.company + " image"}
                  src={item.image}
                  width={297}
                  height={223}
                />
                <div className="flex justify-between mt-[10px] items-center">
                  <span className="font-[600] text-[20px] bg-clip-text text-transparent bg-portfolio_text">
                    {item.company}
                  </span>
                  <ul className="">
                    <li className="font-[500] text-[15px] list-disc text-text_intermidiate_gray">
                      {item.project}
                    </li>
                  </ul>
                </div>
                <p className="text-[16px] mt-[18px] font-[400] text-text_intermidiate_gray">
                  {item.description}
                </p>
                <CustomButton
                  type="link"
                  url={item.link}
                  styles={"mt-[30px]"}
                  variant="primary"
                >
                  {item.btnText}
                </CustomButton>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
