import profilePicture from "../../assets/Images/profile-picture.png";
import phoneLogo from "../../assets/Images/icon-phone.svg";
import mailLogo from "../../assets/Images/icons-mail.png";
import resume from "../../assets/Files/RadoslavMarinovResume.pdf";

/**
 * BusinessCard component
 * @returns JSX.Element
 */
export default function BusinessCard(): JSX.Element {

  const linkNameStyle = "dropdown-content w-72 text-center";
  const linkDivTopStyle = "flex dropdown dropdown-top dropdown-hover m-2 p-2";
  const linkDivBottomStyle = "flex dropdown dropdown-bottom dropdown-hover m-2 p-2";
  const anchorSocialStyle = "text-white hover:text-blue-400 flex flex-row gap-2 items-center justify-center";
  const borderStyle = "rounded-full border-4 border-gray-600 border-opacity-40 shadow-xl shadow-gray-900 hover:shadow-lg";

  return (
    <div className="flex flex-row items-center justify-center w-full h-full">
      <div className="m-4 flex flex-col items-center justify-center w-full h-full p-4 bg-gray-800 rounded-lg shadow-lg">
        <div className="flex flex-col">
          <img
            className={`xl:w-96 xl:h-96 ${borderStyle}`}
            src={profilePicture}
            alt="profile picture"
            width={384}
          />
          <div>
            <h1 className="mt-4 text-2xl font-semibold text-white text-center">Radoslav Marinov</h1>
            <p className="mt-2 text-lg text-white text-center">Software Developer</p>
          </div>
        </div>
        <div className="flex flex-col w-full h-full m-2 xl:flex-row">
          <div className="card xl:w-1/3 bg-gray-700 rounded-box xl:h-52 h-fit place-items-center">
            <div className="flex flex-col w-full items-center justify-center gap-4">
              <h2 className="xl:h-full p-2 text-center text-white text-2xl">You can find me here</h2>
              <div className="grid sm:grid-cols-2 gap-4 text-center">
                <div className={linkDivBottomStyle}>
                  <a
                    href="tel:+359888788687"
                    className={anchorSocialStyle}>
                    <p className="text-xl">Phone</p>
                    <img
                      className="w-8 h-8"
                      alt="phone logo"
                      src={phoneLogo}
                    />
                    <p className={linkNameStyle}>Phone: +359 888 788 687</p>
                  </a>
                </div>
                <div className={linkDivBottomStyle}>
                  <a
                    href="mailto:radoslav.marinov89@gmail.com"
                    className={anchorSocialStyle}>
                    <p className="text-xl">Gmail</p>
                    <img
                      className="w-8 h-8"
                      src={mailLogo}
                      alt="gmail logo" />
                    <p className={linkNameStyle}>Gmail: radoslav.marinov89@gmail.com</p>
                  </a>
                </div>
                <div className={linkDivTopStyle}>
                  <a
                    href="https://github.com/Radoslav-Marinovv"
                    target="_blank"
                    className={anchorSocialStyle}>
                    <p className="text-xl">GitHub</p>
                    <img
                      className="w-8 h-8"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                      alt="github logo" />
                    <p className={linkNameStyle}>GitHub: Radoslav-Marinovv</p>
                  </a>
                </div>
                <div className={linkDivTopStyle}>
                  <a
                    href="https://www.linkedin.com/in/radoslav-marinov-0b940689/"
                    target="_blank"
                    className={anchorSocialStyle}>
                    <p className="text-xl">LinkedIn</p>
                    <img
                      className="w-8 h-8"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                      alt="linkedin logo" />
                    <p className={linkNameStyle}>LinkedIn: Radoslav Marinov</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="divider xl:divider-horizontal"></div>
          <div className="card xl:w-1/3 bg-gray-700 rounded-box grid xl:h-52 h-fit flex-grow place-items-center">
            <p className="w-full break-before-auto m-4 p-4 text-lg text-white text-center">I am a software developer with a passion for web development. I have experience with JavaScript, TypeScript, React, Next.js, Node.js, and Firebase. I am also familiar with C# and have experience with HTML, CSS, and Git.</p>
          </div>
          <div className="divider xl:divider-horizontal"></div>
          <div className="card xl:w-1/3 bg-gray-700 rounded-box grid h-52 flex-grow place-items-center">
            <a
              className={`p-4 ${borderStyle}`}
              href={resume}
              target="_blank">
              <h2 className="text-gray-200 text-2xl">Download my resume</h2>
            </a>
          </div>
        </div>
      </div>
    </div >
  )
}