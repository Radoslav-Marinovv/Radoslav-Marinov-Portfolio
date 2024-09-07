import profilePicture from "../../assets/Images/profile-picture.png";
import phoneLogo from "../../assets/Images/icon-phone.svg";
import mailLogo from "../../assets/Images/icons-mail.png";
import resume from "../../assets/Files/RadoslavMarinovResume.pdf";

export default function Hero(): JSX.Element {

  const anchorSocialStyle = "btn hover:text-blue-400";
  const fieldsetStyle = "border border-white border-opacity-10 rounded-lg shadow-md";
  const legendStyle = "xl:h-full ml-4 p-2 font-bold text-orange-500 text-lg";

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={profilePicture}
          alt="profile picture"
          width={384}
          className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold ">Radoslav Marinov</h1>
          <fieldset className={fieldsetStyle}>
            <legend className={legendStyle}>Software Developer</legend>
            <p className="p-6">
              I am a software developer with a passion for web development. I have experience with JavaScript, TypeScript, React, Next.js, Node.js, and Firebase. I am also familiar with C# and have experience with HTML, CSS, and Git.
            </p>
          </fieldset>

          <fieldset className={fieldsetStyle}>
            <legend className={legendStyle}>You can find me here</legend>
            <div className="">
              <a
                href="tel:+359888788687"
                className={anchorSocialStyle}>
                <img
                  className="w-8 h-8"
                  alt="phone logo"
                  src={phoneLogo}
                />
                <p className="text-lg">Phone: +359 888 788 687</p>
              </a>
              <a
                href="https://github.com/Radoslav-Marinovv"
                target="_blank"
                className={anchorSocialStyle}>
                <img
                  className="w-8 h-8"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                  alt="github logo" />
                <p className="text-lg">GitHub: Radoslav-Marinovv</p>
              </a>
              <a
                href="mailto:radoslav.marinov89@gmail.com"
                className={anchorSocialStyle}>
                <img
                  className="w-8 h-8"
                  src={mailLogo}
                  alt="gmail logo" />
                <p className="text-lg">Mail: radoslav.marinov89@gmail.com</p>
              </a>
              <a
                href="https://www.linkedin.com/in/radoslav-marinov-0b940689/"
                target="_blank"
                className={anchorSocialStyle}>
                <img
                  className="w-8 h-8"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                  alt="linkedin logo" />
                <p className="text-lg">LinkedIn: Radoslav Marinov</p>
              </a>
            </div>
            <div className={`w-full m-2 text-center`}> Download my resume <a href={resume} download="RadoslavMarinovResume.pdf" className="btn btn-outline btn-accent btn-sm scale-95">RadoslavMarinovResume.pdf</a></div>
          </fieldset>
        </div>
      </div>
    </div>
  );
}