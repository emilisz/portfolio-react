import React from "react";
import HeroButtons from "./partials/HeroButtons";

const Hero = ({ main, setMain }) => {
  return (
    <div className="flex flex-col md:flex-row gap-2 px-2 lg:pl-3 lg:pr-6">
      <div className=" flex flex-row gap-2">
      <img className="rounded-full w-16 h-16" src="../img/profile.jfif" alt="" />
      <div className="text-sky-500 md:hidden h-8 px-3 mx-3 flex w-28 flex-row py-1 rounded-full border border-slate-500 text-sm select-none brightness-75 hover:bg-sky-900 hover:backdrop-opacity-50">
          <span className="font-bold">Everyone</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 ml-2 pt-1 ">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <div className="text-sky-500 hidden md:block px-3 mx-3 flex mt-3 w-28 flex-row py-1 rounded-full border border-slate-500 text-sm select-none brightness-75 hover:bg-sky-900 hover:backdrop-opacity-50">
          <span className="font-bold">Everyone</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 ml-2 pt-1 -mt-1 inline-block">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
        <div className="text-lg p-1">
          <textarea
            className="w-full bg-inherit h-60 md:h-32 lg:h-60 xl:h-48 overflow-hidden border-0 outline-none focus:outline-none cursor-auto"
            // rows="8"
            onChange={(e) => setMain(e.target.value)}
            value={main}
          />
          <p className="text-sky-500 text-sm select-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 mr-1 inline-block -mt-1">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
              />
            </svg>
            Everyone can reply
          </p>
        </div>

        <div className="border-t border-slate-500 p-3">
         <HeroButtons/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
