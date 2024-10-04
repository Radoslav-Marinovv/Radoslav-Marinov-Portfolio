import TechStack from "./TechStack";
/**
 * Renders a tech stack component with all tech stack logos.
 * @returns {JSX.Element} The rendered tech stack component.
 */
export default function MyTechStack(): JSX.Element {
  return (
    <div
      id="tech-stack"
      className="items-center bg-base-300 justify-center max-w-full max-h-full rounded-lg shadow-lg">
      <h2 className="p-8 text-4xl font-bold text-center">My Tech Stack</h2>
      <TechStack all={true} text="" />
    </div>
  )
}