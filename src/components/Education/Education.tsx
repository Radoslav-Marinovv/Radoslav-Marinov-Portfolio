import EducationItem from "./EducationItem";
import VUZFLogo from "../../assets/images/VUZF-logo.png";
import TelerikLogo from "../../assets/Images/telerik-academy.svg";

/**
 * A component that displays information about the education of the author
 * @returns - a component that displays information about the education of the author
 */
export default function Education(): JSX.Element {
  return (
    <div className="flex flex-col justify-center align-middle text-center">
      <h2 className="text-4xl font-bold py-8">Education</h2>
      <div className="flex flex-wrap justify-center align-baseline">
        <EducationItem
          title={`Telerik Academy`}
          degree={"JavaScript Alpha Track"}
          date={"01/2024 - 06/2024"}
          location={"Sofia, Bulgaria"}
          logoImage={TelerikLogo}
        />
        <EducationItem
          title={`VUZF UNIVERSITY`}
          degree={"Bachelor`s degree, Accounting"}
          date={"10/2009 - 07/2013"}
          location={"Sofia, Bulgaria"}
          logoImage={VUZFLogo}
        />
      </div>
    </div>
  );
}