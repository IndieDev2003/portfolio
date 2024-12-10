import React, { useRef } from "react";
import { ReactTyped } from "react-typed";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

import {
  github,
  heroBack1,
  heroBack2,
  instagram,
  linkedin,
  mail,
} from "../assets/assets";

function Hero() {
  const heroRef = useRef(null);
  const reactTyped = useRef(null);
  const str = [
    "I create asthetic and modern apps.",
    "I pragmatic frontend devloper.",
    "I build things for the web.",
  ];

  useGSAP(() => {
    const tl = gsap.timeline({
      delay: 5,
    });

    tl.from(".hero p", {
      y: 20,
      duration: 0.5,
      opacity: 0,
    });
    tl.from(".hero h1", {
      y: 20,
      duration: 1,
      opacity: 0,
    });
    tl.from(".hero .react-typed", {
      y: 20,
      duration: 1,
      opacity: 0,
    });
    tl.from('.hero .icon', {
      y: -20,
      opacity: 0,
      delay: 2,
      stagger:1
    })
    tl.from(".hero .hero-btn", {
      y: -20,
      opacity: 0,
      delay: 1,
    });
    tl.from(".hero-img", {
      x: -200,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
    });

  }, {});

  return (
    <section
      ref={heroRef}
      
      className="hero flex min-h-screen w-screen items-center px-5 sm:px-10 outfit"
    >
      <div className="flex flex-col gap-3 text-start items-start sm:w-[50vw]">
        <p className="text-xl sm:text-2xl ">Hi, my name is</p>
        <h1 className=" text-5xl sm:text-6xl mb-6">
          <span className="text-purple-700 underline underline-offset-[14px] gagan-underline">
            Gagan{" "}
          </span>
          Suman
        </h1>
        {/* <p className="text-5xl">A passionate</p> */}
        <ReactTyped
          ref={reactTyped}
          className="text-3xl text-gray-400 roboto react-typed"
          strings={str}
          loop={true}
          typeSpeed={120}
          backSpeed={40}
        />
        <div className="flex gap-2 sm:gap-6">
          <img className="bg-whie h-8 icon" src={linkedin} alt="" />
          <img className="bg-whie h-8 icon" src={github} alt="" />
          <img className="bg-whie h-8 icon" src={instagram} alt="" />
          <img className="bg-whie h-8 icon" src={mail} alt="" />
        </div>
        <button className="hero-btn transition-colors duration-500 text-lg font-semibold px-10 py-3 mt-5 border-2 hover:bg-purple-700 hover:text-white border-purple-700 rounded-lg">
          Let's Talk
        </button>
      </div>
      <div className="h-full w-full hidden sm:flex items-center justify-center relative">
        <img
          src={heroBack1}
          className="hero-img h-[70vh] object-cover absolute"
          alt=""
        />
        <img
          src={heroBack2}
          className="hero-img h-[80vh] object-cover absolute"
          alt=""
        />
        <h2 className="absolute -top-[30vh] -right-20 rotate-90 text-gray-900 text-[120px]">
          DEV
        </h2>
      </div>
    </section>
  );
}

export default Hero;
