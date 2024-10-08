import { Link } from "react-router-dom";
import { CTA } from "../components";
import { projects } from "../constants";
import { arrow } from "../assets/icons";

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Mes{" "}
        <span className="blue-gradient_text drop-shadow font-semibold">
          Projets
        </span>
      </h1>

      <p className="text-slate-500 mt-2 leading-relaxed">
        J&apos;ai réalisé beaucoup de projets. Mais voici ceux qui me tiennent
        le plus à cœur. J&apos;ai essayé d&apos;en mettre le plus possible en
        ligne afin que vous puissiez y accéder plus facilement. J&apos;espère
        que vous les apprécierez !
      </p>

      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="block-container w-12 h-12">
              <div
                className={`btn-back rounded-xl ${project.theme}`}
                aria-hidden="true"
              />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={project.iconUrl}
                  alt={`Icon for ${project.name}`}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>

            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-500">{project.description}</p>
              <div className="mt-5 flex items-center gap-2 font-poppins">
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600"
                  aria-label={`Discover ${project.name}`}
                >
                  Découvrir
                </Link>
                <img
                  src={arrow}
                  alt="Arrow indicating more"
                  className="w-4 h-4 object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default Projects;
