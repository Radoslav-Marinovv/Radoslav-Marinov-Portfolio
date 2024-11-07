import { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

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

  const cardRef = useRef(null);

  const randomX = gsap.utils.random(-2000, 2000, 1, true);
  const randomY = gsap.utils.random(-45, 45, 1, true);

  useGSAP(() => {
    gsap.fromTo("#educationContent",
      {
        x: randomX(),
        y: randomY(),
        skewX: 45,
        skewY: 45,
        opacity: 0,
        scale: 0,
      },
      {
        immediateRender: false,
        scrollTrigger: {
          trigger: "#educationContainer",
          toggleActions: "play none none none",
        },
        duration: 2.5,
        ease: "elastic.inOut",
        x: 0,
        y: 0,
        skewX: 0,
        skewY: 0,
        opacity: 1,
        scale: 1,
      }
    );
    gsap.fromTo("#certificateContent",
      {
        x: randomX(),
        y: randomY(),
        skewX: -45,
        skewY: -45,
        opacity: 0,
        scale: 0,
      },
      {
        immediateRender: false,
        scrollTrigger: {
          trigger: "#certificateContent",
          toggleActions: "play none none none",
        },
        duration: 2.5,
        ease: "elastic.inOut",
        x: 0,
        y: 0,
        skewX: 0,
        skewY: 0,
        opacity: 1,
        scale: 1,
      }
    );

  }, { scope: cardRef, revertOnUpdate: true });

  return (
    <section
      id="Education"
      ref={cardRef}
      className="flex flex-col justify-center align-middle text-center gap-3"
    >
      <div
        id="educationContainer"
      >
        <h2
          id="educationTitle"
          className="text-4xl font-bold pb-4">
          Education
        </h2>
        <div
          id="educationContent"
          className="contentTrigger flex flex-wrap justify-center align-baseline gap-2">
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
      <div
        id="certificateContainer">
        <h2
          id="certificateTitle"
          className="text-4xl font-bold pb-4 mb-4">
          Certificate
        </h2>
        <div
          id="certificateContent"
          className="contentTrigger flex flex-col md:flex-row max-w-full mx-3 gap-4 justify-center align-middle">
          <img
            id="certificateFront"
            alt="certificate front"
            src={CertificateFront}
            className="md:w-1/3"
          />
          <img
            id="certificateBack"
            alt="certificate back"
            src={CertificateBack}
            className="md:w-1/3"
          />
        </div>
      </div>
    </section>
  );
}