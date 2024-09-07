import Hero from "./components/Hero/Hero"
import TechStack from "./components/TechStack/TechStack"

function App() {

  return (
    <div className="flex flex-col justify-center">
      <Hero />
      <div className="flex flex-col gap-4 items-center justify-center max-w-full max-h-full mt-4 mx-4 pt-6 pb-8  rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold">My Tech Stack</h2>
        <TechStack all={true} text="" />
      </div>
    </div>
  )
}

export default App
