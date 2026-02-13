import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMongodb,
  SiRedux,
  SiJavascript,
  SiFirebase,
  SiNextdotjs,
  SiExpress,
} from "react-icons/si";



const getIcon = (name) => {
  switch (name) {
    case "React":
    case "React Native":
    case "Hooks":
    case "Context API":
      return <FaReact className="text-cyan-400" />;

    case "Node.js":
      return <FaNodeJs className="text-green-500" />;

    case "HTML5":
      return <FaHtml5 className="text-orange-500" />;

    case "CSS3":
      return <FaCss3Alt className="text-blue-500" />;

    case "Bootstrap":
      return <FaBootstrap className="text-purple-500" />;

    case "Tailwind CSS":
      return <SiTailwindcss className="text-sky-400" />;

    case "MongoDB":
      return <SiMongodb className="text-green-600" />;

    case "Redux":
      return <SiRedux className="text-purple-400" />;

    case "JavaScript":
      return <SiJavascript className="text-yellow-400" />;

    case "Firebase":
      return <SiFirebase className="text-orange-400" />;

    case "Next.js":
      return <SiNextdotjs className="text-white" />;

    case "Express.js":
      return <SiExpress className="text-gray-300" />;

    default:
      return null;
  }
};



const projects = [
  {
    id: 1,
    title: "E-Cart",
    subtitle: "Online Store with Cart & Authentication",
    tech: ["React", "Tailwind CSS", "Node.js"],
    img: "/Product-1.png",
    link: "https://e-cart-drab-ten.vercel.app/",
  },
  {
    id: 2,
    title: "Travello",
    subtitle: "Travel Social Network",
    tech: ["HTML5", "CSS3", "Bootstrap"],
    img: "https://colorlib.com/wp/wp-content/uploads/sites/2/travelo-free-template.jpg.avif",
    link: "https://travelo-k.netlify.app/",
  },
  {
    id: 3,
    title: "Starbucks",
    subtitle: "Coffeehouse UI Clone",
    tech: ["HTML5", "CSS3"],
    img: "https://i.pinimg.com/1200x/0f/40/75/0f4075669957c11bce48d6341a0f9977.jpg",
    link: "https://k-starbuck.netlify.app/",
  },
  {
    id: 4,
    title: "Action",
    subtitle: "Business Website Template",
    tech: ["HTML5", "CSS3"],
    img: "https://colorlib.com/wp/wp-content/uploads/sites/2/action-free-template.jpg.avif",
    link: "https://action-k.netlify.app/",
  },
  {
    id: 5,
    title: "Pillowmart",
    subtitle: "eCommerce Frontend Template",
    tech: ["HTML5", "CSS3"],
    img: "https://colorlib.com/wp/wp-content/uploads/sites/2/pillowmart-free-template.jpg",
    link: "https://pillowmart.netlify.app/",
  },
  {
    id: 6,
    title: "Tripadvisor",
    subtitle: "TripAdvisor clone using Frontend",
    tech: ["HTML5", "CSS3", "Bootstrap"],
    img: "https://skift.com/wp-content/uploads/2018/11/Tripadvisor-homepage.png",
    link: "https://tripadvisor-sand.vercel.app/",
  },
  {
    id: 7,
    title: "Recipe App",
    subtitle: "API Integrated React App",
    tech: ["React", "Axios", "REST API"],
    img: "/capture.png",   // ← add your image name here
    link: "https://react-api-k.netlify.app/",
  },
  {
    id: 8,
    title: "Todo List",
    subtitle: "Theme Switcher & State Management",
    tech: ["React", "Context API", "Redux"],
    img: "/3.png",
    link: "https://todotheme.netlify.app/",
  },
  {
    id: 9,
    title: "Quiz App",
    subtitle: "Interactive React Application",
    tech: ["React", "Hooks", "JSON"],
    img: "/2.png",
    link: "https://quiz-app-k.netlify.app/",
  },
];




const Projects = () => {
  return (
    <section className="bg-[#030712] py-20 px-6 lg:px-8" id="projects">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white border-l-4 border-blue-500 pl-4 mb-18">
          My Projects
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {projects.map((p) => (
            <a
              key={p.id}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[320px] sm:w-[400px] h-[300px]"
            >
              <figure className="relative w-full h-full border border-gray-600 overflow-hidden group">
                {/* Image */}
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover transition-opacity duration-300 opacity-90 group-hover:opacity-40"
                />

                {/* Overlay Content */}
                <figcaption className="absolute inset-0 p-6 flex flex-col justify-center items-center text-center text-white">
                  <h2 className="text-2xl font-semibold transform translate-y-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    {p.title}
                  </h2>
                  <p className="text-sm text-gray-300 mb-4 opacity-0 transition-opacity duration-500 delay-200 group-hover:opacity-100">
                    {p.subtitle}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap justify-center gap-3 opacity-0 transition-all duration-500 delay-300 group-hover:opacity-100">
                    {p.tech.map((tech, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-sm backdrop-blur-md"
                      >
                        {getIcon(tech)}
                        <span>{tech}</span>
                      </div>
                    ))}
                  </div>

                  {/* Link Icon */}
                  <div className="mt-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-500 text-white text-lg bg-orange-600 p-2 rounded-full">
                    <FontAwesomeIcon icon={faLink} />
                  </div>
                </figcaption>
              </figure>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
