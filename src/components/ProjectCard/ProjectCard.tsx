import { FIELDSET_STYLE, LEGEND_STYLE } from "../../common/constants";

type ProjectCardProps = {
  title: string;
  description: string;
  techStack: React.ReactNode;
  github: string;
  website: string;
  image: string;
};

export default function ProjectCard({ title, description, techStack, github, website, image }: ProjectCardProps): JSX.Element {

  return (
    <>
      <div className="card border bg-base-100 w-full shadow-xl my-8">
        <figure>
          <img
            className="rounded-t-lg scale-90"
            src={image}
            alt={title + "image"} />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-orange-500">
            {title}
          </h2>
          <p>{description}</p>
          <div className="pt-4 card-actions justify-start">
            {techStack}
          </div>
          <div className="card-actions justify-end">
            {website && <fieldset className={FIELDSET_STYLE}>
              <legend className={LEGEND_STYLE}>Website</legend>
              <a
                className="btn btn-link"
                target="_blank"
                href={website}>
                {website}
              </a>
            </fieldset>}
            {github && <fieldset className={`${FIELDSET_STYLE}`}>
              <legend className={LEGEND_STYLE}>GitHub repository</legend>
              <a
                className="btn btn-link"
                target="_blank"
                href={github}>
                {github}
              </a>
            </fieldset>}
          </div>
          <div >
          </div>
        </div>
      </div>
    </>

  )
};
