import { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import EducationCard from "./EducationCard.tsx";
import { EDUCATION_LIST } from "../../data/education.ts"

type EducationCardProps = {
  id: string;
  title: string;
  degree: string;
  date: string;
  location: string;
  logoImage: string;
};

/**
 * A component that displays information about the education
 * @param educationCards - an array of objects with information about the education
 * @returns - a list of components that displays information about the education
*/
export default function Education(): JSX.Element {

  gsap.registerPlugin(ScrollTrigger);

  const cardRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(".education",
      {
        x: gsap.utils.random(-50, 100, 1),
        y: gsap.utils.random(-50, 100, 1),
        skewX: gsap.utils.random(-90, 90, 1),
        skewY: gsap.utils.random(-90, 90, 1),
        opacity: 0,
        scale: 0,
      },
      {
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
          end: "bottom 60%",
          scrub: 2.5,
          snap: {
            snapTo: "labelsDirectional",
            duration: { min: 0.2, max: 3 },
            delay: 0.2,
            ease: "elastic"
          }
        },
        x: 0,
        y: 0,
        skewX: 0,
        skewY: 0,
        opacity: 1,
        scale: 1,
        duration: 3.5,
        repeat: 0,
        yoyo: true,
        ease: "elastic",
        stagger: {
          each: 0.8,
        },
      }
    );
  }, { scope: cardRef, revertOnUpdate: true });

  return (
    <div className="flex flex-col justify-center align-middle text-center">
      <h2 className="text-4xl font-bold pb-8">Education</h2>
      <div ref={cardRef} className="flex flex-wrap justify-center align-baseline">
        {EDUCATION_LIST.map((item: EducationCardProps) => (
          <EducationCard
            key={item.id}
            title={item.title}
            degree={item.degree}
            date={item.date}
            location={item.location}
            logoImage={item.logoImage}
          />
        ))}
      </div>
    </div>
  );
}