import React,{useState} from "react";
import HeroButtons from "./partials/HeroButtons";

const Hero = ({ main, setMain, language, translations }) => {
  const [showToast, setShowToast] = useState(false);

  const mainText = translations[language].mainText;
  const everyone = translations[language].everyone;
  const everyoneCanReply = translations[language].everyoneCanReply;

  return (
    <div className="flex flex-col md:flex-row gap-2 px-2 lg:pl-3 lg:pr-6">
      <div className=" flex flex-row gap-2 lg:w-20">
      <img className="rounded-full w-16 h-16" src="../img/profile2.jpg" alt="" />
      <div className="text-sky-500 md:hidden h-8 px-3 mx-3 flex w-28 flex-row py-1 rounded-full border border-slate-500 text-sm select-none brightness-75 hover:bg-sky-900 hover:backdrop-opacity-50">
          <span className="font-bold">{everyone}</span>
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
          <span className="font-bold">{everyone}</span>
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
          <p contentEditable={true} suppressContentEditableWarning={true}>{mainText}</p>
          <p className="text-sky-500 pt-2 text-sm select-none">
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
            {everyoneCanReply}
          </p>
        </div>

        <div className="border-t border-slate-500 p-3">
         <HeroButtons setShowToast={setShowToast} showToast={showToast} />
        </div>
      </div>

      <div id="toast-notification" className={`${showToast ? "" : "hidden"}   p-4 absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/3 w-full max-w-xs text-gray-900 bg-white rounded-lg shadow dark:bg-gray-800 dark:text-gray-300`} role="alert">
    <div className="flex items-center mb-3">
        <span className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">New notification</span>
        <button type="button" onClick={()=>setShowToast(false)} className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-notification" aria-label="Close">
            <span className="sr-only">Close</span>
            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </button>
    </div>
    <div className="flex items-center">
        <div className="inline-block relative shrink-0">
            <img className="w-12 h-12 rounded-full" src="../img/profile2.jpg" alt="Emilis"/>
            <span className="inline-flex absolute right-0 bottom-0 justify-center items-center w-6 h-6 bg-blue-600 rounded-full">
                <svg aria-hidden="true" className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                <span className="sr-only">Message icon</span>
            </span>
        </div>
        <div className="ml-3 text-sm font-normal">
            <div className="text-sm font-semibold text-gray-900 dark:text-white">Emilis Čiurlionis</div>
            <div className="text-sm font-normal">Thanks for encouragement! It means a lot for me :)</div> 
            <span className="text-xs font-medium text-blue-600 dark:text-blue-500">a few seconds ago</span>   
        </div>
    </div>
</div>


    </div>
  );
};

export default Hero;
