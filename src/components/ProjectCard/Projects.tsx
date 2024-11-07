import ProjectCard from "./ProjectCard";
import { PROJECTS } from "../../data/projects";

/**
 * A component that displays information about the projects.
 * @returns {JSX.Element} The rendered projects component.
 */
export default function Projects(): JSX.Element {

  return (
    <section
      id="Projects"
      className="flex flex-col text-center">
      <h2 className="text-4xl font-bold py-8">Projects</h2>
      <div className="flex flex-col p-2 mb-20 gap-8 align-middle justify-center items-center">
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