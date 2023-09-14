"use client";
import { useEffect, useRef } from "react";
import "./home.css";
import CustomButton from "../reusable/button";
import ScrollDown from "../../../public/assets/svg/ScrollDownArrow";
import LinkedIn from "../../../public/assets/svg/LinkedIn";
import Github from "../../../public/assets/svg/Github";
import useBlockRef from "@/hooks/useBlockRef";

type Props = {};

const HomePage = (props: Props) => {
  // generate vertical lines from top to bottom on bg
  const lines = [];
  const colorClasses = ["bg_1", "bg_2", "bg_3", "bg_4"];
  //Block position
  const blockRef = useRef(null);
  useBlockRef({ key: "landingPosition", blockRef });

  for (let i = 0; i < 40; i++) {
    lines.push(
      <div
        ref={blockRef}
        className={`line ${colorClasses[Math.floor(Math.random() * 4)]}`}
        key={i}
        style={{
          left: `${i * 3}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${Math.random() * 5 + 5}s`,
          marginLeft: `${Math.random() * 100}px`,
          zIndex: 50,
        }}
      ></div>
    );
  }

  return (
    <div>
      <div className="flex flex-1 relative w-full h-screen overflow-hidden flex-col">
        {lines}
        <div className="h-screen w-[100%] flex flex-col justify-center flex-1 max-w-[1000px] self-center mx-auto items-center text-center text-text_white z-100 relative">
          <div className="absolute top-[45%] left-0 flex flex-col gap-5 ml-5">
            <LinkedIn className="animate-glow rounded-sm hover:cursor-pointer" />
            <Github className="animate-glow rounded-sm hover:cursor-pointer" />
          </div>

          <h3 className="text-[20px] mb-3">Hey, I'm</h3>
          <h1 className="text-[36px] font-semibold mb-[25px]">
            Andrey Sorokin
          </h1>
          <h3 className="text-5 font-semibold text-text_blue">
            Fullstack Developer
          </h3>
          <div className="flex gap-[35px] justify-evenly">
            <CustomButton variant="hollow">Download CV</CustomButton>
            <CustomButton styles={"mt-[82px]"} variant="primary">
              Let's talk
            </CustomButton>
          </div>
          <ScrollDown className="absolute bottom-5 hover: cursor-pointer animate-bounce" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
