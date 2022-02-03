import React from 'react';
import { Link } from 'react-scroll'
import Pdf from './imgs/tommylaresume.pdf'

export default function Navbar() {
  return (
    <div class="shadow-md sm:fixed md:fixed z-10 w-full md:w-screen bg-slate-700 select-none">
      <div class="flex flex-col max-w-screen-lg md:max-w-screen-2xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        <div class="p-3 flex flex-row items-center justify-between">
          <Link to="home" class="text-md font-semibold tracking-widest text-white m-auto uppercase rounded-lg hover:text-amber-400"> Tommy La </Link>
        </div>
        <nav class="text-slate-300 flex-col flex-grow m-auto md:pb-0 md:flex md:justify-end md:flex-row">
          <Link class="px-4 py-2 mt-2 text-xs font-semibold rounded-lg md:mt-0 hover:text-amber-400" to="about"> About
          </Link>
          <Link class="px-4 py-2 mt-2 text-xs font-semibold rounded-lg md:mt-0 md:ml-4 hover:text-amber-400" to="work">
            Work </Link>
          <Link class="px-4 py-2 mt-2 text-xs font-semibold rounded-lg md:mt-0 md:ml-4 hover:text-amber-400" to="contact">
            Contact </Link>
          <a target="_blank" rel="noopener noreferrer" class="px-4 py-2 mt-2 text-xs font-semibold rounded-lg md:mt-0 md:ml-4 hover:text-amber-400 uppercase"
            href={Pdf}> Resume </a>
        </nav>
      </div>
    </div>
  );
}

