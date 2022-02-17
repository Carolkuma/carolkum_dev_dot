import * as React from "react";
import ExternalLinkButton from "~/components/ExternalLinkButton/ExternalLinkButton";
import { otherProjects } from "~/constants";

const OtherProjects: React.FC = ({}) => {
  return (
    <div className="others-wrapper text-textSmColor">
      <ul className="other-projects-wrapper m-0 p-0 text-base md:flex md:flex-col grid grid-rows-7 gap-5">
        {otherProjects.map((project) => (
          <li
            className="other-project-wrapper flex flex-col items-center justify-between md:grid md:grid-cols-4 "
            key={project.name}
          >
            <div className="info inline-flex items-center md:w-48 md:mr-5 custom:mr-0 custom:w-64 mb-5 md:mb-0">
              <img src={project.icon} alt={project.name} className="" />
              <p className="font-medium text-lg">{project.name}</p>
            </div>
            <span className="md:flex-1 text-base text-center w-full xxs:w-4/5 xs:w-2/3 md:w-full md:text-left">{project.description}</span>
            <div className="inline-flex items-center mt-5 md:mt-0 md:ml-5 custom:ml-0">
              <ExternalLinkButton
                to={project.gitRepo}
                linkProps={{
                  target: "_blank"
                }}
              >
                View source
              </ExternalLinkButton>
              <div className="mr-4"></div>
              <ExternalLinkButton
                to={project.website}
                linkProps={{
                  target: "_blank"
                }}
              >
                Visit Website
              </ExternalLinkButton>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OtherProjects;
