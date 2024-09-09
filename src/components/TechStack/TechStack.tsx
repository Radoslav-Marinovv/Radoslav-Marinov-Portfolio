import TailwindImage from "../../assets/Images/tailwind.jpg";
import JsonImage from "../../assets/Images/JSON.png";
import MomentJSLogo from '../../assets/Images/moment-js.svg';

type TechStackProps = {
  text?: string;
  width?: number;
  all?: boolean;
  js?: boolean;
  ts?: boolean;
  react?: boolean;
  next?: boolean;
  node?: boolean;
  firebase?: boolean;
  jest?: boolean;
  csharp?: boolean;
  html?: boolean;
  css?: boolean;
  github?: boolean;
  git?: boolean;
  tailwind?: boolean;
  json?: boolean;
  moment?: boolean;
};
/**
 * Renders a tech stack component with customizable options.
 *
 * @param {Object} props - The component props.
 * @param {string} [props.text="Tech Stack:"] - The text to display as the heading of the tech stack component.
 * @param {number} [props.width=70] - The width of the tech stack logos.
 * @param {boolean} [props.all=false] - Flag indicating whether to display all tech stack logos.
 * @param {boolean} [props.js=false] - Flag indicating whether to display JavaScript logo.
 * @param {boolean} [props.ts=false] - Flag indicating whether to display TypeScript logo.
 * @param {boolean} [props.react=false] - Flag indicating whether to display React logo.
 * @param {boolean} [props.next=false] - Flag indicating whether to display Next.js logo.
 * @param {boolean} [props.node=false] - Flag indicating whether to display Node.js logo.
 * @param {boolean} [props.firebase=false] - Flag indicating whether to display Firebase logo.
 * @param {boolean} [props.jest=false] - Flag indicating whether to display Jest logo.
 * @param {boolean} [props.csharp=false] - Flag indicating whether to display C# logo.
 * @param {boolean} [props.html=false] - Flag indicating whether to display HTML logo.
 * @param {boolean} [props.css=false] - Flag indicating whether to display CSS logo.
 * @param {boolean} [props.github=false] - Flag indicating whether to display GitHub logo.
 * @param {boolean} [props.git=false] - Flag indicating whether to display Git logo.
 * @param {boolean} [props.tailwind=false] - Flag indicating whether to display tailwindcss logo.
 * @param {boolean} [props.json=false] - Flag indicating whether to display JSON logo.
 * @param {boolean} [props.moment=false] - Flag indicating whether to display Moment.js logo.
 *
 * @returns {JSX.Element} The rendered tech stack component.
 */
export default function TechStack({ text = "Tech Stack:", width = 70, all = false, js = false, ts = false, react = false, next = false, node = false, firebase = false, jest = false, csharp = false, html = false, css = false, github = false, git = false, tailwind = false, json = false, moment = false }: TechStackProps): JSX.Element {

  if (all) {
    js = ts = react = next = node = firebase = jest = csharp = html = css = github = tailwind = git = json = moment = true;
  }

  const techDivStyle = "dropdown dropdown-hover mb-8 p-2 item";
  const techNameStyle = "dropdown-content w-full text-center";

  return (
    <div className="lg:flex text-center lg:flex-auto gap-2 justify-center list">
      <h2 className="p-2 text-3xl font-semibold">{text}</h2>

      {js &&
        <div className={techDivStyle}>
          <img width={width} alt="javascript logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
          <p className={techNameStyle}>JavaScript</p>
        </div>
      }

      {ts &&
        <div className={techDivStyle}>
          <img width={width} alt="typescript logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
          <p className={techNameStyle}>TypeScript</p>
        </div>
      }

      {react &&
        <div className={techDivStyle}>
          <img width={width} alt="react logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
          <p className={techNameStyle}>React</p>
        </div>
      }

      {next &&
        <div className={techDivStyle}>
          <img width={width} alt="next logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" />
          <p className={techNameStyle}>Next.js</p>
        </div>
      }

      {node &&
        <div className={techDivStyle}>
          <img width={width} alt="node logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
          <p className={techNameStyle}>Node.js</p>
        </div>
      }

      {firebase &&
        <div className={techDivStyle}>
          <img width={width} alt="firebase logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" />
          <p className={techNameStyle}>Firebase</p>
        </div>
      }

      {jest &&
        <div className={techDivStyle}>
          <img width={width} alt="jest logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" />
          <p className={techNameStyle}>Jest</p>
        </div>
      }

      {csharp &&
        <div className={techDivStyle}>
          <img width={width} alt="csharp logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" />
          <p className={techNameStyle}>C#</p>
        </div>
      }

      {html &&
        <div className={techDivStyle}>
          <img width={width} alt="html logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
          <p className={techNameStyle}>HTML</p>
        </div>
      }

      {css &&
        <div className={techDivStyle}>
          <img width={width} alt="css logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
          <p className={techNameStyle}>CSS</p>
        </div>
      }

      {github &&
        <div className={techDivStyle}>
          <img width={width} alt="github logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
          <p className={techNameStyle}>GitHub</p>
        </div>
      }

      {git &&
        <div className={techDivStyle}>
          <img width={width} alt="git logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
          <p className={techNameStyle}>Git</p>
        </div>
      }


      {tailwind &&
        <div className={techDivStyle}>
          <img width={width} alt="tailwind logo" src={TailwindImage} />
          <p className={techNameStyle}>TailwindCSS</p>
        </div>
      }
      {json &&
        <div className={techDivStyle}>
          <img width={width} alt="json logo" src={JsonImage} />
          <p className={techNameStyle}>JSON</p>
        </div>
      }
      {moment &&
        <div className={techDivStyle}>
          <img width={width} alt="moment logo" src={MomentJSLogo} />
          <p className={techNameStyle}>Moment.js</p>
        </div>
      }

    </div>
  )
};