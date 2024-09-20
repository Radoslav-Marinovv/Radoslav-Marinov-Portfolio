import { FIELDSET_STYLE, LEGEND_STYLE } from "../../common/constants";

type ProjectCardProps = {
  title: string;
  description: string;
  techStack: React.ReactNode;
  github: string;
  website?: string;
  image: string;
};

export default function ProjectCard({ title, description, techStack, github, website, image }: ProjectCardProps): JSX.Element {

  return (
    <>
      <div className="card md:flex-row bg-base-300 md:w-2/3 w-full md:max-h-screen shadow-xl my-8">
        <figure className="border rounded-lg border-primary shadow-xl md:hover:w-64 md:max-w-64">
          <img
            className="rounded-lg w-full h-64
             md:h-full md:w-64 md:object-cover
             md:hover:absolute md:hover:top-2 md:hover:left-0 md:hover:z-10 
             md:hover:w-fit md:hover:object-contain
             md:hover:border md:hover:border-primary md:hover:rounded-lg md:hover:shadow-2xl  
             md:transition-all md:duration-1000 md:hover:scale-125 md:hover:ease-linear"
            src={image}
            alt={title + "image"} />
        </figure>
        <div className="card-body md:w-2/3">
          <h2 className="card-title">
            {title}
          </h2>
          <p className="card-bordered font-medium">
            {description}
          </p>
          <div className="pt-4 card-bordered card-actions justify-start">
            {techStack}
          </div>
          <div className="card-bordered card-actions justify-center md:justify-end">
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
