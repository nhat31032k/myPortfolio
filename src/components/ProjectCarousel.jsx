import React, { useRef } from "react";
import Slider from "react-slick";
import { projects } from "../data/projects";
import useClickOutside from "../hooks/useClickOutside";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectCarousel = () => {
  const sliderRef = useRef(null);
  const clickOutsideRef = useClickOutside(() => {
    // Handle click outside slider
    if (sliderRef.current) {
      sliderRef.current.slickPause();
    }
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="w-full relative" ref={clickOutsideRef}>
      <Slider ref={sliderRef} {...settings} className="project-slider">
        {projects.map((project) => (
          <div key={project.id} className="px-4 md:px-6 lg:px-8 xl:px-12">
            <div className="w-[85vw] sm:w-[70vw] md:w-[80vw] lg:w-[85vw] xl:w-[90vw] mx-auto">
              <div className="relative w-full h-[500px] sm:h-[550px] md:h-[600px] lg:h-[650px] xl:h-[700px] overflow-hidden bg-gray-900/50 rounded-xl backdrop-blur-sm">
                <div className="w-full h-full p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
                  <div className="code-window h-full group">
                    <div className="window-header">
                      <div className="window-dot bg-red-500 hover:bg-red-600 transition-colors"></div>
                      <div className="window-dot bg-yellow-500 hover:bg-yellow-600 transition-colors"></div>
                      <div className="window-dot bg-green-500 hover:bg-green-600 transition-colors"></div>
                    </div>
                    <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 h-[calc(100%-3rem)] overflow-y-auto custom-scrollbar">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 xl:gap-12 h-full">
                        <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 order-2 md:order-1 flex flex-col justify-between">
                          <div>
                            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold gradient-text group-hover:scale-105 transition-transform duration-300">
                              {project.title}
                            </h3>
                            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 group-hover:text-gray-200 transition-colors duration-300 mt-3 md:mt-4 lg:mt-5">
                              {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mt-4 md:mt-5 lg:mt-6">
                              {project.technologies.map((tech, index) => (
                                <span
                                  key={index}
                                  className="px-2 sm:px-3 md:px-4 py-1 text-xs sm:text-sm md:text-base bg-gray-800 rounded-full text-emerald-400 
                                           hover:bg-emerald-500 hover:text-white transform hover:scale-105 
                                           transition-all duration-300 cursor-default"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-3 pt-3 sm:pt-4 md:pt-5 lg:pt-6">
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-4 sm:px-6 md:px-8 py-2 md:py-3 bg-emerald-500 text-white rounded-lg 
                                       hover:bg-emerald-600 transform hover:scale-105 hover:shadow-lg 
                                       transition-all duration-300 flex items-center gap-2 text-sm sm:text-base md:text-lg"
                            >
                              <span>Live Demo</span>
                              <svg
                                className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                              </svg>
                            </a>
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-4 sm:px-6 md:px-8 py-2 md:py-3 border border-emerald-500 text-emerald-500 rounded-lg 
                                       hover:bg-emerald-500 hover:text-white transform hover:scale-105 
                                       hover:shadow-lg transition-all duration-300 flex items-center gap-2 text-sm sm:text-base md:text-lg"
                            >
                              <span>View Code</span>
                              <svg
                                className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                                />
                              </svg>
                            </a>
                          </div>
                        </div>
                        <div className="relative group-hover:scale-[1.02] transition-transform duration-500 order-1 md:order-2 h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] xl:h-[500px]">
                          <div
                            className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 
                                      opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                                      rounded-lg z-10"
                          ></div>
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover rounded-lg shadow-lg 
                                     group-hover:shadow-xl transition-all duration-300"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProjectCarousel;
