import EducationItem from "./EducationItem";

type EducationItemProps = {
  id: string;
  title: string;
  degree: string;
  date: string;
  location: string;
  logoImage: string;
};

type EducationProps = {
  educationItems: EducationItemProps[];
};

/**
 * A component that displays information about the education
 * @param educationItems - an array of objects with information about the education
 * @returns - a list of components that displays information about the education
 */
export default function Education({ educationItems }: EducationProps): JSX.Element {
  return (
    <div className="flex flex-col justify-center align-middle text-center">
      <h2 className="text-4xl font-bold py-8">Education</h2>
      <div className="flex flex-wrap justify-center align-baseline">
        {educationItems.map((item: EducationItemProps) => (
          <EducationItem
            key={item.id}
            title={item.title}
            degree={item.degree}
            date={item.date}
            location={item.location}
            logoImage={item.logoImage}
          />
        ))}
      </div>
    </div>
  );
}