import React from 'react'
import Headshot from './imgs/profileheadshot.png'

export default function About() {
  return (
    <div id="about" class="bg-slate-700 bg-auto bg-fixed bg-center bg-no-repeat flex w-screen md:w-screen pb-52 sm:pb-0 md:pb-0 lg:pb-0">
      <div class="flex w-screen h-screen md:h-screen md:w-screen md:max-w-screen-2xl m-auto">
        <div class="m-auto w-3/4 md:w-3/4 font-heebo text-slate-300">
          <div class="grid grid-cols-1 md:grid-cols-2">
            <div class="text-justify order-last md:order-first">
              <h2 class="text-xl md:text-3xl text-center sm:text-left md:text-left font-bold pb-5"> About Me </h2>
              <p class="ml-6 mt-3"> Hello! My name is Tommy and I enjoy creating new and fun things. My interest in web
                development started a couple years ago with Myspace and Tumblr. Editing custom themes and adding random
                components to your profile taught me a lot about HTML & CSS! </p>
              <p class="ml-6 mt-3"> Fast-forward to today, I finished and graduated the UCSD Coding Bootcamp. Wanted to take what originally started off as a interest, and turn it into a passion and a career. Tinkering with things and seeing the outcome, just puts the biggest smile on my face. </p>
              <p class="ml-6 mt-3"> I am currently working at Creative Arcades as a Front End Developer, managing e-commerce websites and developing new applications for the Shopify platform. Also developing new applications utilizing React and Vue with mobile first design and multiple framworks.</p>
              <p class="ml-6 mt-3"> Here are the few techonolgies that I've been working with recently: </p>
              <div class="ml-4 flex grid-col-2 md:grid-col-2">
                <div class="flex">
                  <ul class="text-sm p-2 sm:ml-5 md:ml-5 list-disc list-inside">
                    <li class="text-amber-400"><span class="text-slate-300"> HTML </span></li>
                    <li class="text-amber-400"><span class="text-slate-300"> CSS </span></li>
                    <li class="text-amber-400"><span class="text-slate-300"> Tailwind CSS </span></li>
                    <li class="text-amber-400"><span class="text-slate-300"> Bootstrap </span></li>
                    <li class="text-amber-400"><span class="text-slate-300"> MongoDB </span></li>
                    <li class="text-amber-400"><span class="text-slate-300"> React.js </span></li>
                  </ul>
                </div>
                <div class="sm:ml-4 md:ml-4 flex">
                  <ul class="text-sm p-2 ml-5 list-disc list-inside">
                    <li class="text-amber-400"><span class="text-slate-300"> JavaScript </span></li>
                    <li class="text-amber-400"><span class="text-slate-300"> Node.js </span></li>
                    <li class="text-amber-400"><span class="text-slate-300"> Handlebars.js </span></li>
                    <li class="text-amber-400"><span class="text-slate-300"> Express.js </span></li>
                    <li class="text-amber-400"><span class="text-slate-300"> APIs </span></li>
                    <li class="text-amber-400"><span class="text-slate-300"> GraphQl </span></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="m-auto p-12 mb:p-0">
              <img
                class="opacity-90 hover:rotate-12 transition duration-500 border border-2 hover:p-1 hover:border-4 hover:border-amber-400 border-slate-300 rounded-md w-48 h-48 md:w-64 md:h-64" src={Headshot} alt="Profile Headshot" title="Profile Headshot" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
