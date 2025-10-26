import React from "react";
import Card from "../components/Card";

const Skills = () => {
  return (
    <>
      <div className="flex items-center pt-0 sm:pt-16  justify-center w-full text-blue-600">
        <h1 className="text-blue-600 text-3xl font-bold text-decoration-line: underline ">
          SKILLS & TOOLS
        </h1>
      </div>
      <div className=" sm:flex items-center justify-around flex-wrap ">
        <Card
          data={{
            title: "FRONTEND",
            skills: [
              { name: "HTML", level: "90%" },
              { name: "CSS", level: "85%" },
              { name: "JavaScript", level: "75%" },
              { name: "Tailwind CSS", level: "85%" },
              { name: "Bootstrap", level: "80%" },
            ],
          }}
        />

        <Card
          data={{
            title: "Programming & Database",
            skills: [
              { name: "Python", level: "80%" },
              { name: "SQL", level: "85%" },
            ],
          }}
        />
        <Card
          data={{
            title: "Cloud & Tools",
            skills: [
              { name: "AWS", level: "50%" },
              { name: "Git & GitHub", level: "75%" },
              { name: "VS Code", level: "90%" },
              { name: "MS Office", level: "95%" },
            ],
          }}
        />

        <Card
          data={{
            title: "Soft Skills",
            skills: [
              { name: "Problem Solving", level: "90%" },
              { name: "Time Management", level: "95%" },
              { name: "Team Collaboration", level: "80%" },
              { name: "Attention to Detail", level: "95%" },
            ],
          }}
        />
      </div>
      <div className="flex flex-wrap pb-5 gap-2 mt-3 w-full items-center justify-around ">
        <span className="bg-yellow-300 text-sm px-3 py-1 rounded-full font-medium">
          Python (Gold Badge)-HackerRank
        </span>
        <span className="bg-yellow-300 text-sm px-3 py-1 rounded-full font-medium">
          SQL (Gold Badge)- HackerRank
        </span>
      </div>
    </>
  );
};

export default Skills;
