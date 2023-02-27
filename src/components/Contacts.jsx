import React from "react";

const Contacts = () => {
  return (
    <div className="ml-2 fixed">
      <svg viewBox="0 0 24 24" aria-hidden="true" className="w-8">
        <g>
          <path
            fill="white"
            d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
        </g>
      </svg>
      <div className="flex gap-3 py-3 my-3 px-2 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
          />
        </svg>
        <h2 className="text-lg font-semibold">Emilis Čiurlionis</h2>
      </div>

      <div className="flex gap-3 py-3 my-3 px-2 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>

        <div className="flex flex-col text-left -mt-2">
          <h2 className="font-semibold">Location:</h2>
          <p className="-mt-1 text-gray-400">Kazlų Rūda</p>
        </div>
      </div>

      <div className="flex gap-3 py-3 my-3 px-2 rounded-full hover:bg-gray-800">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
          />
        </svg>

        <div className="flex flex-col text-left -mt-2">
          <h2 className="font-semibold">Phone:</h2>
          <a className="-mt-1 text-gray-400" href="tel:+37062606999">
            +370 626 06999
          </a>
        </div>
      </div>

      <div className="flex gap-3 py-3 my-3 px-2 rounded-full hover:bg-gray-800">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>

        <div className="flex flex-col text-left -mt-2">
          <h2 className="font-semibold">Email:</h2>
          <a className="-mt-1 text-gray-400" href="mailto:emilis.ciurlionis@gmail.com" target="_blank" rel="noopener noreferrer">
            emilis.ciurlionis@gmail.com
          </a>
        </div>
      </div>

      <div className="flex gap-3 py-3 my-3 px-2 rounded-full hover:bg-gray-800">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
          />
        </svg>

        <div className="flex flex-col text-left -mt-2 ">
          <h2 className="font-semibold">LinkedIn:</h2>
          <a className="-mt-1 text-gray-400" href="https://linkedin.com/in/emilis-čiurlionis" target="_blank" rel="noopener noreferrer">
            /emilis-čiurlionis
          </a>
        </div>
      </div>

      <div className="flex gap-3 py-3 my-3 px-2 rounded-full hover:bg-gray-800">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>

        <div className="flex flex-col text-left -mt-2 ">
          <h2 className="font-semibold">Github:</h2>
          <a className="-mt-1 text-gray-400" href="https://github.com/emilisz" target="_blank" rel="noopener noreferrer">
            /emilisz
          </a>
        </div>
      </div>

      <div className="flex gap-3 py-3 my-3 px-2 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
          />
        </svg>

        <div className="flex flex-col text-left -mt-2 ">
          <h2 className="font-semibold">Education:</h2>
          <div className="flex flex-col text-gray-400 my-2">
            <p className="font-semibold">Baltic Talents</p>
            <p>PHP language</p>
            <p className="text-sm">2020m.</p>
          </div>
          <div className="flex flex-col text-gray-400 my-2">
            <p className="font-semibold">Mykolo Romerio universitetas</p>
            <p>Teisės studijos</p>
            <p className="text-sm">2012-2016m.</p>
          </div>
        </div>
      </div>
      
      <a href="mailto:emilis.ciurlionis@gmail.com" target="_blank" rel="noopener noreferrer" className="bg-sky-500 hover:bg-sky-600 font-bold text-lg py-2 px-16 rounded-full mt-6  shadow-lg">Hire me</a>
      
    </div>
  );
};

export default Contacts;
