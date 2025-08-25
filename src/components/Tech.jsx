import React, { useEffect } from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TechIcon from "./TechIcon";

gsap.registerPlugin(ScrollTrigger);

const Tech = () => {
  useEffect(() => {
    gsap.fromTo(
      ".tech-icon",  
      {
        opacity: 0,
        y: 80
      },
      {



        
        opacity: 1,
        y: 0,
        duration: 2.5,
        stagger: 0.1, 
        scrollTrigger: {
          trigger: ".tech-icons-wrapper", 
          start: "top 80%", 
          end: "bottom 70%", 
          scrub: true, 
        },
      }
    );
  }, []);

  return (
    <section>
      <div className="tech-icons-wrapper flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28 tech-icon" key={technology.name}>
            <TechIcon 
              name={technology.name}
              iconClass={technology.iconClass}
              size="48px"
              customIcon={technology.customIcon}
              websiteUrl={technology.websiteUrl}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "");
