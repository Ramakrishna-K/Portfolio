
// import React, { useState } from "react";
// import { projects } from "../../constants";

// const Work = () => {
//   const [selectedProject, setSelectedProject] = useState(null);

//   const handleOpenModal = (project) => {
//     setSelectedProject(project);
//     document.body.style.overflow = "hidden";
//   };

//   const handleCloseModal = () => {
//     setSelectedProject(null);
//     document.body.style.overflow = "auto";
//   };

//   return (
//     <section
//       id="work"
//       className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
//     >
//       {/* Section Title */}
//       <div className="text-center mb-16">
//         <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
//         <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
//         <p className="text-gray-400 mt-4 text-lg font-semibold">
//           A showcase of the projects I have worked on, highlighting my skills
//           and experience in various technologies.
//         </p>
//       </div>

//       {/* Projects Grid */}
//       <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
//         {projects.map((project) => (
//           <div
//             key={project.id}
//             onClick={() => handleOpenModal(project)}
//             className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-all duration-300"
//           >
//             <div className="p-4">
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="w-full h-48 object-cover rounded-xl"
//               />
//             </div>

//             <div className="p-6">
//               <h3 className="text-2xl font-bold text-white mb-2">
//                 {project.title}
//               </h3>

//               <p className="text-gray-500 mb-4 pt-4 line-clamp-3">
//                 {project.description}
//               </p>

//               <div className="flex flex-wrap gap-2">
//                 {project.tags.map((tag, index) => (
//                   <span
//                     key={index}
//                     className="bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Modal */}
//       {selectedProject && (
//         <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
//           <div className="bg-gray-900 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden">

//             {/* Sticky Header */}
//             <div className="sticky top-0 z-20 bg-gray-900 border-b border-gray-800 flex justify-end p-4">
//               <button
//                 onClick={handleCloseModal}
//                 className="text-white text-4xl hover:text-purple-500 transition-colors"
//               >
//                 &times;
//               </button>
//             </div>

//             {/* Scrollable Content */}
//             <div className="overflow-y-auto flex-1">

//               {/* Image */}
//               <div className="flex justify-center p-6">
//                 <img
//                   src={selectedProject.image}
//                   alt={selectedProject.title}
//                   className="w-full rounded-xl object-contain shadow-xl"
//                 />
//               </div>

//               {/* Details */}
//               <div className="px-6 pb-8 lg:px-10">
//                 <h2 className="text-3xl font-bold text-white mb-4">
//                   {selectedProject.title}
//                 </h2>

//                 <p className="text-gray-400 leading-8 mb-6">
//                   {selectedProject.description}
//                 </p>

//                 <div className="flex flex-wrap gap-2 mb-8">
//                   {selectedProject.tags.map((tag, index) => (
//                     <span
//                       key={index}
//                       className="bg-[#251f38] text-purple-400 px-3 py-1 rounded-full text-sm font-semibold"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>

//                 <div className="flex gap-4">
//                   <a
//                     href={selectedProject.github}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex-1 text-center bg-gray-800 hover:bg-purple-700 text-white py-3 rounded-xl font-semibold transition-colors"
//                   >
//                     View Code
//                   </a>

//                   <a
//                     href={selectedProject.webapp}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex-1 text-center bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl font-semibold transition-colors"
//                   >
//                     View Live
//                   </a>
//                 </div>
//               </div>

//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Work;



import React, { useState } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section
      id="work"
      className="py-24 px-6 md:px-10 lg:px-16 xl:px-20 font-sans"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>

        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4 rounded-full"></div>

        <p className="text-gray-400 mt-4 text-lg max-w-3xl mx-auto">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-purple-500/40 hover:-translate-y-2 transition-all duration-300 flex flex-col"
          >
            {/* Image */}
            <div className="p-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>

            {/* Content */}
            <div className="px-5 pb-5 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-white mb-3">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm leading-7 line-clamp-3 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-5">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-[#251f38] text-purple-400 text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col">

            {/* Header */}
            <div className="sticky top-0 bg-gray-900 border-b border-gray-800 flex justify-end p-4 z-10">
              <button
                onClick={handleCloseModal}
                className="text-white text-4xl hover:text-purple-500 transition"
              >
                &times;
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="overflow-y-auto">

              {/* Image */}
              <div className="p-6">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full rounded-xl object-contain shadow-xl"
                />
              </div>

              {/* Details */}
              <div className="px-6 lg:px-10 pb-10">
                <h2 className="text-3xl font-bold text-white mb-5">
                  {selectedProject.title}
                </h2>

                <p className="text-gray-400 leading-8 mb-6">
                  {selectedProject.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-8">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#251f38] text-purple-400 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-gray-800 hover:bg-gray-700 text-white py-3 rounded-xl font-semibold transition"
                  >
                    View Code
                  </a>

                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl font-semibold transition"
                  >
                    View Live
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;


