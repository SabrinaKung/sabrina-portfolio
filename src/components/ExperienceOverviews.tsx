"use client";
import React from "react";
import { motion } from "framer-motion";

interface TimelineItem {
  id: number;
  date: string;
  title: string;
  company: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  const sortedItems = [...items].sort((a, b) => b.id - a.id);

  return (
    <section id="Experiences" className="pt-40 pb-10 text-black">
      <div className="container mx-auto sm:px-6 lg:px-8">
        {/* <motion.div
          className="text-4xl text-center font-bold mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Professional Experience
        </motion.div> */}
        <div className="flex flex-col items-center">
          {sortedItems.map((item, index) => (
            <div
              key={item.id}
              className="relative flex items-start pb-8 max-w-md w-full mx-auto"
            >
              {/* The vertical line (only for all but the last item) */}
              {index !== sortedItems.length - 1 && (
                <span className="absolute left-2 -top-4 bottom-0 w-px bg-gray-300" />
              )}

              {/* Dot */}
              <div className="mr-4 flex items-center justify-center">
                <div className="z-10 bg-black w-4 h-4 rounded-full" />
              </div>

              {/* Card */}
              <motion.div
                className="bg-white border border-gray-200 rounded-lg shadow-xl p-6 
                   w-full transition-all duration-300 ease-in-out 
                   hover:shadow-indigo-950/20 hover:-translate-y-1"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h2 className="font-bold text-lg sm:text-xl mb-1">
                  {item.title}
                </h2>
                <p className="text-sm text-gray-500 mb-3">{item.date}</p>
                <h4 className="text-base text-gray-600 font-semibold mb-1 ml-1">
                  {item.company}
                </h4>
                <p className="text-xs sm:text-sm leading-snug tracking-wide text-gray-700 ml-1">
                  {item.description}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ExperienceTimeline: React.FC = () => {
  const experienceItems: TimelineItem[] = [
    {
      id: 0,
      date: "2018 - 2022",
      title: "Undergraduate Student in Computer Science",
      company: "National Chengchi University",
      description: "Teaching Assistant: Database Systems, Algorithms",
    },
    {
      id: 1,
      date: "2021 - 2022",
      title: "Research Intern",
      company: "National Chengchi University - Data Mining and Multimedia Lab",
      description:
        "Discovery and Comparative Cooking Style Mining on the Localization of Cuisine from Recipe Datasets: An Analysis of Chinese Cuisine in Taiwan and USA.",
    },
    {
      id: 2,
      date: "2021 - 2023",
      title: "Software Engineer",
      company: "Moxa",
      description:
        "Implemented algorithms and developed frameworks to enhance software testing and automation processes.",
    },
    {
      id: 3,
      date: "2023 - 2025",
      title: "Master Student in Computer Science",
      company: "Brown University",
      description:
        "Courses: Software Engineering, Computer Networks, Computer Systems, Distributed System, Topics in Database Management",
    },

    // Add more items as needed
  ];

  return <Timeline items={experienceItems} />;
};

export default ExperienceTimeline;
