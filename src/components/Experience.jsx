import React from "react";
import ExperienceButtons from "./partials/ExperienceButtons";

const Experience = ({ translations, language }) => {
  const jobs = translations[language].jobs;
  return (
    <>
      {jobs.map((job, idx) => (
        <div key={idx} className="flex flex-col md:flex-row gap-2 py-3 border-t border-slate-500 px-2 lg:pl-3 lg:pr-6 hover:bg-gray-800 hover:bg-blend-darken group ">
          <div className="flex flex-row gap-2 lg:w-20">
            <img className="rounded-full w-16 h-16 grayscale group-hover:grayscale-0 " src={job.img} alt="" />
            <div className="md:hidden mt-2">
              <div className=" flex flex-row ">
                <h3 className="font-bold">{job.title} <span className="font-light">@ {job.company}</span></h3>
              </div>
              <p className=" text-gray-400">{job.period}</p>
            </div>
          </div>
          <div className="flex flex-col  w-full gap-2 mt-3 px-3 lg:mx-3 ">
            <div className="hidden md:block">
              <div className=" flex flex-row ">
                <h3 className="font-bold">{job.title} <span className="font-light">@ {job.company}</span></h3>
              </div>
              <p className=" text-gray-400">{job.period}</p>
            </div>
            <ul className="list-disc px-2 mx-3">
              {job.responsibilities.map((resp, i) => <li key={i}>{resp}</li>)}
            </ul>
            <ExperienceButtons />
          </div>
        </div>
      ))}
    </>
  );
};

export default Experience;
