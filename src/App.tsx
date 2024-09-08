import Hero from "./components/Hero/Hero"
import ProjectCard from "./components/ProjectCard/ProjectCard"
import TechStack from "./components/TechStack/TechStack"
import Lawyers from "./assets/Images/lawyers.jpg"
import LikeComment from "./assets/Images/like-comment.jpg"


function App() {

  return (
    <div className="flex flex-col justify-center">
      <Hero />
      <div className="flex flex-col gap-4 items-center justify-center max-w-full max-h-full mt-4 mx-4 pt-6 pb-8  rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-center">My Tech Stack</h2>
        <TechStack all={true} text="" />
      </div>
      <div className="flex flex-col">

        <h2 className="text-4xl font-bold text-center">Projects</h2>
        <div className="p-4">

          <ProjectCard
            title={`"Groshev & Partners"`}
            description={"Took part in leading the communication with the client, planned the technologies that best met the client's requirements, and determined the necessary steps to meet the client's criteria."}
            techStack={<TechStack next react ts tailwind json />}
            github="https://github.com/Radoslav-Marinovv/lawyers-next"
            website="https://www.legalbg.net/"
            image={Lawyers}
          />

          <ProjectCard
            title={`TWITTER LIKE SPA`}
            description={"React with TypeScript application created by Vite. Display mock data on main page by fetching it from custom hook. Validate it before creating new post (check for the min – max length of the post). Communication between current User Object and Post Object and update likes and posts."}
            techStack={<TechStack react ts tailwind json moment />}
            github="https://github.com/Radoslav-Marinovv/like-comment"
            website="https://radoslav-marinovv.github.io/like-comment/"
            image={LikeComment}
          />
        </div>
      </div>
    </div>
  )
}

export default App
