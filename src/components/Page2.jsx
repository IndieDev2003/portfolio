import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(ScrollTrigger, useGSAP);

function Page2() {

    const page2Ref = useRef(null)
    const para1Ref = useRef(null)
    const para2Ref = useRef(null)

    useGSAP(() => {
        
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: page2Ref.current,
                // markers: true,
                start: 'top 85%',
                end: 'top 0%',
                scrub: true
            }
        })
        

        tl.from(para1Ref.current, {
            opacity:0
        })
        tl.to(para2Ref.current, {
            opacity:0.3,
            delay: 0.25
        })
        tl.to(para2Ref.current, {
            opacity:1,
            delay: 0.5
        })
        tl.to(para1Ref.current, {
            opacity:0.3
        })

    },{scope:page2Ref.current})


  return (
    <div ref={page2Ref} className="min-h-[110vh] w-screen px-2 sm:px-10 flex flex-col items-center justify-center">
      <p ref={para1Ref} className="text-3xl sm:text-7xl text-center">
        I'm a passionate frontend devloper who's focused on building scalable
        and performant apps.
      </p>
      <p ref={para2Ref} className="text-3xl sm:text-7xl text-center">
        I take responsibility to craft a good user experience using modern
        frontend architecture.
      </p>
    </div>
  );
}

export default Page2;
