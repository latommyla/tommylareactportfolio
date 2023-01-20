import React from 'react';

export default function Contact() {
  return (
    <div id="contact" class="bg-slate-700 bg-auto bg-fixed bg-center bg-no-repeat flex md:w-screen">
      <div class="flex w-screen h-screen m-auto w-3/4 md:h-full md:w-screen md:max-w-screen-2xl">
        <div class="m-auto md:w-2/5 font-heebo text-center text-slate-300">
          <h2 class="text-2xl md:text-5xl font-bold pb-4"> Get In Touch </h2>
          <p class="mt-3"> Want to work together or have any questions? Feel free to send me an email, and I'll try my
            best getting back to you! </p>
          <a href="mailto:tommyl.dmd@gmail.com"><button
            class="p-2 px-6 mt-12 border rounded-md text-lg border-amber-400 text-amber-400 hover:animate-pulse hover:border-slate-300 hover:text-slate-300 duration-300">
            Say Hello </button></a>
        </div>
      </div>
    </div>
  );
}
