import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { SectionWrapper } from "../HigherOrderComponent";
import { textVariant } from "../utils/motion";

const experiences = [
  {
    title: "Core Member, Web Development Team",
    company_name: "ICONCLAVE college event",
    date: "Jan 2026 - Mar 2026",
    points: [
      "Collaborated with designers to translate event requirements into production-ready layouts.",
      "Contributed to the event website and implemented responsive UI components for attendee-facing sections.",
      "Worked with the team to deliver polished pages on a tight event timeline.",
    ],
  },
  {
    title: "SDE Intern",
    company_name: "Baseraa",
    date: "Jun 2026 - Present",
    points: [
      "Developing a unified restaurant growth platform integrating customer review data from Google Maps and Zomato with AI-driven sentiment analysis and actionable business insights.",
      "Engineering an AI ad studio for generating and launching targeted marketing campaigns across Meta, Google, and WhatsApp, with automated audience targeting and campaign workflows.",
      "Building multi-outlet management, approval-based discount distribution, and revenue projection modules to enable data-driven marketing and operational decision-making.",
    ],
  },
];

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{
        background: "#1d1836",
        color: "#fff",
        boxShadow: "0 0 0 4px rgba(255,255,255,0.12)",
      }}
      icon={
        <div className="flex h-full w-full items-center justify-center">
          <span className="h-3 w-3 rounded-full bg-violet-400" />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li key={`experience-point-${experience.company_name}-${index}`} className="text-white-100 text-[14px] pl-1 tracking-wider">
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

function Experience() {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="text-center text-secondary text-[16px]">What I have done so far</p>
        <h2 className="text-center text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Work Experience.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline lineColor="#ffffff">
          {experiences.map((experience, index) => (
            <ExperienceCard key={`experience-${index}`} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
}

export default SectionWrapper(Experience, "work", 0.08);