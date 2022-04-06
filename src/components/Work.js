import React from 'react';
import Recipe from './imgs/recipetracker.png'
import Shoestring from './imgs/shoestring.png'
import Portfolio from './imgs/ratemyportfolio.png'

export default function Work() {
  return (
    <div id="work" class="bg-slate-700 w-screen m-auto md:m-auto h-fit md:h-fit sm:pt-20 md:pt-20 p-8 pt-14 md:w-screen">
      <div class="sm:pt-0 md:pt-0 sm:mt-0 md:pt-0 flex m-auto md:max-w-screen-2xl pb-10">
        <div class="flex w-screen md:w-screen">
          <div class="m-auto font-heebo text-center text-slate-300">
            <h2 class="text-xl sm:text-xl md:text-3xl font-bold pb-4"> Work </h2>
            <p class="m-auto sm:text-lg md:text-xl md:w-3/5"> As a <b>Front End Developer</b> based in San Diego, I love
              thinking out of the box and creating something new for users. </p>
          </div>
        </div>
      </div>
      <div
        class="place-items-center m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 sm:w-fit sm:gap-x-4 md:gap-x-11 md:gap-14 md:w-3/4 md:max-w-screen-xl">
        <div class="text-slate-300 sm:w-fit md:w-fit w-screen p-4 md:p-0">
          <a target="_blank" rel="noopener noreferrer" href="https://shoestring-finance.herokuapp.com/"><img
            class="border border-transparent border-2 hover:border-amber-400 rounded-lg hover:opacity-80 md:mb-4 duration-300"
            src={Shoestring} alt="Shoestring" title="Shoestring" /></a>
        </div>
        <div class="text-slate-300 pb-6">
          <p class="text-lg md:text-2xl font-bold"> Shoestring </p>
          <p class="pb-3 md:pb-2 italic"> "For a life less complicated." </p>
          <p class=""> A web application that allows you to keep track of monthly expenses all in one place.</p>
          <ul class="flex flex-start mt-4 text-sm">
            <li class="mr-4"> TailwindCSS </li>
            <li class="mr-4"> MySQL </li>
            <li class="mr-4"> Handlebars.js </li>
            <li> Node.js </li>
          </ul>
          <div class="flex mt-3 float-right">
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/DillanThomas88/project-2-interactive-full-stack-app"><svg
              class="h-7 w-7 hover:stroke-slate-300 hover:fill-slate-300 rounded-full duration-300"
              viewBox="0 0 128 128" fill="#fbbf24">
              <title> GitHub Repo </title>
              <desc> GitHub Repo </desc>
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z">
              </path>
              <path
                d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0">
              </path>
            </svg></a>
            <a target="_blank" rel="noopener noreferrer" href="https://shoestring-finance.herokuapp.com/"><svg xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7 ml-2 hover:stroke-slate-300 duration-300" fill="#334155" viewBox="0 0 24 24"
              stroke="#fbbf24">
              <title> Deployed Application </title>
              <desc> Deployed Application </desc>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg></a>
          </div>
        </div>


        <div class="text-slate-300 sm:w-fit md:w-fit w-screen p-4 md:p-0">
          <a target="_blank" rel="noopener noreferrer" href="https://floating-fjord-17758.herokuapp.com/"><img
            class="border border-transparent border-2 hover:border-amber-400 rounded-lg hover:opacity-80 md:mb-4 duration-300"
            src={Portfolio} alt="RateMyPortfolio" title="RateMyPortfolio" /></a>
        </div>
        <div class="text-slate-300 pb-6">
          <p class="text-lg md:text-2xl font-bold"> Rate My Portfolio </p>
          <p class="pb-3 md:pb-2 italic"> "What do you think of my Portfolio?" </p>
          <p class=""> Viewing peoples Portfolios and being able to provide feedback and rate users profiles. </p>
          <ul class="flex flex-start mt-4 text-sm">
            <li class="mr-4"> TailwindCSS </li>
            <li class="mr-4"> MongoDB </li>
            <li class="mr-4"> Express.js </li>
            <li> GraphQl </li>
          </ul>
          <div class="flex mt-3 float-right">
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/hekmatsalehi/rate-my-portfolio"><svg
              class="h-7 w-7 hover:stroke-slate-300 hover:fill-slate-300 rounded-full duration-300"
              viewBox="0 0 128 128" fill="#fbbf24">
              <title> GitHub Repo </title>
              <desc> GitHub Repo </desc>
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z">
              </path>
              <path
                d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0">
              </path>
            </svg></a>
            <a target="_blank" rel="noopener noreferrer" href="https://floating-fjord-17758.herokuapp.com/"><svg xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7 ml-2 hover:stroke-slate-300 duration-300" fill="#334155" viewBox="0 0 24 24"
              stroke="#fbbf24">
              <title> Deployed Application </title>
              <desc> Deployed Application </desc>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg></a>
          </div>
        </div>


        <div class="text-slate-300 sm:w-fit md:w-fit w-screen p-4 md:p-0">
          <a target="_blank" rel="noopener noreferrer" href="https://hayleymchugh.github.io/project-1/"><img
            class="border border-transparent border-2 hover:border-amber-400 rounded-lg hover:opacity-80 md:mb-4 duration-300"
            src={Recipe} alt="Recipe Tracker" title="Recipe Tracker" /></a>
        </div>
        <div class="text-slate-300 pb-6">
          <p class="text-lg md:text-2xl font-bold"> Recipe Tracker </p>
          <p class="pb-3 md:pb-2 italic"> "Find all the recipes you need!" </p>
          <p class=""> Being able to search up recipes and saving them to a database was never so much easier. </p>
          <ul class="flex flex-start mt-4 text-sm">
            <li class="mr-4"> TailwindCSS </li>
            <li class="mr-4"> APIs </li>
            <li class="mr-4"> JavaScript </li>
            <li> Node.js </li>
          </ul>
          <div class="flex mt-3 float-right">
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/HayleyMcHugh/project-1"><svg class="h-7 w-7 hover:fill-slate-300 duration-300"
              viewBox="0 0 128 128" fill="#fbbf24">
              <title> GitHub Repo </title>
              <desc> GitHub Repo </desc>
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z">
              </path>
              <path
                d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0">
              </path>
            </svg></a>
            <a target="_blank" rel="noopener noreferrer" href="https://hayleymchugh.github.io/project-1/"><svg xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7 ml-2 hover:stroke-slate-300 duration-300" fill="#334155" viewBox="0 0 24 24"
              stroke="#fbbf24">
              <title> Deployed Application </title>
              <desc> Deployed Application </desc>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg></a>
          </div>
        </div>
      </div>
      <div class="mt-14 m-auto w-4/5 md:w-3/5 md:max-w-screen-2xl font-heebo text-slate-300">
        <h2 class="text-center text-xl sm:text-xl md:text-2xl font-bold mb-8"> Other Work </h2>
        <div class="grid grid-cols-1 h-fit sm:grid-cols-1 md:grid-cols-3 gap-y-6 md:gap-x-2 md:max-w-screen-2xl">
          <div class="m-auto border border-2 h-80 p-4 border-slate-300 rounded-md transition transform hover:-translate-y-2 hover:border-amber-400 duration-300">
            <div class="p-4">
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/latommyla/E-Commerce"><svg viewBox="0 0 128 128" stroke="fbbf24" fill="#fbbf24" class="h-7 w-7 mt-1 md:mt-3 float-right">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></path><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path>
              </svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 md:h-14 md:w-14 mb-6" fill="none" viewBox="0 0 24 24" stroke="#fbbf24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <h2 class="text-md font-bold mb-4"> E-Commerce </h2>
                <p class="text-sm"> Building a e-commerce site by modifying a starter code, utilizing Express.JS API to use Sequelize to intereact with a MySQL database.</p></a>
            </div>
          </div>
          <div class="m-auto border border-2 h-80 p-4 border-slate-300 rounded-md transition transform hover:-translate-y-2 hover:border-amber-400 duration-300">
            <div class="p-4">
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/latommyla/Tech-Blog"><svg viewBox="0 0 128 128" fill="#fbbf24" class="h-7 w-7 mt-1 md:mt-3 float-right">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></path><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path>
              </svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 md:h-14 md:w-14 mb-6" fill="none" viewBox="0 0 24 24" stroke="#fbbf24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h2 class="text-md font-bold mb-4"> Tech-Blog </h2>
                <p class="text-sm"> A CMS-style blog site similiar to a Wordpress site. Using Handlebars.js as the templating language and Sequelize as the ORM. </p></a>
            </div>
          </div>
          <div class="m-auto border border-2 h-80 p-4 border-slate-300 rounded-md transition transform hover:-translate-y-2 hover:border-amber-400">
            <div class="p-4">
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/latommyla/Employee-Trackr"><svg viewBox="0 0 128 128" fill="#fbbf24" class="h-7 w-7 mt-1 md:mt-3 float-right">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></path><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path>
              </svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 md:h-14 md:w-14 mb-6" fill="none" viewBox="0 0 24 24" stroke="#fbbf24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <h2 class="text-md font-bold mb-4"> Employee Trackr </h2>
                <p class="text-sm"> Building a command-line application from scratch to manage a company's employee database, using Node.js, Inquirer, and MySQL.</p></a>
            </div>
          </div>
        </div>
      </div>
      <div class="pb-2 md:pb-8 md:p-12 flex m-auto md:max-w-screen-2xl">
        <div class="flex w-screen md:w-screen">
          <div class="m-auto text-center font-heebo text-white">
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/latommyla?tab=repositories"><button
              class="p-2 px-5 mt-12 border rounded-md text-lg border-amber-400 text-amber-400 hover:animate-pulse hover:border-slate-300 hover:text-slate-300 duration-300">
              More Work </button></a>
          </div>
        </div>
      </div>
    </div>
  );
}
