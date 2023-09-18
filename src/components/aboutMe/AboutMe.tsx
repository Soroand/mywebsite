"use client";
import { useRef } from "react";
import Image from "next/image";
import useBlockRef from "@/hooks/useBlockRef";

type Props = {};

const AboutMe = (props: Props) => {
  const blockRef = useRef(null);
  useBlockRef({ key: "aboutMePosition", blockRef });

  const blocks = [
    {
      icon: (
        <Image
          alt="Picture of the author"
          src="./assets/svg/Laptop_about.svg"
          width={52}
          height={52}
        />
      ),
      title: "Development Experience",
      value: "4+ years",
    },
    {
      icon: (
        <Image
          alt="Picture of the author"
          src="./assets/svg/Bulb_about.svg"
          width={45}
          height={45}
        />
      ),
      title: "Technical Experience",
      value: "5+ years",
    },
    {
      icon: (
        <Image
          alt="Picture of the author"
          src="./assets/svg/Computer_about.svg"
          width={45}
          height={45}
        />
      ),
      title: "Completed Projects",
      value: "20+",
    },
  ];
  return (
    <div
      ref={blockRef}
      className="flex flex-col max-w-[1000px] mx-auto pt-[25px] md:pt-[100px]"
    >
      <div className="w-full">
        <h5 className="text-center text-text_white font-[500]">Get to know</h5>
        <h2 className="text-center mt-3 text-text_blue font-[600] text-[32px]">
          ABOUT ME
        </h2>
      </div>
      <div className="md:flex md:w-full md:mt-[65px] md:flex-row flex flex-col w-full mt-[35px]">
        {/* avatar */}
        <div className="flex relative md:mr-[60px] mt-[16px] md:self-start mx-auto">
          <div className="before:block before:content-[''] before:rounded-full before:ml-[30%] before:w-[15px] before:h-[15px] before:bg-circle_avatar_bg z-80 absolute top-[0px] left-[0px] border-[1px] rounded-[50%] w-full h-full animate-circle_rotation"></div>
          <Image
            className="z-100 p-[1rem]"
            alt="Picture of the author"
            src="/assets/avatar/avatar.webp"
            width={306}
            height={306}
          />
          <div className="z-90 w-full h-full rounded-full bg-circle_avatar_underlay_bg  absolute top-[15%] left-[5%]"></div>
        </div>
        {/* about me */}
        <div className="flex flex-1 flex-col">
          <div className="flex flex-col content-center mx-auto sm:content-normal sm:flex-row gap-[30px] md:mt-[0] mt-[6rem] text-text_white text-center flex-wrap">
            {/* blocks */}
            {blocks.map((block, index) => {
              return (
                <div
                  key={block.title}
                  className="bg-card-border p-[1px] rounded-[18px]"
                >
                  <div
                    key={block.title + index}
                    className="flex flex-col items-center justify-center gap-2 bg-about_card_bg rounded-[18px] max-w-[189px] min-h-[181px] w-full"
                  >
                    {block.icon}
                    <h5 className="font-[600] px-[1rem] mt-1">{block.title}</h5>
                    <span className="font-[500] text-[15px] text-text_blue">
                      {block.value}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-[48px] ">
            <p className="text-text_gray px-[2rem] sm:px-[0] text-[16px] font-[500] leading-[160%]">
              Hello! I'm Andrey Sorokin, a passionate and experienced full-stack
              software developer with over four years of hands-on development
              experience. I have successfully completed more than 20 diverse
              projects, showcasing my expertise in crafting robust and
              innovative solutions for a wide range of clients and industries.
              My journey into the world of software development began with a
              burning curiosity and a love for problem-solving. Over the years,
              I have honed my skills, constantly seeking opportunities to expand
              my knowledge and keep up with the ever-evolving tech landscape.
              This journey has not only equipped me with a deep understanding of
              software architecture but has also instilled in me a commitment to
              delivering high-quality, scalable, and efficient software
              solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
