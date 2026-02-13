import React , {useState} from "react";
import ProfileImage from "../assets/edit 2.jpg";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import { Link as ScrollLink } from "react-scroll";


const HomePage = () => {

const [isOpen, setIsOpen] = useState(false);

    return (
<>
 <section className="mt-4 " id="home">
        <div>
         <header className="fixed top-0 left-0 w-full z-50 bg-gray-900">
  <div className="flex justify-around items-center px-6 py-4">
    <h2 className="font-extrabold text-2xl text-white">Krisha</h2>

    <nav
      className={`${
        isOpen ? "flex" : "hidden"
      } flex-col md:flex md:flex-row gap-6 items-center
      text-[16px] font-semibold text-white
      absolute md:static top-16 left-0 w-full md:w-auto
      bg-gray-900 md:bg-transparent p-4 md:p-0`}
    >
      {["home","education","skills","projects","contact"].map((item) => (
        <ScrollLink
          key={item}
          to={item}
          smooth={true}
          duration={500}
          offset={-100}
          className="cursor-pointer hover:text-orange-500 duration-500 capitalize"
          onClick={() => setIsOpen(false)}
        >
          {item}
        </ScrollLink>
      ))}
    </nav>
  </div>
</header>

        </div>
      </section>





      {/* home */}
        <div className=" flex items-center justify-center   text-white mt-20">
      <div className="flex flex-col md:flex-row items-center gap-8 bg-gray-900  p-8 rounded-2xl shadow-lg max-w-5xl">
        {/* Image Section */}
        <div className="flex justify-center border-4 rounded-2xl border-gray-950">
          <img
            src={ProfileImage}
            alt="Profile"
            className="w-72 h-auto rounded-xl object-cover md:w-80"
          />
        </div>

        {/* Text Section */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Hi, I'm Krisha, a Web Developer.
          </h1>
          <p className="text-gray-300 mb-4 leading-relaxed">
            I am a passionate Web Developer specializing in building responsive, user-friendly, and scalable websites. I work with modern frameworks and clean coding practices to transform ideas into seamless digital experiences that engage users.
          </p>
          <p className="text-gray-400 mb-6 leading-relaxed">
            For me, development is not just about writing code—it's about solving problems, optimizing performance, and creating solutions that make an impact. I enjoy crafting websites and applications that are both functional and enjoyable to use.
          </p>
          <a
            href="https://drive.google.com/file/d/1GGST5dcP8w9jHAVF_kTzrx7pM-z6G1vq/view?usp=sharing"
            className="inline-block text-[14px] bg-orange-500 hover:bg-[#121214] text-white font-semibold px-5 py-2 rounded-lg transition hover:border hover:border-gray-700"
          >
            Download CV <i class="fa-solid fa-download"></i>
          </a>
        </div>
      </div>
    </div>




    <Education id="education" />
<Skills id="skills" />
<Projects id="projects" />
<Contact id="contact" />

</>

  );
};

export default HomePage;