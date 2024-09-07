import BusinessCard from "./components/BusinessCard/BusinessCard"
import Hero from "./components/Hero/Hero"
import TechStack from "./components/TechStack/TechStack"

function App() {

  return (
    <div className="flex flex-col justify-center">
      <Hero />
      <div className="flex items-center justify-center max-w-full max-h-full mt-4 mx-4 pt-6 pb-8  rounded-lg shadow-lg">
        <TechStack all={true} />
      </div>
    </div>
  )
}

export default App
