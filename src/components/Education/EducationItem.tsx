import { FIELDSET_STYLE, LEGEND_STYLE } from "../../common/constants";

type EducationItemProps = {
  title: string;
  degree: string;
  date: string;
  location: string;
  logoImage: string;
};
/**
 * A card with information about the educational institution
 * @param title - the name of the educational institution
 * @param degree - the degree obtained
 * @param date - the period of study
 * @param location - the location of the educational institution
 * @param logoImage - the logo of the educational institution
 * @returns - a card with information about the educational institution
 */
export default function EducationItem({ title, degree, date, location, logoImage }: EducationItemProps): JSX.Element {

  return (
    <div className="card card-bordered m-2 bg-base-300 md:flex-row md:w-2/3 w-full md:max-h-screen shadow-xl my-8 text-left">
      <figure className="shadow-xl md:hover:w-64 md:max-w-64 p-4">
        <img
          className="rounded-lg w-full h-64
             md:h-full md:w-64 md:object-contain md:object-center
             md:hover:top-2 md:hover:left-0 md:hover:z-10 
             md:hover:w-fit md:hover:object-contain 
             md:transition-all md:duration-1000 md:hover:scale-105 md:hover:ease-linear"
          src={logoImage}
          alt={title + "image"} />
      </figure>
      <div className="card-body md:w-2/3">
        <h2 className="card-title">
          {title}
        </h2>
        <p className="card-bordered font-medium">
          {degree}
        </p>
        <div className="pt-4 card-bordered card-actions justify-start">
          <fieldset className={FIELDSET_STYLE}>
            <legend className={LEGEND_STYLE}>Date</legend>
            <p>{date}</p>
          </fieldset>
          <fieldset className={FIELDSET_STYLE}>
            <legend className={LEGEND_STYLE}>Location</legend>
            <p>{location}</p>
          </fieldset>
        </div>
      </div>
    </div>
  )
};