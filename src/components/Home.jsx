import React from 'react'

export const Home = () => {
  return (
    <section
    id="home"
    className="h-screen bg-slate-200 flex flex-col justify-center items-center text-center px-4"
  >
    <h2 className="text-4xl md:text-6xl font-bold mb-4">Welcome to My Portfolio</h2>
    <h1 className="text-2xl md:text-4xl mb-4">
      I'm Farseen, a Web Developer
    </h1>
    <p className="mb-6 max-w-xl">
      Crafting modern, responsive, and user-friendly websites using the latest technologies.
    </p>
    <a
      href="#projects"
      className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-blue-100 transition"
    >
      View My Work
    </a>
  </section>
  )
}
