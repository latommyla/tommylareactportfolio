import React from 'react';
import { Link } from 'react-scroll';

export default function Home() {
  return (
    <div id="home"
      class="bg-slate-700 bg-auto bg-fixed bg-center bg-no-repeat flex w-screen md:w-screen m-auto md:m-auto h-screen md:h-screen">
      <div class="flex w-screen md:w-screen h-screen md:max-w-screen-2xl m-auto">
        <div class="m-auto text-center text-amber-400 pt-10 select-none">
          <h1 class="text-5xl md:text-6xl mb-2 font-monster transition transform hover:-translate-y-4"> I'm Tommy, </h1>
          <p class="text-2xl md:text-6xl font-monster"> a Front End Developer </p>
          <Link to="about"><svg xmlns="http://www.w3.org/2000/svg"
            class="h-12 w-12 animate-bounce m-auto mt-40 hover:fill-slate-300 duration-300" viewBox="0 0 20 20"
            fill="currentColor">
            <path fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
              clip-rule="evenodd" />
          </svg></Link>
        </div>
      </div>
    </div>
  );
}
