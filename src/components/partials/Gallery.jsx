import { Carousel } from "flowbite-react";
import React from "react";
import ExperienceButtons from "./ExperienceButtons";

const Gallery = () => {

  return (
    <>
      <div className="flex flex-col md:flex-row gap-2 py-3 border-t border-slate-500 px-2 lg:pl-3 lg:pr-6 hover:bg-gray-800 hover:bg-blend-darken group">
        <div className="flex flex-row gap-2 lg:w-20">
          <img className="rounded-full w-16 h-16 grayscale group-hover:grayscale-0" src="../img/freelancer.png" alt="" />
          <div className="md:hidden mt-2">
            <div className=" flex flex-row ">
              <h3 className="font-bold">Coded web design</h3>
            </div>
            <p className=" text-gray-400"></p>
          </div>
        </div>
        <div className="flex flex-col  w-full gap-2 mt-3 px-3 lg:mx-3 ">
          <div className="hidden md:block">
            <div className=" flex flex-row ">
              <h3 className="font-bold">Coded web design</h3>
            </div>
            <p className=" text-gray-400"></p>
          </div>

          <div className="h-56 sm:h-96 xl:h-96 2xl:h-96">
            <Carousel slideInterval={5000} pauseOnHover>
              <img src="../img/other1.webp" alt="..." />
              <img src="../img/other2.webp" alt="..." />
              <img src="../img/other3.webp" alt="..." />
              <img src="../img/other4.webp" alt="..." />
            </Carousel>
          </div>
          <ExperienceButtons />
        </div>
      </div>
    </>
  );
};

export default Gallery;
