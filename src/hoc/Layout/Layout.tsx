import { useEffect, useLayoutEffect, useState } from "react"

import Footer from "./Footer/Footer";

import { SpeedInsights } from "@vercel/speed-insights/react";

type LayoutProps = {
  children: React.ReactNode;
};
/**
 * A component that displays the main content of the application and listens for scroll events.
 * @param children - the content of the application
 * @returns - the main content of the application
 */
export default function Layout({ children }: LayoutProps): JSX.Element {

  const [activeSection, setActiveSection] = useState("");

  useLayoutEffect(() => {
    if (window.screenY === 0) {
      setActiveSection("| Portfolio");
    }
  }, []);

  useEffect(() => {
    document.title = `Radoslav Marinov ${activeSection}`;
    if (activeSection === "" || activeSection === "#portfolio") {
      window.history.pushState(null, "", ``);
    } else {
      window.history.pushState(null, "", `#${activeSection.replace("| ", "").replace(/ /g, "-")}`);
    }

  }, [activeSection]);

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    let currentSection: string | null = "";

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight / 2) {
        currentSection = "| " + section.getAttribute("id")?.replace(/-/g, " ");
      }
    });

    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <main className="flex flex-col gap-8 overflow-x-hidden max-w-full">{children}</main>
      <Footer />
      <SpeedInsights />
    </>
  );
}