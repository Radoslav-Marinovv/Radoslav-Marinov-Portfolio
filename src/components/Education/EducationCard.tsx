import { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { FIELDSET_STYLE, LEGEND_STYLE } from "../../common/constants";

type EducationCardProps = {
  title: string;
  degree: string;
  date: string;
  location: string;
  logoImage: string;
};

/**
 * A card with information about the educational institution
 * @param title - the name of the educational institution
 * @param degree - the degree obtained
 * @param date - the period of study
 * @param location - the location of the educational institution
 * @param logoImage - the logo of the educational institution
 * @returns - a card with information about the educational institution
 */
export default function EducationCard({ title, degree, date, location, logoImage }: EducationCardProps): JSX.Element {

  const singleCardRef = useRef(null);
  useGSAP(() => {
    gsap.fromTo(singleCardRef.current,
      {
        width: "33%",

      },
      {
        scrollTrigger: {
          trigger: singleCardRef.current,
          start: "clamp(top 80%)",
          end: "clamp(bottom 20%)",
        },
        width: "45%",
        opacity: 1,
        duration: 1,
      });
    gsap.fromTo('.picture',
      {
        x: 500,
        opacity: 0,
      },
      {
        x: 0,
        gridColumn: "1 / 2",
        opacity: 1,
        delay: 1.5,
        stagger: 0.5,
      });
    gsap.fromTo('.body',
      {
        width: "0%",
        x: -500,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        delay: 1.5,
        stagger: 0.5,
      });

  }, { scope: singleCardRef, revertOnUpdate: true });

  return (
    <div
      ref={singleCardRef}
      id="educationCard"
      className="card bg-base-300 md:flex-row w-screen md:w-1/3 shadow-xl md:mx-8 my-4 text-sm text-justify">
      <figure className="picture shadow-xl h-full p-4">
        <img
          className="rounded-lg w-full md:object-contain md:object-center"
          src={logoImage}
          alt={title + "image"} />
      </figure>
      <div className="body card-body md:w-2/4">
        <h2 className="card-title">
          {title}
        </h2>
        <p className="font-medium">
          {degree}
        </p>
        <div className="pt-4 card-actions justify-start">
          <fieldset className={FIELDSET_STYLE}>
            <legend className={LEGEND_STYLE}>Date</legend>
            <p>{date}</p>
          </fieldset>
          <fieldset className={FIELDSET_STYLE}>
            <legend className={LEGEND_STYLE}>Location</legend>
            <p>{location}</p>
          </fieldset>
        </div>
      </div>
    </div>
  )
};