import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);
function Page4() {
  const page4Ref = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: page4Ref.current,
          // markers: true,
          start: "top 60%",
          end: "bottom 90%",
          scrub: 1,
        },
      });
          tl.from('.page4 h3', {
              y:-200
          })
      tl.from(".page4 h3 ", {
          x: -300,
          duration: 3,
  
      });
      tl.to(".page4 h3 .text", {
        color: "#3b82f6",
        duration: 3,
      });
    },
    { scope: page4Ref.current }
  );

  return (
    <div
      ref={page4Ref}
      className="relative  page4 h-screen w-screen flex justify-center items-center"
    >
      <h3 className="text-6xl text-center font-medium bg-black">
        I have a <span className="text">strong</span> obsession for attention to
        detail.
      </h3>
    </div>
  );
}

export default Page4;
