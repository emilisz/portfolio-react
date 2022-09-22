import React from "react";
import Search from "./partials/Search";

const Skills = () => {
  return (
    <div>
      <Search />
      <div className="my-3 py-6 px-3 border-y border-slate-500 mt-6">
        <p className="py-3 text-left ml-3  border-gray-900 border-b-0 text-lg font-bold">Proficient with:</p>
        <div className="grid grid-cols-3 lg:ml-3 border border-gray-900 rounded-t-3xl divide-x divide-gray-900 bg-gray-800 bg-blend-darken">
          <div className="p-6 lg:p-3 w-full">
            <img className="bg-cover bg-center w-full" src="../img/html.png" alt="" />
          </div>
          <div className="p-6 lg:p-3 w-full">
            <img className="bg-cover bg-center w-full" src="../img/laravel.png" alt="" />
          </div>
          <div className="p-6 lg:p-3 w-full">
            <img className="bg-cover bg-center w-full" src="../img/tailwind.png" alt="" />
          </div>
        </div>
        <div className="grid grid-cols-3 lg:ml-3 border border-gray-900 border-t-0 rounded-b-3xl divide-x divide-gray-900 bg-gray-800 bg-blend-darken">
          <div className="p-6 lg:p-3 w-full">
            <img className="bg-cover bg-center w-full" src="../img/react.png" alt="" />
          </div>
          <div className="p-6 lg:p-3 w-full">
            <img className="bg-cover bg-center w-full" src="../img/mysql.png" alt="" />
          </div>
          <div className="p-6 lg:p-3 w-full">
            <img className="bg-cover bg-center w-full" src="../img/bootstrap.png" alt="" />
          </div>
        </div>
      </div>

      <div className="bg-gray-800 lg:ml-6 bg-blend-darken rounded-3xl px-3">
        <p className="py-3 text-left   border-gray-900 border-b-0 text-lg font-bold">Portfolio:</p>

        <div>
          <a href="https://qrcode4free.com" className="flex flex-row gap-2 p-3 hover:text-sky-500" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
              />
            </svg>
            <p className="font-semibold">qrcode4free.com</p>
          </a>
          <p className="text-slate-500 pb-3">stack: Laravel, Livewire, Tailwindcss</p>
        </div>

        <div>
          <a href="https://nice-taksi" className="flex flex-row gap-2 p-3 hover:text-sky-500" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
              />
            </svg>
            <p className="font-semibold">nice-taksi</p>
          </a>
          <p className="text-slate-500 pb-3">stack: Wordpress, Elementor, CSS</p>
        </div>

      </div>
    </div>
  );
};

export default Skills;
