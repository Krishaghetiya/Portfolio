import React from "react";

const Skills = () => {
  return (
    <section
      className="py-16 px-6 md:px-20 bg-gray-950 text-gray-100"
      id="skills"
    >
      <h2 className="text-3xl font-bold mb-12">
        Explore my <span className="text-blue-400">Skills</span>
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* FRONTEND Development */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 shadow-lg hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300 cursor-pointer flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-blue-500/20 text-blue-400 mb-4">
              <i className="fa-solid fa-code text-4xl"></i>
            </div>
           <h3 className="text-lg font-semibold mb-2">Frontend Development</h3>
<p className="text-sm text-gray-400">
  Building responsive and accessible user interfaces using HTML, CSS, and JavaScript.
</p>

          </div>
          <i className="fa-solid fa-arrow-right text-blue-400 mt-4"></i>
        </div>

        {/* UI(TAILWIND,BOOSTRAP) */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 shadow-lg hover:shadow-green-500/40 hover:scale-105 transition-all duration-300 cursor-pointer flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-green-500/20 text-green-400 mb-4">
              <i className="fa-brands fa-node-js text-4xl"></i>
            </div>
            <h3 className="text-lg font-semibold mb-2">UI Frameworks</h3>
<p className="text-sm text-gray-400">
  Designing modern, responsive layouts using Tailwind CSS and Bootstrap.
</p>

          </div>
          <i className="fa-solid fa-arrow-right text-green-400 mt-4"></i>
        </div>

        {/* REACT */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 shadow-lg hover:shadow-yellow-500/40 hover:scale-105 transition-all duration-300 cursor-pointer flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-yellow-500/20 text-yellow-400 mb-4">
              <i className="fa-brands fa-js text-4xl"></i>
            </div>
            <h3 className="text-lg font-semibold mb-2">React</h3>
<p className="text-sm text-gray-400">
  Creating reusable components and single-page applications with React.
</p>

          </div>
          <i className="fa-solid fa-arrow-right text-yellow-400 mt-4"></i>
        </div>

        {/* BACKEND */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 shadow-lg hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300 cursor-pointer flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-cyan-500/20 text-cyan-400 mb-4">
              <i className="fa-brands fa-react text-4xl"></i>
            </div>
            <h3 className="text-lg font-semibold mb-2">Backend Development</h3>
<p className="text-sm text-gray-400">
  Developing RESTful APIs and server-side logic using Node.js and Express.
</p>

          </div>
          <i className="fa-solid fa-arrow-right text-cyan-400 mt-4"></i>
        </div>

        {/* DSA */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 shadow-lg hover:shadow-orange-500/40 hover:scale-105 transition-all duration-300 cursor-pointer flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-orange-500/20 text-orange-400 mb-4">
              <i className="fa-brands fa-git-alt text-4xl"></i>
            </div>
            <h3 className="text-lg font-semibold mb-2">Databases</h3>
<p className="text-sm text-gray-400">
  Managing application data using MongoDB and relational databases with SQL.
</p>

          </div>
          <i className="fa-solid fa-arrow-right text-orange-400 mt-4"></i>
        </div>

        {/* C++ */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 shadow-lg hover:shadow-red-500/40 hover:scale-105 transition-all duration-300 cursor-pointer flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-red-500/20 text-red-400 mb-4">
              <i className="fa-solid fa-database text-4xl"></i>
            </div>
            <h3 className="text-lg font-semibold mb-2">Programming</h3>
<p className="text-sm text-gray-400">
  Implementing core programming concepts and logic using C++.
</p>

          </div>
          <i className="fa-solid fa-arrow-right text-red-400 mt-4"></i>
        </div>

        {/* DSA */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 shadow-lg hover:shadow-purple-500/40 hover:scale-105 transition-all duration-300 cursor-pointer flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-purple-500/20 text-purple-400 mb-4">
              <i className="fa-solid fa-paintbrush text-4xl"></i>
            </div>
            <h3 className="text-lg font-semibold mb-2">DSA</h3>
<p className="text-sm text-gray-400">
  Solving problems using Data Structures and Algorithms with efficient logic.
</p>

          </div>
          <i className="fa-solid fa-arrow-right text-purple-400 mt-4"></i>
        </div>

        {/* MERN */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 shadow-lg hover:shadow-pink-500/40 hover:scale-105 transition-all duration-300 cursor-pointer flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-pink-500/20 text-pink-400 mb-4">
              <i className="fa-solid fa-cloud text-4xl"></i>
            </div>
            <h3 className="text-lg font-semibold mb-2">MERN Stack</h3>
<p className="text-sm text-gray-400">
  Building full-stack web applications using MongoDB, Express, React, and Node.js.
</p>

          </div>
          <i className="fa-solid fa-arrow-right text-pink-400 mt-4"></i>
        </div>
      </div>
    </section>
  );
};

export default Skills;
