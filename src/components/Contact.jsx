import { RiArrowRightBoxFill } from "@remixicon/react";
import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);
function Contact() {
  const contactRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: contactRef.current,
          start: "10% 80%",
          end: "top top",
          scrub: true,
          // markers: true,
        },
      });

      tl.from(".head h3", {
        x: -1000,
        duration: 0.2,
        stagger: 0.8,
      });

      tl.from(".form-con .input", {
        y: 100,
        opacity: 0,
        stagger: 0.4,
      });
    },
    {
      scope: contactRef.current,
    }
  );

  return (
    <div
      ref={contactRef}
      className="contactPage h-screen w-screen px-5 sm:px-10  "
    >
      <div className="head w-full mt-[10vh]">
        <h3 className="heading1 text-2xl">Contact</h3>
        <h3 className="heading2 text-5xl text-purple-600 my-3">Contact</h3>
        <h3 className="heading3 text-2xl">Get In Touch</h3>
      </div>
      <div className="form-con w-full flex items-center justify-center mt-10">
        <div className="flex flex-col justify-center text-center min-w-[350px] sm:min-w-[550px] gap-2">
          <input
            className="input rounded-md bg-transparent roboto placeholder:text-white font-semibold outline-none border-2 px-2 py-2 border-purple-600"
            placeholder="Name"
            type="text"
          />
          <input
            className="input rounded-md bg-transparent roboto placeholder:text-white font-semibold outline-none border-2 px-2 py-2 border-purple-600"
            placeholder="Email"
            type="email"
          />
          <textarea
            className="input rounded-md bg-transparent roboto placeholder:text-white font-semibold outline-none h-[250px] border-2 px-2 py-2 border-purple-600 text-start"
            placeholder="Message"
            type="text"
          />
          <div className="w-full mb-10">
            <button className="input px-10 py-2 border-2 rounded-lg border-purple-600 w-min">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
