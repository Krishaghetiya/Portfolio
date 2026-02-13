import React from "react";

const Education = () => {
  return (
    <>
      <section className="mt-10 text-gray-100 py-12 px-6 md:px-20" id="education">
        <h2 className="text-3xl font-bold mb-10">Education</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-gray-900 rounded-2xl p-6 shadow-md transform transition duration-300 hover:scale-105 hover:shadow-orange-400/30 hover:shadow-lg">
            <p className="text-orange-400 font-medium">2020 - 2021</p>
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold underline underline-offset-4 decoration-orange-400">
                S.S.C. 
              </h3>
            </div>
            <p className="text-gray-300 mt-3">Shree G.K. Dholakiya School</p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-900 rounded-2xl p-6 shadow-md transform transition duration-300 hover:scale-105 hover:shadow-orange-400/30 hover:shadow-lg">
            <p className="text-orange-400 font-medium">2021 - 2023</p>
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold underline underline-offset-4 decoration-orange-400">
                Higher Secondary Education
              </h3>
            </div> 
            <p className="text-gray-300 mt-3">
              Shree Swastik School Of Science
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-900 rounded-2xl p-6 shadow-md transform transition duration-300 hover:scale-105 hover:shadow-orange-400/30 hover:shadow-lg">
            <p className="text-orange-400 font-medium">2023 - Current</p>
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold underline underline-offset-4 decoration-orange-400">
                B.E. (Computer Engineering)
              </h3>
            </div>
            <p className="text-gray-300 mt-3">V.V.P Engineering College</p>
          </div>

          {/* Card 4 */}
          <div className="bg-gray-900 rounded-2xl p-6 shadow-md transform transition duration-300 hover:scale-105 hover:shadow-orange-400/30 hover:shadow-lg">
            <p className="text-orange-400 font-medium">2024 - 2025</p>
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold underline underline-offset-4 decoration-orange-400">
                Full Stack Web Development
              </h3>
            </div>
            <p className="text-gray-300 mt-3">
              Red & White Multimedia Education
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;
