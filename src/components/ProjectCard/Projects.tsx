import { useRef } from "react";

import ProjectCard from "./ProjectCard";
import { PROJECTS } from "../../data/projects";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

/**
 * A component that displays information about the projects.
 * @returns {JSX.Element} The rendered projects component.
 */
export default function Projects(): JSX.Element {

  const projectsRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(".card",
      {
        x: -2000,
        y: 0,
        opacity: 0,
        scale: 0,
      },
      {
        immediateRender: false,
        scrollTrigger: {
          trigger: projectsRef.current,
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
  }, { scope: projectsRef, revertOnUpdate: true });
  return (
    <section
      id="Projects"
      ref={projectsRef}
      className="flex flex-col text-center">
      <h2 className="text-4xl font-bold py-8">Projects</h2>
      <div className="flex flex-col p-2 mb-4 align-middle justify-center items-center">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            github={project.github}
            website={project.website}
            image={project.image}
          />
        ))}

      </div>
    </section>
  )
};