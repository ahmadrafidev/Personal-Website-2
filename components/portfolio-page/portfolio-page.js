/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/no-unknown-property */

import {motion} from 'framer-motion';
import { projects } from './data';

function Portfolio() {
  return (
    <section id="projects" class="px-2 md:px-20 lg:px-32 xl:px-60 2xl:px-80 min-h-screen pt-6 md:pt-14 pb-6 md:pb-14 bg-white dark:bg-secondary font-secondary">
      <div class="container mx-auto">
        <div class="flex mb-10">
          <h1 class="text-2xl sm:text3xl md:text-7xl font-bold font-primary title-font mb-4 uppercase">
            Projects.
          </h1>
        </div>
        <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} class="flex flex-wrap w-1/2 -m-4 text-center">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              class="px-2 p-4">
              <div class="flex relative">
                <img
                  alt="gallery"
                  class="absolute rounded-2xl inset-0 object-cover object-center"
                  src={project.image}
                />
                <div class=" py-2 sm:py-3 md:py-4 lg:py-6 xl:py-10 2xl:py-20 inset-0 object-cover object-center relative rounded-2xl border-4 text-center border-gray-800 bg-gray-900 dark:bg-gray-100 opacity-0 hover:opacity-100">
                  <h1 class=" text-base sm:text-2xl md:text-3xl font-bold font-secondary text-white dark:text-black mb-4">
                    {project.title}
                  </h1>
                  <h2 class="tracking-widest text-sm sm:text-lg md:text-xl font-semibold font-secondary text-blue-400 dark:text-blue-600 pb-4">
                    {project.excerpt}
                  </h2>
                  <p class="font-semibold text-base sm:text-xl md:text-2xl font-secondary text-white dark:text-black">{project.techStack}</p>
                </div>
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Portfolio;