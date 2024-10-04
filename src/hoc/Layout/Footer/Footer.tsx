
/**
 * 
 * @returns - the footer of the application
 */
export default function Footer(): JSX.Element {
  return (
    <div className="navbar bg-base-100 sticky bottom-0 left-0 mt-auto">
      <a
        className="btn btn-ghost md:text-xl"
        href={"/"}
      >
        Info
      </a>
      <a
        className="btn btn-ghost md:text-xl"
        href={"/#education"}
      >
        Education
      </a>
      <a
        className="btn btn-ghost md:text-xl"
        href={"/#tech-stack"}

      >
        Tech Stack
      </a>
      <a
        className="btn btn-ghost md:text-xl"
        href={"/#projects"}
      >
        Projects
      </a>
    </div>
  );
} 
