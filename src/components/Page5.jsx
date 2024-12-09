import React, { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);
function Page5() {
  const page5Ref = useRef();

  useGSAP(
    () => {
      gsap.from(".page5 .p-up", {
        x: 1000,
        duration: 10,

        scrollTrigger: {
          trigger: page5Ref.current,
          // markers: true,
          scrub: true,
          start: "top 90%",
          end: "bottom 10%",
        },
      });
      gsap.from(".page5 .p-down", {
        x: -1000,
        duration: 10,

        scrollTrigger: {
          trigger: page5Ref.current,
          // markers: true,
          scrub: true,
          start: "top 90%",
          end: "bottom 10%",
        },
      });
    },
    { scope: page5Ref.current }
  );

  return (
    <div
      ref={page5Ref}
      className="page5 h-screen w-screen flex items-center justify-center  "
    >
      <div className="text-center">
        <p className="p-up text-nowrap text-4xl sm:text-6xl text-gray-500 font-bold">
          React Devloper Software Tester Frontend Devloper Problem Solving
          Tailwind Vite React Router GSAP React Devloper Software Tester
          Frontend Devloper Problem Solving Tailwind Vite React Router GSAP
          React Devloper Software Tester Frontend Devloper Problem Solving
          Tailwind Vite React Router GSAP React Devloper Software Tester
          Frontend Devloper Problem Solving Tailwind Vite React Router GSAP
        </p>
        <h2 className="text-xl sm:text-3xl font-medium sm:my-5 text-wrap">
          So You are Here, Seems interesting
        </h2>
        <p className="p-down text-nowrap text-4xl sm:text-6xl text-gray-500 font-bold">
          React Devloper Software Tester Frontend Devloper Problem Solving
          Tailwind Vite React Router GSAP React Devloper Software Tester
          Frontend Devloper Problem Solving Tailwind Vite React Router GSAP
          React Devloper Software Tester Frontend Devloper Problem Solving
          Tailwind Vite React Router GSAP React Devloper Software Tester
          Frontend Devloper Problem Solving Tailwind Vite React Router GSAP
        </p>
      </div>
    </div>
  );
}

export default Page5;
