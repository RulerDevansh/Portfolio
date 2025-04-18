import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { CurrencyConverter, DiscordColorText, github, Portfolio, RockPaperSissors, Todo, YoutubeFeed } from "../assets";
import { fadeIn , textVariant } from "../utils/motion";
import { SectionWrapper } from "../HigherOrderComponent";

const projects = [
  {
    name: "My Portfolio",
    description:
    "A Portfolio Website that showcases my skills, projects, and contact information.Demonstrates the use of Spline, Threjs, Framer-Motion, React-Router, Emailjs react libraries",
    tags: [
    {
      name: "React",
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
      source_code_link: "https://github.com/RulerDevansh/Portfolio",
      Deploy_link: "https://devansh-srivastava-portfolio.web.app/",
    },

    {
      name: "Discord Colored Text Generator",
      description:
      "This app generates Discord-colored text code. App Demonstrates the use of Mantine UI, regex, and innerHTML manipulation.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Mantine UI",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: DiscordColorText,
      source_code_link: "https://github.com/RulerDevansh/Discord_Colored_Text",
      Deploy_link : "https://discord-colored-text-ten.vercel.app/",
    },
    
    {
        name: "Todo App",
        description:
          "A multi-user task management app where each user maintains a separate task list. Utilizes Redux for global state and user-specific task handling, with Redux Thunk to fetch public IP and real-time timestamp when adding tasks.",
        tags: [
          {
            name: "REDUX",
            color: "blue-text-gradient",
          },
          {
            name: "React",
            color: "green-text-gradient",
          },
          {
            name: "Tailwind",
            color: "pink-text-gradient",
          },
        ],
        image: Todo,
        source_code_link: "https://github.com/RulerDevansh/Todo-APP",
        Deploy_link: "https://todo-app-devansh.web.app/",
    },

    {
      name: "Currency Converter",
      description:
      "A TypeScript-based Currency Converter App that enables users to convert currencies in real-time demonstrating the use of API's",
      tags: [
        {
          name: "TypeScript",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind",
          color: "green-text-gradient",
        },
        {
          name: "React",
          color: "pink-text-gradient",
        },
      ],
      image: CurrencyConverter,
      source_code_link: "https://github.com/RulerDevansh/CurrencyConverterTypeScript",
      Deploy_link : "https://currency-converter-devansh.web.app/",
    },

    {
        name: "Youtube FeedEnhancer",
        description:
          "A Python Script that uses llama AI To search Given Keyword on Youtube and Improve User's Feed",
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
        source_code_link: "https://github.com/RulerDevansh/YouTube-Feed-Enhancer",
        Deploy_link: "https://github.com/RulerDevansh/YouTube-Feed-Enhancer",
    },
    {
      name: "Rock Paper Scissors Game",
      description:
        "Rock Paper Scissors Game which also stores score Using HTML CSS JS",
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
      Deploy_link: "https://rock-paper-scissors-devansh.web.app/",
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
              className='bg-tertiary p-5 rounded-2xl w-[360px]'
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
                        Here are some of the projects I've worked on. Click on the cards image to view the Deployed WebSite.
                      </motion.p>
        </motion.div>
        
        <div className='mt-20 flex flex-wrap gap-7 align-center justify-center'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>

    </>
  )
}

export default SectionWrapper(Project,"projects")
