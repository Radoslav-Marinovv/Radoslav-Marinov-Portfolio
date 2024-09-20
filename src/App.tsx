import Hero from "./components/Hero/Hero"
import ProjectCard from "./components/ProjectCard/ProjectCard"
import TechStack from "./components/TechStack/TechStack"
import Lawyers from "./assets/Images/lawyers.jpg"
import LikeComment from "./assets/Images/like-comment.jpg"
import TicTacToe from "./assets/Images/tic-tac-toe-light.jpg"
import PortfolioOld from "./assets/Images/portfolio.jpg"
import ForumTRT from './assets/Images/tasty-recipe-talk.jpg'
import MotionMate from './assets/Images/motion-mate.jpg'
import Education from "./components/Education/Education"

function App() {

  return (
    <div className="flex flex-col gap-8 ">
      <Hero />
      <Education />
      <div className="items-center justify-center max-w-full max-h-full rounded-lg shadow-lg">
        <h2 className="pb-8 text-4xl font-bold text-center">My Tech Stack</h2>
        <TechStack all={true} text="" />
      </div>
      <div className="flex flex-col text-center">
        <h2 className="text-4xl font-bold py-8">Projects</h2>
        <div className="flex flex-col p-2 align-middle justify-center items-center">
          <ProjectCard
            title={`Fitness tracking application: Motion Mate`}
            description={"As part of a team, I was involved in creating the fitness tracking application, where users can track their daily exercises, such as calories burned, exercises done, or other activities. Users can set their goals, track their progress, add friends (and see their progress as well). I was responsible for creating the database connection, the GitHub repository, and building the functionality and style for the project."}
            techStack={<TechStack react js firebase tailwind daisyui json />}
            github="https://github.com/A58-Agents-Team1/Motion.Mate"
            website="https://a58-agents-team1.github.io/Motion.Mate//"
            image={MotionMate}
          />
          <ProjectCard
            title={`Forum: Tasty Recipe Talk`}
            description={"As part of a team, I was involved in creating the food recipe forum, creating the database connection, the GitHub repository. Building functionality and style of the project"}
            techStack={<TechStack react js firebase chakraui json />}
            github="https://github.com/A58-Agents-Team1/Tasty-Recipe-Talk"
            image={ForumTRT}
          />
          <ProjectCard
            title={`"Groshev & Partners"`}
            description={"Took part in leading the communication with the client, planned the technologies that best met the client's requirements, and determined the necessary steps to meet the client's criteria."}
            techStack={<TechStack next react ts tailwind daisyui json blogger />}
            github="https://github.com/Radoslav-Marinovv/lawyers-next"
            website="https://www.legalbg.net/"
            image={Lawyers}
          />
          <ProjectCard
            title={`TWITTER LIKE SPA`}
            description={"React with TypeScript application created by Vite. Presenting mock data on main page by fetching it from custom hook. Validation before creating new post (check for the minimum - maximum length of the post). Communication between user and post objects and update likes and posts at user object."}
            techStack={<TechStack react ts tailwind json moment />}
            github="https://github.com/Radoslav-Marinovv/like-comment"
            website="https://radoslav-marinovv.github.io/like-comment/"
            image={LikeComment}
          />
          <ProjectCard
            title={`Tic Tac Toe`}
            description={"Tic tac toe game written on React with Type Script and deployed on Github Pages."}
            techStack={<TechStack react ts tailwind />}
            github="https://github.com/Radoslav-Marinovv/react-ts-tic-tac-toe"
            website="https://radoslav-marinovv.github.io/react-ts-tic-tac-toe/"
            image={TicTacToe}
          />
          <ProjectCard
            title={`Portfolio (old)`}
            description={"The portfolio is created with Next.js and a library called Nextra that gives flexible generation of content based on MDX files."}
            techStack={<TechStack next ts nextra mdx />}
            github="https://github.com/Radoslav-Marinovv/portfolio"
            website="https://portfolio-psi-one-10.vercel.app/"
            image={PortfolioOld}
          />
        </div>
      </div>
    </div>
  )
}

export default App
