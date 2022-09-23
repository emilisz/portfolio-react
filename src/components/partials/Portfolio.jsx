import React from "react";

const Portfolio = () => {
  return (
    <div className="bg-gray-800 lg:ml-6 bg-blend-darken rounded-3xl px-3 text-left">
      <p className="py-3 text-left   border-gray-900 border-b-0 text-lg font-bold">Portfolio:</p>

      <div>
        <a href="https://qrcode4free.com" className="flex flex-row gap-2 p-3 pb-0 hover:text-sky-500" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
            />
          </svg>
          <p className="font-semibold">qrcode4free.com</p>
        </a>
        <p className="text-slate-300 ml-3">QR code generation, and purchases (not finished yet)</p>
        <p className="text-slate-500 pb-3 ml-3">stack: Laravel, Livewire, Tailwindcss</p>
      </div>

      <div>
        <a href="https://nice-taksi" className="flex flex-row gap-2 p-3 pb-0 hover:text-sky-500" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
            />
          </svg>
          <p className="font-semibold">nice-taksi</p>
        </a>
        <p className="text-slate-300 ml-3">Landing page for taxi services</p>
        <p className="text-slate-500 pb-3 ml-3">stack: Wordpress, Elementor, CSS</p>
      </div>

      <div>
        <a href="https://wedding-invitation-template.vercel.app?id=145222" className="flex flex-row gap-2 p-3 pb-0 hover:text-sky-500" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
            />
          </svg>
          <p className="font-semibold">Wedding invitations</p>
        </a>
        <p className="text-slate-300 ml-3">Digital individual invitations for event guests</p>
        <p className="text-slate-500 pb-3 ml-3">stack: React, Tailwindcss</p>
      </div>
    </div>
  );
};

export default Portfolio;
