import { useEffect, useRef } from "react";

import { FIELDSET_STYLE, LEGEND_STYLE } from "../../common/constants";
import TechStack from "../TechStack/TechStack";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

type ProjectCardProps = {
  title: string;
  description: string;
  techStack: object;
  github: string;
  website?: string;
  image: string;
};
/**
 * Renders a project card component with customizable options.
 * 
 * @param {string} props.title - The title of the project.
 * @param {string} props.description - The description of the project.
 * @param {Object} props.techStack - The tech stack of the project.
 * @param {string} props.github - The GitHub repository of the project.
 * @param {string} [props.website] - The website of the project.
 * @param {string} props.image - The image of the project.
 * 
 * @returns {JSX.Element} The rendered project card component.
 */
export default function ProjectCard({ title, description, techStack, github, website, image }: ProjectCardProps): JSX.Element {

  const figureRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const projectBodyRef = useRef<HTMLDivElement>(null);
  const projectPictureRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    gsap.fromTo(projectRef.current,
      {
        x: 0,
        y: 0,
        opacity: 0,
        scale: 0,
      },
      {
        immediateRender: false,
        scrollTrigger: {
          trigger: projectRef.current,
          toggleActions: "play none none none",
        },
        duration: 2.5,
        ease: "elastic.inOut",
        x: 0,
        y: 0,
        opacity: 1,
        stagger: 0.5,
        scale: 1,
      }
    );
  }, { scope: projectRef, revertOnUpdate: true });

  useEffect(() => {
    const figureEl = figureRef.current;

    const onFigureHoverStart = () => {
      gsap.to(figureEl, {
        duration: 1.5,
        scale: 1.3,
        border: "1px solid #e2f02362",
        ease: "back.out(1.7)",
      });
    };
    const onFigureMouseLeave = () => {
      gsap.to(figureEl, {
        scale: 1,
        duration: 1.5,
        border: "1px solid transparent",
        ease: "power2.out",
      });
    }
    figureEl?.addEventListener("mouseenter", onFigureHoverStart);
    figureEl?.addEventListener("mouseleave", onFigureMouseLeave);

    return () => {
      figureEl?.removeEventListener("mouseenter", onFigureHoverStart);
      figureEl?.removeEventListener("mouseleave", onFigureMouseLeave);
    };
  }, []);

  return (
    <>
      <div
        id="projectCard"
        ref={projectRef}
        className="card md:flex-row odd:md:flex-row-reverse odd:bg-base-300 bg-base-200 w-4/5 shadow-xl my-8">
        <figure
          ref={figureRef}
          className="rounded-lg mt-4 self-center md:min-h-[50%] md:min-w-[50%] w-full z-50">
          <img
            ref={projectPictureRef}
            className="rounded-lg md:h-full h-[50%] md:w-fit w-full md:object-cover object-fill md:scale-95"
            src={image}
            alt={`${title} image`}
          />
        </figure>
        <div
          ref={projectBodyRef}
          className="card-body md:w-2/3">
          <h2 className="card-title text-primary">
            {title}
          </h2>
          <p className="font-medium text-left">
            {description}
          </p>
          <div className="pt-4 card-actions justify-start">
            <TechStack {...techStack} width={50} />
          </div>
          <div className="grid grid-cols-1 card-actions justify-center md:justify-end">
            {website && <fieldset className={FIELDSET_STYLE}>
              <legend className={LEGEND_STYLE}>Website</legend>
              <a
                className="btn btn-link"
                target="_blank"
                href={website}>
                {website}
              </a>
            </fieldset>}
            {github && <fieldset className={`${FIELDSET_STYLE}`}>
              <legend className={LEGEND_STYLE}>GitHub repository</legend>
              <a
                className="btn btn-link"
                target="_blank"
                href={github}>
                {github}
              </a>
            </fieldset>}
          </div>
          <div >
          </div>
        </div>
      </div>
    </>
  )
};
