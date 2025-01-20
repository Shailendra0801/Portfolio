/**
 * @copyright 2024 Shailendra
 * @license Apache-2.0
*/

import { useState } from "react"; // Removed unused React import
import "./Work.css"; // Importing the CSS file for styling
import ProjectCard from "../ProjectCard/ProjectCard";

const works = [
  {
    imgSrc: "/images/project-1.jpg",
    title: "Full stack music app",
    tags: ["API", "MVC", "Development"],
    projectLink: "https://musify-5al0.onrender.com/",
  },
  {
    imgSrc: "/images/project-2.jpg",
    title: "Free stock photo app",
    tags: ["API", "SPA"],
    projectLink: "https://github.com/Shailendra0801",
  },
  {
    imgSrc: "/images/project-3.jpg",
    title: "Recipe app",
    tags: ["Development", "API"],
    projectLink: "",
  },
  {
    imgSrc: "/images/project-4.jpg",
    title: "Real state website",
    tags: ["Web-design", "Development"],
    projectLink: "https://github.com/Shailendra0801",
  },
  {
    imgSrc: "/images/project-5.jpg",
    title: "eCommerce website",
    tags: ["eCommerce", "Development"],
    projectLink: "https://github.com/Shailendra0801",
  },
  {
    imgSrc: "/images/project-6.jpg",
    title: "vCard Personal portfolio",
    tags: ["Web-design", "Development"],
    projectLink: "https://github.com/Shailendra0801",
  },
  {
    imgSrc: "/images/project-7.jpg",
    title: "Blog website",
    tags: ["Content", "Development"],
    projectLink: "https://github.com/Shailendra0801",
  },
  {
    imgSrc: "/images/project-8.jpg",
    title: "Portfolio 2.0",
    tags: ["Portfolio", "Web-design"],
    projectLink: "https://github.com/Shailendra0801",
  },
];

const Work = () => {
  const [showAll, setShowAll] = useState(false);

  const handleViewMore = () => {
    setShowAll(true); // Open the modal (subscreen)
  };

  const handleClose = (e) => {
    e.stopPropagation(); // Prevent any parent elements from triggering a link click
    setShowAll(false);   // Close the modal
  };

  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My Portfolio Highlights</h2>

        {/* Initial 6 projects in 2 rows (3 columns per row) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.slice(0, 6).map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>

        {/* View More Button */}
        <button
          onClick={handleViewMore}
          className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
        >
          View More
        </button>

        {/* Subscreen for all projects */}
        {showAll && (
          <div
            className="fixed inset-0 bg-gray-900 bg-opacity-95 flex justify-center items-center z-50"
            onClick={handleClose} // Clicking anywhere outside should close the modal
          >
            <div
              className="bg-gray-800 text-white rounded-lg p-6 w-4/5 max-w-6xl overflow-y-auto max-h-[90vh] shadow-lg"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal content
            >
              <h2 className="text-2xl font-bold mb-6 text-center">All Projects</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {works.map(({ imgSrc, title, tags, projectLink }, key) => (
                  <ProjectCard
                    key={key}
                    imgSrc={imgSrc}
                    title={title}
                    tags={tags}
                    projectLink={projectLink}
                    classes="reveal-up"
                  />
                ))}
              </div>
              {/* Close Button */}
              <button
                onClick={handleClose} // Ensure the Close button is not inside a link
                className="mt-6 px-6 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Work;
