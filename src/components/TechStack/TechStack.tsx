import MomentJSLogo from '../../assets/images/moment-js.svg';
import BloggerLogo from '../../assets/images/blogger.png';
import DaisyUILogo from '../../assets/images/daisyui.png';
import NextraLogo from '../../assets/images/nextra.png';
import MDXLogo from '../../assets/images/mdx.svg';
import ChakraUILogo from '../../assets/images/chakra-ui.png';

type TechStackProps = {
  text?: string;
  width?: number;
  all?: boolean;
  js?: boolean;
  ts?: boolean;
  react?: boolean;
  redux?: boolean;
  zustand?: boolean;
  next?: boolean;
  node?: boolean;
  firebase?: boolean;
  jest?: boolean;
  csharp?: boolean;
  html?: boolean;
  css?: boolean;
  github?: boolean;
  git?: boolean;
  figma?: boolean;
  tailwind?: boolean;
  json?: boolean;
  moment?: boolean;
  blogger?: boolean;
  daisyui?: boolean;
  nextra?: boolean;
  mdx?: boolean;
  chakraui?: boolean;
  mongodb?: boolean;
  express?: boolean;
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
 * @param {boolean} [props.redux=false] - Flag indicating whether to display Redux logo.
 * @param {boolean} [props.zustand=false] - Flag indicating whether to display Zustand logo.
 * @param {boolean} [props.next=false] - Flag indicating whether to display Next.js logo.
 * @param {boolean} [props.node=false] - Flag indicating whether to display Node.js logo.
 * @param {boolean} [props.firebase=false] - Flag indicating whether to display Firebase logo.
 * @param {boolean} [props.jest=false] - Flag indicating whether to display Jest logo.
 * @param {boolean} [props.csharp=false] - Flag indicating whether to display C# logo.
 * @param {boolean} [props.html=false] - Flag indicating whether to display HTML logo.
 * @param {boolean} [props.css=false] - Flag indicating whether to display CSS logo.
 * @param {boolean} [props.github=false] - Flag indicating whether to display GitHub logo.
 * @param {boolean} [props.git=false] - Flag indicating whether to display Git logo.
 * @param {boolean} [props.figma=false] - Flag indicating whether to display Figma logo.
 * @param {boolean} [props.tailwind=false] - Flag indicating whether to display tailwindcss logo.
 * @param {boolean} [props.json=false] - Flag indicating whether to display JSON logo.
 * @param {boolean} [props.moment=false] - Flag indicating whether to display Moment.js logo.
 * @param {boolean} [props.blogger=false] - Flag indicating whether to display Blogger logo.
 * @param {boolean} [props.daisyui=false] - Flag indicating whether to display DaisyUI logo.
 * @param {boolean} [props.nextra=false] - Flag indicating whether to display Nextra logo.
 * @param {boolean} [props.mdx=false] - Flag indicating whether to display MDX logo.
 * @param {boolean} [props.chakraui=false] - Flag indicating whether to display Chakra UI logo.
 * @param {boolean} [props.mongodb=false] - Flag indicating whether to display MongoDB logo.
 * @param {boolean} [props.express=false] - Flag indicating whether to display Express logo.
 * 
 * @example
 * // Display all tech stack logos.
 * <TechStack all={true} text="" />
 * 
 * @example
 * // Display only JavaScript, TypeScript, and React logos.
 * <TechStack js ts react />
 *
 * @returns {JSX.Element} The rendered tech stack component.
 */
export default function TechStack({ text = "", width = 70, all = false, js = false, ts = false, react = false, redux = false, zustand = false, next = false, node = false, express = false, mongodb = false, firebase = false, jest = false, csharp = false, html = false, css = false, github = false, git = false, figma = false, tailwind = false, daisyui = false, chakraui = false, json = false, moment = false, blogger = false, nextra = false, mdx = false }: TechStackProps): JSX.Element {

  if (all) {
    js = ts = react = redux = zustand = next = node = express = mongodb = firebase = jest = csharp = html = css = github = figma = tailwind = daisyui = chakraui = git = json = moment = blogger = nextra = true;
  }

  const techDivStyle = "dropdown dropdown-hover item";
  const techNameStyle = "dropdown-content w-full text-center";

  return (
    <div className="lg:flex text-center lg:flex-auto gap-2 mx-10 mb-10 justify-center list">
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

      {redux &&
        <div className={techDivStyle}>
          <img width={width} alt="redux logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" />
          <p className={techNameStyle}>Redux</p>
        </div>
      }

      {zustand &&
        <div className={techDivStyle}>
          <img width={width} alt="zustand logo" src="https://user-images.githubusercontent.com/958486/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg" />
          <p className={techNameStyle}>Zustand</p>
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

      {express &&
        <div className={techDivStyle}>
          <img width={width} alt="express logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
          <p className={techNameStyle}>Express</p>
        </div>
      }

      {mongodb &&
        <div className={techDivStyle}>
          <img width={width} alt="mongodb logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
          <p className={techNameStyle}>MongoDB</p>
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

      {figma &&
        <div className={techDivStyle}>
          <img width={width} alt="figma logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" />
          <p className={techNameStyle}>Figma</p>
        </div>
      }

      {tailwind &&
        <div className={techDivStyle}>
          <img width={width} alt="tailwind logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" />
          <p className={techNameStyle}>TailwindCSS</p>
        </div>
      }

      {daisyui &&
        <div className={techDivStyle}>
          <img width={width} alt="daisyui logo" src={DaisyUILogo} />
          <p className={techNameStyle}>DaisyUI</p>
        </div>
      }

      {chakraui &&
        <div className={techDivStyle}>
          <img width={width} alt="chakraui logo" src={ChakraUILogo} />
          <p className={techNameStyle}>Chakra UI</p>
        </div>
      }

      {json &&
        <div className={techDivStyle}>
          <img width={width} alt="json logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/json/json-original.svg" />
          <p className={techNameStyle}>JSON</p>
        </div>
      }

      {moment &&
        <div className={techDivStyle}>
          <img width={width} alt="moment logo" src={MomentJSLogo} />
          <p className={techNameStyle}>Moment.js</p>
        </div>
      }

      {blogger &&
        <div className={techDivStyle}>
          <img width={width} alt="blogger logo" src={BloggerLogo} />
          <p className={techNameStyle}>Blogger</p>
        </div>
      }

      {nextra &&
        <div className={techDivStyle}>
          <img width={width} alt="nextra logo" src={NextraLogo} />
          <p className={techNameStyle}>Nextra</p>
        </div>
      }

      {mdx &&
        <div className={techDivStyle}>
          <img width={width} alt="mdx logo" src={MDXLogo} />
          <p className={techNameStyle}>MDX</p>
        </div>
      }

    </div>
  )
};