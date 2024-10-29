import { useRef } from "react";

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

  const projectRef = useRef(null);
  useGSAP(() => {
    gsap.fromTo(projectRef.current,
      {
        x: -2000,
        y: 0,
        opacity: 0,
        scale: 0,
      },
      {
        immediateRender: false,
        scrollTrigger: {
          trigger: projectRef.current,
          toggleActions: "restart reverse restart reverse",
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
  return (
    <>
      <div
        id="projectCard"
        ref={projectRef}
        className="card md:flex-row odd:bg-base-300 bg-base-200 md:w-2/3 w-full md:max-h-screen shadow-xl my-8">
        <figure className="rounded-lg shadow-xl md:hover:w-64 md:max-w-64">
          <img
            className="rounded-lg w-full h-64
             md:h-full md:w-64 md:object-cover
             md:hover:absolute md:hover:top-2 md:hover:left-0 md:hover:z-10 
             md:hover:w-fit md:hover:object-contain
             md:hover:rounded-lg md:hover:shadow-2xl  
             md:transition-all md:duration-1000 md:hover:scale-125 md:hover:ease-linear"
            src={image}
            alt={title + "image"} />
        </figure>
        <div className="card-body md:w-2/3">
          <h2 className="card-title">
            {title}
          </h2>
          <p className="font-medium text-justify">
            {description}
          </p>
          <div className="pt-4 card-actions justify-start">
            <TechStack {...techStack} />
          </div>
          <div className="card-actions justify-center md:justify-end">
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
