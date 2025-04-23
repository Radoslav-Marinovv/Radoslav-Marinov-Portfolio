import profilePicture from "../../assets/images/profile-picture.png";
import phoneLogo from "../../assets/images/icon-phone.svg";
import mailLogo from "../../assets/images/icons-mail.png";
import resume from "../../assets/files/RadoslavMarinovResume.pdf";
import { FIELDSET_STYLE, LEGEND_STYLE } from "../../common/constants";

/**
 * Renders a hero component with customizable options.
 * @returns {JSX.Element} The rendered hero component.
 */
export default function Hero(): JSX.Element {

  const anchorSocialStyle = "btn my-4 sx:m-2 h-fit hover:text-blue-400 text-lg";

  return (
    <section
      id="Portfolio"
      className="hero bg-base-300 min-h-screen">
      <div className="hero-content max-w-sx w-screen flex-col lg:flex-row">
        <img
          src={profilePicture}
          alt="profile picture"
          width={384}
          className="max-w-sx rounded-lg shadow-2xl" />
        <div>
          <h1
            className="text-outline md:text-5xl text-4xl font-bold lg:text-start text-center">
            Radoslav Marinov
          </h1>
          <fieldset className={FIELDSET_STYLE}>
            <legend className={LEGEND_STYLE}>Software Developer</legend>
            <p className="p-6">
              I am a software developer with a passion for web development. I have experience with JavaScript, TypeScript, React, Next.js, Node.js, MongoDB and Firebase. I am also familiar with C# and have experience with HTML, CSS, and Git.
            </p>
          </fieldset>
          <fieldset className={FIELDSET_STYLE}>
            <legend className={LEGEND_STYLE}>You can find me here</legend>
            <div className="flex flex-wrap justify-evenly align-baseline ">
              <div className="lg:w-1/2 pl-2">
                <a
                  href="tel:+359888788687"
                  className={anchorSocialStyle}>
                  <img
                    className="w-8 h-8"
                    alt="phone logo"
                    src={phoneLogo}
                  />
                  +359 888 788 687
                </a>
                <a
                  href="mailto:radoslav.marinov89@gmail.com"
                  className={anchorSocialStyle}>
                  <img
                    className="w-8 h-8"
                    src={mailLogo}
                    alt="gmail logo" />
                  radoslav.marinov89@gmail.com
                </a>
              </div>
              <div className="lg:w-1/2 pl-2">
                <a
                  href="https://www.linkedin.com/in/radoslav-marinov-0b940689/"
                  target="_blank"
                  className={anchorSocialStyle}>
                  <img
                    className="w-8 h-8"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                    alt="linkedin logo" />
                  Radoslav Marinov
                </a>
                <a
                  href="https://github.com/Radoslav-Marinovv"
                  target="_blank"
                  className={anchorSocialStyle}>
                  <img
                    className="w-8 h-8"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                    alt="github logo" />
                  Radoslav-Marinovv
                </a>
              </div>
              <div className={`w-full p-4 text-center`}> Download my resume <a href={resume} download="RadoslavMarinovResume.pdf" className="btn btn-outline btn-accent btn-sm scale-95">RadoslavMarinovResume.pdf</a></div>
            </div>
          </fieldset>
        </div>
      </div>
    </section>
  );
}