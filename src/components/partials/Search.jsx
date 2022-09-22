import React from 'react'

const Search = () => {
  return (
    <label className="relative hidden lg:block  m-3 ">
      <span className="sr-only">Search</span>
      <span className="absolute inset-y-0 left-3 flex items-center pl-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-7 w-7 text-slate-500">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
      </span>
      <input
        className="text-lg rounded-full bg-gray-800 bg-blend-darken placeholder:text-slate-500 block  w-full  py-2 pl-16 pr-3 focus:outline-none"
        placeholder="Search Twitter"
        type="text"
        name="search"
      />
    </label>
  )
}

export default Search