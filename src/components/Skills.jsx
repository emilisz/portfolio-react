import React from "react";
import Portfolio from "./partials/Portfolio";
import Search from "./partials/Search";
import { FaBootstrap, FaHtml5, FaLaravel, FaReact } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandInertia } from "react-icons/tb";
import { DiMysql } from "react-icons/di";
import { PiFileCssLight } from "react-icons/pi";
import { FaPhp } from "react-icons/fa";

const Skills = () => {
  return (
    <div>
      <Search />
      <div className="my-3 py-6 px-3 border-y border-slate-500 mt-6">
        <p className="py-3 text-left ml-3  border-gray-900 border-b-0 text-lg font-bold">Proficient with:</p>
        
        <div className="grid grid-cols-3 lg:ml-3 border border-gray-900 rounded-t-3xl divide-x divide-gray-900 bg-gray-800 bg-blend-darken">
          <div className="p-6 lg:p-3 w-full hover:bg-gray-700 rounded-tl-3xl flex items-center align-center group" title="HTML">
            {/* <img className="bg-cover bg-center w-full" src="../img/html.png" alt="" /> */}
            <FaHtml5 className="w-12 h-12 mx-auto group-hover:text-sky-500" />
            
          </div>
          <div className="p-6 lg:p-3 w-full hover:bg-gray-700 flex items-center align-center group" title="Laravel">
            {/* <img className="bg-cover bg-center w-full" src="../img/laravel.png" alt="" /> */}
            <FaLaravel className="w-12 h-12 mx-auto group-hover:text-sky-500" />
          </div>
          <div className="p-6 lg:p-3 w-full hover:bg-gray-700 flex items-center align-center group rounded-tr-3xl" title="Tailwindcss">
            {/* <img className="bg-cover bg-center w-full" src="../img/tailwind.png" alt="" /> */}
            <RiTailwindCssFill className="w-12 h-12 mx-auto group-hover:text-sky-500" />
          </div>
        </div>

        <div className="grid grid-cols-3 lg:ml-3 border border-gray-900  divide-x divide-gray-900 bg-gray-800 bg-blend-darken">
          <div className="p-6 lg:p-3 w-full hover:bg-gray-700 flex items-center align-center group" title="Inertia">
            {/* <img className="bg-cover bg-center w-full" src="../img/html.png" alt="" /> */}
            <TbBrandInertia className="w-12 h-12 mx-auto group-hover:text-sky-500" />
            
          </div>
          <div className="p-6 lg:p-3 w-full hover:bg-gray-700 flex items-center align-center group" title="CSS">
            {/* <img className="bg-cover bg-center w-full" src="../img/laravel.png" alt="" /> */}
            <PiFileCssLight className="w-12 h-12 mx-auto group-hover:text-sky-500" />
          </div>
          <div className="p-6 lg:p-3 w-full hover:bg-gray-700 flex items-center align-center group" title="PHP">
            {/* <img className="bg-cover bg-center w-full" src="../img/tailwind.png" alt="" /> */}
            <FaPhp className="w-12 h-12 mx-auto group-hover:text-sky-500" />
          </div>
        </div>

        <div className="grid grid-cols-3 lg:ml-3 border border-gray-900 border-t-0 rounded-b-3xl divide-x divide-gray-900 bg-gray-800 bg-blend-darken">
          <div className="p-6 lg:p-3 w-full hover:bg-gray-700 rounded-bl-3xl flex items-center align-center group" title="React">
            {/* <img className="bg-cover bg-center w-full" src="../img/react.png" alt="" /> */}
            <FaReact className="w-12 h-12 mx-auto group-hover:text-sky-500" />
          </div>
          <div className="p-6 lg:p-3 w-full hover:bg-gray-700 group" title="Mysql">
            {/* <img className="bg-cover bg-center w-full" src="../img/mysql.png" alt="" /> */}
            <DiMysql className="w-12 h-12 mx-auto group-hover:text-sky-500" />
          </div>
          <div className="p-6 lg:p-3 w-full hover:bg-gray-700 rounded-br-3xl flex items-center align-center group" title="Bootstrap">
            {/* <img className="bg-cover bg-center w-full" src="../img/bootstrap.png" alt="" /> */}
            <FaBootstrap className="w-12 h-12 mx-auto group-hover:text-sky-500" />
          </div>
        </div>


      </div>

      <Portfolio />
    </div>
  );
};

export default Skills;
