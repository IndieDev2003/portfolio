import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import {
  css,
  figma,
  firebase,
  git,
  html,
  javascript,
  mongodb,
  mysql,
  nextjs,
  nodejs,
  react,
  redux,
  sass,
  styledcomponents,
  tailwindcss,
  vite,
  webpack,
} from "../assets/skills/skills";

gsap.registerPlugin(useGSAP, ScrollTrigger);
function Skills() {
  const page3Ref = useRef(null);
  const compRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: page3Ref.current,
          start: "top 80%",
          end: "bottom 85%",
        
          scrub: true,
        },
      });

      tl.from(".page3 h3", {
        x: -100,
        opacity: 0,
        duration: 0.3,
        // ease: "elastic.inOut(1, 0.3)",
        stagger: true,
      });
      tl.from(".page3 h2", {
        y: 100,
        opacity: 0,
        duration: 0.3,
        // ease: "elastic.inOut(1, 0.3)",
        stagger: true,
      });
      tl.from(".page3 .p1", {
        y: 100,
        opacity: 0,
        duration: 0.3,

        stagger: true,
      });
      tl.from(".page3 .p2", {
        y: 100,
        opacity: 0,
        duration: 0.3,

        stagger: true,
      });
      tl.from(".page3 .img1 img", {
        y: 100,
        opacity: 0,
        duration: 0.3,

        // stagger: true
      });
      tl.from(".page3 .p3", {
        y: 100,
        opacity: 0,
        duration: 0.3,

        stagger: true,
      });
      tl.from(".page3 .img2 img", {
        y: 100,
        opacity: 0,
        duration: 0.3,

        stagger: true,
      });
      tl.from(".page3 .p4", {
        y: 100,
        opacity: 0,
        duration: 0.3,

        stagger: true,
      });
      tl.from(".page3 .img3 img", {
        y: 100,
        opacity: 0,
        duration: 0.2,

        stagger: true,
      });
    },
    { scope: page3Ref.current }
  );

  return (
    <div
      ref={page3Ref}
      className="page3 min-h-[110vh] w-screen   px-10 py-10 flex flex-col"
    >
      <div className="h-full flex flex-col justify-center gap-3">
        <h3 ref={compRef} className="text-xl">
          Skills
        </h3>
        <h2 ref={compRef} className="text-purple-700 text-5xl">
          My Skills
        </h2>
        <p ref={compRef} className="p1 sm:max-w-[50vw] text-2xl">
          I like to take responsibility to craft aesthetic use experience using
          modern frontend architecture.
        </p>
        <p ref={compRef} className="p2 uppercase text-lg">
          Languages and tools
        </p>
        <div ref={compRef} className="img1 flex flex-wrap gap-8 my-3">
          <img className="h-10 sm:h-12" src={html} alt="" />
          <img className="h-10 sm:h-12" src={css} alt="" />
          <img className="h-10 sm:h-12" src={javascript} alt="" />
          <img className="h-10 sm:h-12" src={sass} alt="" />
          <img className="h-10 sm:h-12" src={nodejs} alt="" />
          <img className="h-10 sm:h-12" src={webpack} alt="" />
          <img className="h-10 sm:h-12" src={vite} alt="" />
          <img className="h-10 sm:h-12" src={firebase} alt="" />
          <img className="h-10 sm:h-12" src={figma} alt="" />
          <img className="h-10 sm:h-12" src={git} alt="" />
        </div>
        <p ref={compRef} className="p3 uppercase text-lg">
          Libraries and Frameworks
        </p>
        <div ref={compRef} className="img2 flex flex-wrap gap-8 my-4">
          <img className="h-10 sm:h-12" src={react} alt="" />
          <img className="h-10 sm:h-12" src={redux} alt="" />
          <img className="h-10 sm:h-12" src={nextjs} alt="" />
          <img className="h-10 sm:h-12" src={tailwindcss} alt="" />
          <img className="h-10 sm:h-12" src={styledcomponents} alt="" />
        </div>
        <p ref={compRef} className="p4 uppercase text-lg">
          Databases
        </p>
        <div ref={compRef} className="img3 flex gap-8">
          <img src={mongodb} alt="" className="h-10 sm:h-12" />
          <img src={mysql} alt="" className="h-10 sm:h-12" />
        </div>
      </div>
    </div>
  );
}

export default Skills;
