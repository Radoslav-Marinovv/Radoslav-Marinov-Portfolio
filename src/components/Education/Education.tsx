import { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import EducationCard from "./EducationCard.tsx";
import { EDUCATION_LIST } from "../../data/education.ts"

import CertificateFront from "../../assets/images/certificate-front.jpg";
import CertificateBack from "../../assets/images/certificate-back.jpg";

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
    gsap.fromTo("#educationCard",
      {
        x: gsap.utils.random(-500, 500, 1),
        y: gsap.utils.random(-50, 50, 1),
        skewX: gsap.utils.random(-45, 45, 1),
        skewY: gsap.utils.random(-45, 45, 1),
        opacity: 0,
        scale: 0,
      },
      {
        immediateRender: false,
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 90%",
          end: "center 50%",
          scrub: 2.5,
          snap: {
            snapTo: "labelsDirectional",
            duration: { min: 0.2, max: 3 },
            delay: 0.2,
            ease: "bounce.out",
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
    <section
      id="Education"
      ref={cardRef}
      className="flex flex-col justify-center align-middle text-center gap-3"
    >
      <h2 className="text-4xl font-bold pb-4">Education</h2>
      <div className="flex flex-wrap justify-center align-baseline gap-2">
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
      <h2 className="text-4xl font-bold pb-4">Certificate</h2>
      <div className="flex flex-col md:flex-row max-w-full mx-3 gap-4 justify-center align-middle">
        <img
          alt="tailwind logo"
          src={CertificateFront}
          className=" md:w-1/3"
        />
        <img
          alt="tailwind logo"
          src={CertificateBack}
          className=" md:w-1/3"
        />
      </div>
    </section>
  );
}