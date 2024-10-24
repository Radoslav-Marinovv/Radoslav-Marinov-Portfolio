import { useEffect, useState } from "react";

/**
 * 
 * @returns - the footer of the application
 */
export default function Footer(): JSX.Element {

  const [currentPath, setCurrentPath] = useState(window.location.hash);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.hash);
    };

    window.addEventListener('scroll', handleLocationChange);

    return () => {
      window.removeEventListener('scroll', handleLocationChange);
    };
  }, [currentPath]);

  return (
    <footer className="navbar bg-base-300 sticky bottom-0 left-0 mt-auto z-50">
      <a
        className={`btn btn-ghost md:text-xl ${currentPath === "" && "btn-outline" || currentPath === "#Portfolio" && "btn-outline"}`}
        href={"/#Portfolio"}
        title="Info"
        target="_self"
        onClick={() => { document.title = "Radoslav Marinov | Portfolio"; }}
      >
        Info
      </a>
      <a
        className={`btn btn-ghost md:text-xl ${currentPath === "#Education" && "btn-outline"}`}
        href={"/#Education"}
        title="Education"
        target="_self"
        onClick={() => { document.title = "Radoslav Marinov | Education"; }}
      >
        Education
      </a>
      <a
        className={`btn btn-ghost md:text-xl ${currentPath === "#Tech-Stack" && "btn-outline"}`}
        href={"/#Tech-Stack"}
        title="Tech-Stack"
        target="_self"
        onClick={() => { document.title = "Radoslav Marinov | Tech Stack"; }}
      >
        Tech Stack
      </a>
      <a
        className={`btn btn-ghost md:text-xl ${currentPath === "#Projects" && "btn-outline"}`}
        href={"/#Projects"}
        title="Projects"
        target="_self"
        onClick={() => { document.title = "Radoslav Marinov | Projects"; }}
      >
        Projects
      </a>
    </footer>
  );
} 
