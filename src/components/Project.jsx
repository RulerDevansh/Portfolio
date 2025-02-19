import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { CurrencyConverter, github, Portfolio, RockPaperSissors, Todo, YoutubeFeed } from "../assets";
import { fadeIn , textVariant } from "../utils/motion";
import { SectionWrapper } from "../HigherOrderComponent";

const projects = [
    {
      name: "My Portfolio",
      description:
        "A Portfolio Website that showcases my skills, projects, and contact information.Demonstrates the use of Spline, Threjs, Framer-Motion, React-Router, Emailjs react libraries",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "Spline",
          color: "pink-text-gradient",
        },
      ],
      image: Portfolio,
      source_code_link: "",
      Deploy_link: "",
    },
    {
        name: "Todo App",
        description:
          "A simple todo app that allows users to add, and delete tasks, and mark them as complete . Demonstrates the use of useState() Hook",
        tags: [
          {
            name: "react",
            color: "blue-text-gradient",
          },
          {
            name: "CSS",
            color: "green-text-gradient",
          },
        ],
        image: Todo,
        source_code_link: "https://github.com/RulerDevansh/Todo-App",
        Deploy_link: "https://rulerdevansh.github.io/Todo-App/",
    },
    {
      name: "Currency Converter",
      description:
        "A Currency Converter App that allows users to convert one currency to another. Project Demonstrate the use of API",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: CurrencyConverter,
      source_code_link: "https://github.com/RulerDevansh/Currency-Converter",
      Deploy_link : "https://rulerdevansh.github.io/Currency-Converter/",
    },
    {
        name: "Youtube FeedInhancer",
        description:
          "A Python Script that uses llama AI To search Given Keyword on Youtube and Imrove User's Feed",
        tags: [
          {
            name: "Python",
            color: "blue-text-gradient",
          },
          {
            name: "llama-3.1-8b",
            color: "green-text-gradient",
          },
        ],
        image: YoutubeFeed,
        source_code_link: "https://github.com/RulerDevansh/YouTube-Feed-Inhancer",
    },
    {
      name: "Rock Paper Sissors Game",
      description:
        "Rock Paper Sissors Game which also stores score Using HTML CSS JS",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: RockPaperSissors,
      source_code_link: "https://github.com/RulerDevansh/Rock-paper-scissors-game",
      Deploy_link: "https://rulerdevansh.github.io/Rock-paper-scissors-game/",
    },
  ];



function Project() {
    const ProjectCard = ({index,name,description,tags,image,source_code_link,Deploy_link}) => {
        return (
          <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.5)}>
            <Tilt
              options={{
                max: 45,
                scale: 1,
                speed: 450,
              }}
              className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
            >
              <div className='relative w-full h-[230px]' onClick={() => window.open(Deploy_link, "_blank")}>
                <img
                  src={image}
                  alt='project_image'
                  className='w-full h-full object-center rounded-2xl'
                />
      
                <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                  <div
                    onClick={() => window.open(source_code_link, "_blank")}
                    className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                  >
                    <img
                      src={github}
                      alt='source code'
                      className='w-1/2 h-1/2 object-contain'
                    />
                  </div>
                </div>
              </div>
      
              <div className='mt-5'>
                <h3 className='text-white font-bold text-[24px]'>{name}</h3>
                <p className='mt-2 text-secondary text-[14px]'>{description}</p>
              </div>
      
              <div className='mt-4 flex flex-wrap gap-2'>
                {tags.map((tag) => (
                  <p
                    key={`${name}-${tag.name}`}
                    className={`text-[14px] ${tag.color}`}
                  >
                    #{tag.name}
                  </p>
                ))}
              </div>
            </Tilt>
          </motion.div>
        );
      };
  
    return (
    <>
        <motion.div
              variants={textVariant()}
              >
                <h2
                className='text-violet-300 font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'
                >
                  My Projects
                </h2>
                <motion.p
                        variants={fadeIn("","",0.1,1)}
                        className='mt-4 text-violet-200 text-[17px] max-w-3xl leading-[30px] '
                      >
                        Here are some of the projects I've worked on. Click on the cards image to view the Deployed WebSite
                      </motion.p>
        </motion.div>
        
        <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>

    </>
  )
}

export default SectionWrapper(Project,"projects" ,true)