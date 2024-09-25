import Hero from "./components/Hero/Hero"
import Education from "./components/Education/Education"
import MyTechStack from "./components/TechStack/MyTechStack.tsx"
import Projects from "./components/ProjectCard/Projects.tsx"

function App() {

  return (
    <div className="flex flex-col gap-8">
      <Hero />
      <Education />
      <MyTechStack />
      <Projects />
    </div>
  )
}

export default App
