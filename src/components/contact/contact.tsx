"use client";
import { use, useRef } from "react";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "./contact.css";
import CustomButton from "../reusable/button";
import Image from "next/image";
import { Typography } from "@mui/material";
import useBlockRef from "@/hooks/useBlockRef";
import { AccordionContext } from "@/context/AccordionContext";
import { useContext } from "react";

type Props = {};

const Contact = (props: Props) => {
  const blockRef = useRef(null);
  const { open } = useContext(AccordionContext);
  useBlockRef({ key: "contactPosition", blockRef, open });

  return (
    <div
      ref={blockRef}
      className="flex p-[1rem] md:p-[0px] flex-col max-w-[1000px] items-center text-center mt-[80px] md:mt-[160px] mx-auto text-text_white"
    >
      <h3 className="font-[500] text-[16px]">Get in Touch</h3>
      <h2 className="text-[32px] font-[600] uppercase mt-[12px] text-text_blue">
        Contact me
      </h2>
      <div className="w-full max-w-[850px]">
        {/* contact form */}
        <form className="flex flex-col mt-[32px]">
          <div className="flex flex-col md:flex-row gap-5">
            <div className="flex flex-col md:w-[50%]">
              <TextField
                id="standard-basic"
                label="Full Name"
                variant="standard"
                autoComplete="name"
                required
              />
            </div>
            <div className="flex flex-col md:w-[50%]">
              <TextField
                id="standard-basic"
                label="Email address"
                variant="standard"
                autoComplete="email"
                required
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-5 mt-10">
            <div className="flex flex-col md:w-[50%]">
              <TextField
                id="standard-basic"
                label="Subject"
                variant="standard"
                autoComplete="subject"
                required
              />
            </div>
            <div className="flex flex-col md:w-[50%]">
              <TextField
                id="standard-basic"
                label="Phone Number"
                variant="standard"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-5 mt-10">
            <div className="flex flex-col md:w-[50%]">
              <TextField
                id="standard-basic"
                label="Company name / Industry"
                variant="standard"
                autoComplete="company"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-5 mt-10">
            <div className="flex flex-col md:w-[50%]">
              <TextField
                id="standard-basic"
                label="How can I help you?"
                variant="standard"
                required
                multiline
              />
            </div>
          </div>
          <FormControlLabel
            sx={{ fontSize: "14px" }}
            className="mt-12"
            required
            control={<Checkbox />}
            label={
              <Typography className="text-[14px] opacity-50">
                I agree that my personal information will be processed and
                stored by this website.
              </Typography>
            }
          />
          <CustomButton
            styles="max-w-[250px] mt-[60px] self-center"
            variant="primary"
          >
            <span className="flex content-center items-center font-[500] text-[16px] uppercase">
              Let's Talk
              <Image
                className="ml-2"
                alt="arrow right"
                src="/assets/svg/Arrow_lets_talk.svg"
                width={32}
                height={32}
              />
            </span>
          </CustomButton>
        </form>
      </div>
    </div>
  );
};

export default Contact;
