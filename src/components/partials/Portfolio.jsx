import React, { useState } from "react";

const Portfolio = () => {
  const [showMore, setShowMore] = useState(false);

  const projects = [
    {
      title: "InvoicePing (ongoing)",
      url: "https://www.invoiceping.com/",
      description: "Invoicing App",
      stack: "Laravel, Filament, Mysql, TailwindCSS",
    },
    { title: "Statybos Tonas", url: "https://statybostonas.lt", description: "E-commerce shop for local business", stack: "Wordpress, Elementor, CSS" },
    { title: "Woodenworks", url: "https://woodenworks.lt", description: "E-commerce shop for wood products", stack: "Wordpress, Elementor, CSS" },
    { title: "Taksinumeris", url: "https://taksinumeris.lt", description: "Taxi companies listing site", stack: "Next.js, Tailwindcss" },
    {
      title: "Tour generator",
      url: "https://worthtovisit.vercel.app",
      description: "Generate city tour with AI",
      stack: "NextJs, DaisyUI, OpenAI",
    },
    {
      title: "Wisher",
      url: "https://wisher-emilisz.vercel.app",
      description: "Greetings postcards generator",
      stack: "NextJs, Tailwindcss, MongoDB",
    },
    {
      title: "Truth or dare generator",
      url: "https://play.google.com/store/apps/details?id=com.emiliszzz.truth_or_dare_app",
      description: "Android game",
      stack: "React native",
    },
    { title: "Nice taksi", url: "https://nice-taksi.lt", description: "Website for taxi services", stack: "Wordpress, Elementor, CSS" },
    {
      title: "Wedding invitations",
      url: "https://wedding-invitation-template.vercel.app?id=145222",
      description: "Individual invitations for every event guest by ids",
      stack: "React, Tailwindcss",
    },
    {
      title: "Solo pica",
      url: "https://solo-pica.vercel.app",
      description: "Website for ordering food. Connected with Stripe payment provider",
      stack: "React, Tailwindcss",
    },
    { title: "Weather forecast", url: "https://weather-react-eight.vercel.app", description: "Weather info", stack: "React" },
    {
      title: "World countries",
      url: "https://countries-api-ten-eta.vercel.app",
      description: "Countries ordering, listing, sorting (api)",
      stack: "React",
    },
    { title: "Crush coffee", url: "https://crush-coffee.vercel.app", description: "Web shop for coffee lovers", stack: "React" },
  ];

  return (
    <div className="bg-gray-800 lg:ml-6 pb-5  rounded-3xl  text-left">
      <p className="py-3 text-left  px-3 border-gray-900 border-b-0 text-lg font-bold">Portfolio:</p>

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
            <p className="text-slate-500 pb-3 ml-3">stack: {project.stack}</p>
          </div>
        );
      })}

      {!showMore ? (
        <button className="text-sky-500 p-3" onClick={() => setShowMore(!showMore)}>
          Show more
        </button>
      ) : null}
    </div>
  );
};

export default Portfolio;
