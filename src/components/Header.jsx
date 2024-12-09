import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollToPlugin from "gsap/ScrollToPlugin";

import { logo } from "../assets/assets";

import { Link } from "react-router-dom";

gsap.registerPlugin(useGSAP);

function Header() {
  const headerRef = useRef(null);

  const { contextSafe } = useGSAP();

  const goToSet = contextSafe((e) => {
    console.log(e)
    gsap.to('body', {
      scrollTo:`#${e}`
    })
  });

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from(".header img", {
        x: -100,
        duration: 1.4,
      });
      tl.from(".header .header-lg h4", {
        y: -100,
        duration: 0.1,
        stagger: 0.4,
      });
    },
    { scope: headerRef.current }
  );
  return (
    <header
      ref={headerRef}
      className="header h-fit z-50 w-screen px-5 py-2 backdrop-blur-xl fixed top-0 flex justify-between items-center"
    >
      <img src={logo} className="h-10 rotate-45" alt="" />
      {/* Greater Than Smaller Screens */}
      <div className="header-lg text-white hidden sm:flex gap-5 text-xl">
        <Link >
          <h4 onClick={(e)=>goToSet(e.target.innerHTML)} className="cursor-pointer">Home</h4>
        </Link>
        <Link>
          <h4 className="cursor-pointer">Tech</h4>
        </Link>
        <Link>
          <h4 className="cursor-pointer">Projects</h4>
        </Link>
        <Link>
          <h4 className="cursor-pointer">Contact</h4>
        </Link>
        <Link>
          <h4 className="cursor-pointer">Socials</h4>
        </Link>
        <Link>
          <h4 className="cursor-pointer">Github</h4>
        </Link>
      </div>
      {/* Less Than Small Screens */}
      <div className="header-sm h-screen w-[100vw] top-20 absolute hidden flex-col text-white text-xl">
        <Link>
          <h4 className="cursor-pointer">Home</h4>
        </Link>
        <Link>
          <h4 className="cursor-pointer">Tech</h4>
        </Link>
        <Link>
          <h4 className="cursor-pointer">Projects</h4>
        </Link>
        <Link>
          <h4 className="cursor-pointer">Contact</h4>
        </Link>
        <Link>
          <h4 className="cursor-pointer">Socials</h4>
        </Link>
        <Link>
          <h4 className="cursor-pointer">Github</h4>
        </Link>
      </div>
    </header>
  );
}

export default Header;
