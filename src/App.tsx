import Layout from "./hoc/Layout/Layout.tsx"

import Hero from "./components/Hero/Hero"
import Education from "./components/Education/Education"
import Projects from "./components/ProjectCard/Projects.tsx"
import MyTechStack from "./components/TechStack/MyTechStack.tsx"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"

function App() {
  gsap.registerPlugin(ScrollTrigger);
  return (
    <Layout>
      <Hero />
      <Education />
      <MyTechStack />
      <Projects />
    </Layout>
  )
}

export default App
