import React, { useState } from "react";
import "./App.css";
import Drawer from "react-modern-drawer";

//import styles 👇
import "react-modern-drawer/dist/index.css";
import Contacts from "./components/Contacts";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Gallery from "./components/partials/Gallery";
import translations from "./translations";

function App() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const [language, setLanguage] = useState("lt");
  const [main, setMain] = useState(
    translations["en"].mainText
  );

  return (
    <div className="App max-w-7xl mx-auto lg:px-3">
      <div className="absolute right-3 top-5 flex items-center justify-between pr-3 z-50">
        
      <div className="flex gap-1 mr-2">
          <button
            className={`px-2 py-1 rounded text-xs font-bold border border-slate-500 transition ${language === "lt" ? "bg-sky-700 text-white" : "bg-slate-700 text-gray-300 hover:bg-sky-700"}`}
            onClick={() => setLanguage("lt")}
          >
            LT
          </button>
          <button
            className={`px-2 py-1 rounded text-xs font-bold border border-slate-500 transition ${language === "en" ? "bg-sky-700 text-white" : "bg-slate-700 text-gray-300 hover:bg-sky-700"}`}
            onClick={() => setLanguage("en")}
          >
            EN
          </button>
        </div>
        <button className="lg:hidden ml-2" onClick={toggleDrawer}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>

      <div className="grid lg:grid-cols-4 py-12">
        <div className="main-one hidden lg:block relative">
          <Contacts translations={translations} language={language} />
        </div>

        <div className="lg:col-span-2 lg:border-x lg:border-slate-500 ">
          <div className="flex flex-col text-left">
            <div className="flex justify-between px-2 lg:pl-3 lg:pr-6 my-3">
              <p className="text-lg font-bold">{translations[language].inCharacters.replace('{count}', main.length)}</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                />
              </svg>
            </div>
            <Hero main={translations[language].mainText} setMain={setMain} language={language} translations={translations} />
            <p className="py-3 border-y border-slate-500 text-lg font-bold px-2 lg:pl-3 lg:pr-6">{translations[language].relevantExperience}</p>
            <Experience translations={translations} language={language} />
            <p id="more" className="py-3 border-y border-slate-500 text-lg font-bold px-2 lg:pl-3 lg:pr-6">{translations[language].projectsGallery}</p>
            <Gallery translations={translations} language={language} />
          </div>
        </div>
        <div className="">
          <Skills translations={translations} language={language} />
        </div>
      </div>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        className="lg:hidden overflow-scroll"
        overlayColor="#000"
        overlayOpacity="0.4"
        size="80vw"
        zIndex="100"
        style={{ backgroundColor: "#15202b", paddingTop: "15px", paddingLeft: "5px", paddingBottom: "15px", }}>
        <Contacts translations={translations} language={language} />
      </Drawer>
    </div>
  );
}

export default App;
