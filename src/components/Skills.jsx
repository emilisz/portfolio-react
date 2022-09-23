import React from "react";
import Portfolio from "./partials/Portfolio";
import Search from "./partials/Search";

const Skills = () => {
  return (
    <div>
      <Search />
      <div className="my-3 py-6 px-3 border-y border-slate-500 mt-6">
        <p className="py-3 text-left ml-3  border-gray-900 border-b-0 text-lg font-bold">Proficient with:</p>
        <div className="grid grid-cols-3 lg:ml-3 border border-gray-900 rounded-t-3xl divide-x divide-gray-900 bg-gray-800 bg-blend-darken">
          <div className="p-6 lg:p-3 w-full hover:bg-gray-700 rounded-tl-3xl" title="HTML">
            <img className="bg-cover bg-center w-full" src="../img/html.png" alt="" />
          </div>
          <div className="p-6 lg:p-3 w-full hover:bg-gray-700" title="Laravel">
            <img className="bg-cover bg-center w-full" src="../img/laravel.png" alt="" />
          </div>
          <div className="p-6 lg:p-3 w-full hover:bg-gray-700 rounded-tr-3xl" title="Tailwindcss">
            <img className="bg-cover bg-center w-full" src="../img/tailwind.png" alt="" />
          </div>
        </div>
        <div className="grid grid-cols-3 lg:ml-3 border border-gray-900 border-t-0 rounded-b-3xl divide-x divide-gray-900 bg-gray-800 bg-blend-darken">
          <div className="p-6 lg:p-3 w-full hover:bg-gray-700 rounded-bl-3xl" title="React">
            <img className="bg-cover bg-center w-full" src="../img/react.png" alt="" />
          </div>
          <div className="p-6 lg:p-3 w-full hover:bg-gray-700" title="Mysql">
            <img className="bg-cover bg-center w-full" src="../img/mysql.png" alt="" />
          </div>
          <div className="p-6 lg:p-3 w-full hover:bg-gray-700 rounded-br-3xl" title="Bootstrap">
            <img className="bg-cover bg-center w-full" src="../img/bootstrap.png" alt="" />
          </div>
        </div>
      </div>

      <Portfolio />
    </div>
  );
};

export default Skills;
