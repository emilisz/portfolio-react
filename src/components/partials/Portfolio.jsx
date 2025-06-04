import React, { useState } from "react";

const Portfolio = ({ translations, language }) => {
  const [showMore, setShowMore] = useState(false);

  const projects = translations[language].projects;

  return (
    <div className="bg-gray-800 lg:ml-6 pb-5  rounded-3xl  text-left">
      <p className="py-3 text-left  px-3 border-gray-900 border-b-0 text-lg font-bold">{translations[language].portfolioTitle}</p>

      {projects.map((project, index) => {
        if (index > 7 && !showMore) {
          return null;
        }
        return (
          <div key={index} className="hover:bg-gray-700/30 bg-blend-darken">
            <a href={project.url} className="flex flex-row gap-2 p-3 pb-0 hover:text-sky-500" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-sky-500">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                />
              </svg>
              <p className="font-semibold decoration-sky-500 underline">{project.title}</p>
            </a>
            <p className="text-slate-300 ml-3">{project.description}</p>
            <p className="text-slate-500 pb-3 ml-3">{translations[language].stackLabel}: {project.stack}</p>
          </div>
        );
      })}

      {!showMore ? (
        <button className="text-sky-500 p-3" onClick={() => setShowMore(!showMore)}>
          {translations[language].showMore}
        </button>
      ) : null}
    </div>
  );
};

Portfolio.defaultProps = {
  translations: { en: {}, lt: {} },
  language: 'en',
};

export default Portfolio;
