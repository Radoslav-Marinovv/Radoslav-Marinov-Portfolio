import Hero from "./components/Hero/Hero"
import Education from "./components/Education/Education"
import MyTechStack from "./components/TechStack/MyTechStack.tsx"
import Projects from "./components/ProjectCard/Projects.tsx"
import Layout from "./hoc/Layout/Layout.tsx"

function App() {

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
