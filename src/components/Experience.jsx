import React from "react";
import ExperienceButtons from "./partials/ExperienceButtons";

const Experience = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-2 py-3 border-t border-slate-500 px-2 lg:pl-3 lg:pr-6 hover:bg-gray-800 hover:bg-blend-darken group ">
        <div className="flex flex-row gap-2 lg:w-20">
          <img
            className="rounded-full w-16 h-16 grayscale group-hover:grayscale-0 "
            src="../img/freelancer.png"
            alt=""
          />
          <div className="md:hidden mt-2">
            <div className=" flex flex-row ">
              <h3 className="font-bold">
                Web developer <span className="font-light">@ MB Pastebimas</span>
              </h3>
            </div>
            <p className=" text-gray-400">2024 -</p>
          </div>
        </div>
        <div className="flex flex-col  w-full gap-2 mt-3 px-3 lg:mx-3 ">
          <div className="hidden md:block">
            <div className=" flex flex-row ">
              <h3 className="font-bold">
                PHP developer <span className="font-light">@ MB Pastebimas</span>
              </h3>
            </div>
            <p className=" text-gray-400">2024 -</p>
          </div>
          <ul className="list-disc px-2 mx-3">
            <li>Laravel, Docker, Vue.js</li>
            <li>Developing websites, Order management system</li>
          </ul>

          <ExperienceButtons />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-2 py-3 border-t border-slate-500 px-2 lg:pl-3 lg:pr-6 hover:bg-gray-800 hover:bg-blend-darken group ">
        <div className="flex flex-row gap-2 lg:w-20">
          <img
            className="rounded-full w-16 h-16 grayscale group-hover:grayscale-0 "
            src="../img/freelancer.png"
            alt=""
          />
          <div className="md:hidden mt-2">
            <div className=" flex flex-row ">
              <h3 className="font-bold">
                Web developer <span className="font-light">@ freelancer</span>
              </h3>
            </div>
            <p className=" text-gray-400">2020 -</p>
          </div>
        </div>
        <div className="flex flex-col  w-full gap-2 mt-3 px-3 lg:mx-3 ">
          <div className="hidden md:block">
            <div className=" flex flex-row ">
              <h3 className="font-bold">
                Web developer <span className="font-light">@ freelancer</span>
              </h3>
            </div>
            <p className=" text-gray-400">2020 -</p>
          </div>
          <ul className="list-disc px-2 mx-3">
            <li>
              Helped clients by developing websites, optimizing ads and
              implementing SEO best practises to improve and optimize results to
              their local businesses (
              <a
                className="text-sky-500 underline"
                href="http://nice-taksi.lt"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                nice-taksi.lt
              </a>
              {", "}
              <a
                className="text-sky-500 underline"
                href="http://eglute.lt"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                eglute.lt
              </a>
              )
            </li>
            <li>Helped clients make IT projects for their studies </li>
            <li>Developed websites by provided figma or photoshop designs</li>
          </ul>

          <ExperienceButtons />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-2 py-3 border-t border-slate-500 px-2 lg:pl-3 lg:pr-6 hover:bg-gray-800 hover:bg-blend-darken group ">
        <div className="flex flex-row gap-2 lg:w-20">
          <img
            className="rounded-full w-16 h-16 grayscale group-hover:grayscale-0 "
            src="../img/freelancer.png"
            alt=""
          />
          <div className="md:hidden mt-2">
            <div className=" flex flex-row ">
              <h3 className="font-bold">
                Sales manager{" "}
                <span className="font-light">@ Statybos tonas</span>
              </h3>
            </div>
            <p className=" text-gray-400">2023 - 2023</p>
          </div>
        </div>
        <div className="flex flex-col  w-full gap-2 mt-3 px-3 lg:mx-3 ">
          <div className="hidden md:block">
            <div className=" flex flex-row ">
              <h3 className="font-bold">
                Sales manager{" "}
                <span className="font-light">@ Statybos tonas</span>
              </h3>
            </div>
            <p className=" text-gray-400">2023 - 2023</p>
          </div>
          <ul className="list-disc px-2 mx-3">
            <li>
              Helping to manage business (
              <a
                className="text-sky-500 underline"
                href="http://statybostonas.lt"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                statybostonas.lt
              </a>
              )
            </li>
            <li>Marketing, SEO services, Sales calls </li>
            <li>Social networks optimization</li>
            <li>Creation of digital assets (Photoshop, Illustrator, Canva)</li>
          </ul>

          <ExperienceButtons />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-2 py-3 border-t border-slate-500 px-2 lg:pl-3 lg:pr-6 hover:bg-gray-800 hover:bg-blend-darken group ">
        <div className="flex flex-row gap-2 lg:w-20">
          <img
            className="rounded-full w-16 h-16 grayscale group-hover:grayscale-0 "
            src="../img/commerce.png"
            alt=""
          />
          <div className="md:hidden mt-2">
            <div className=" flex flex-row ">
              <h3 className="font-bold">
                E-commerce business{" "}
                <span className="font-light">@ selfemployed</span>
              </h3>
            </div>
            <p className=" text-gray-400">2020 - 2021</p>
          </div>
        </div>
        <div className="flex flex-col  w-full gap-2 mt-3 px-3 lg:mx-3 ">
          <div className="hidden md:block">
            <div className=" flex flex-row ">
              <h3 className="font-bold">
                E-commerce business{" "}
                <span className="font-light">@ selfemployed</span>
              </h3>
            </div>
            <p className=" text-gray-400">2020 - 2021</p>
          </div>
          <ul className="list-disc px-2 mx-3">
            <li>Managed e-commerce website.</li>
            <li>Planning marketing strategies</li>
            <li>Content and descriptions writing</li>
            <li>SEO optimization</li>
            <li>Dealing with clients</li>
          </ul>

          <ExperienceButtons />
        </div>
      </div>

      {/* <div className="flex flex-col md:flex-row gap-2 py-3 border-t border-slate-500 px-2 lg:pl-3 lg:pr-6 hover:bg-gray-800 hover:bg-blend-darken group ">
        <div className="flex flex-row gap-2 lg:w-20">
          <img className="rounded-full w-16 h-16 grayscale group-hover:grayscale-0 " src="../img/muitine.png" alt="" />
          <div className="md:hidden mt-2">
            <div className=" flex flex-row ">
              <h3 className="font-bold">
                Customs officer <span className="font-light">@ LR muitinė</span>
              </h3>
            </div>
            <p className=" text-gray-400">2016 - 2020</p>
          </div>
        </div>
        <div className="flex flex-col  w-full gap-2 mt-3 px-3 lg:mx-3 ">
          <div className="hidden md:block">
            <div className=" flex flex-row ">
              <h3 className="font-bold">
                Customs officer <span className="font-light">@ LR muitinė</span>
              </h3>
            </div>
            <p className=" text-gray-400">2016 - 2020</p>
          </div>
          <ul className="list-disc px-2 mx-3">
            <li>Working with custom's IT systems and transport documents</li>
            <li>Stress management</li>
            <li>Time and resource planning</li>
          </ul>

          <ExperienceButtons />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-2 py-3 border-t border-slate-500 px-2 lg:pl-3 lg:pr-6 hover:bg-gray-800 hover:bg-blend-darken group ">
        <div className="flex flex-row gap-2 lg:w-20">
          <img className="rounded-full w-16 h-16 grayscale group-hover:grayscale-0  border" src="../img/bauer.png" alt="" />
          <div className="md:hidden mt-2">
            <div className=" flex flex-row ">
              <h3 className="font-bold">
                Sales manager <span className="font-light">@ Bauer</span>
              </h3>
            </div>
            <p className=" text-gray-400">2018 - 2019</p>
          </div>
        </div>
        <div className="flex flex-col  w-full gap-2 mt-3 px-3 lg:mx-3 ">
          <div className="hidden md:block">
            <div className=" flex flex-row ">
              <h3 className="font-bold">
                Sales manager <span className="font-light">@ Bauer</span>
              </h3>
            </div>
            <p className=" text-gray-400">2018 - 2019</p>
          </div>
          <ul className="list-disc px-2 mx-3">
            <li>Active sales manager</li>
            <li>Events planning and presentations</li>
            <li>Communicating with clients</li>
          </ul>

          <ExperienceButtons />
        </div>
      </div> */}
    </>
  );
};

export default Experience;
