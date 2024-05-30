import React from "react";
import SkillBar from "../SkillBar";
import data from "../../data/portfolio copy.json";

const Skills = () => {
  return (
    <div className="skills-container flex flex-col tablet:flex-row justify-between">
      <div className="domain-competences w-full tablet:w-2/5 mb-10 tablet:mb-0">
        <h2 className="text-4xl font-medium mb-10">Domaines de compétences :</h2>
        <ul>
          {data.domainCompetences.map((item, index) => (
            <li key={index} className="mb-4">
              <h3 className="text-3xl font-bold">{item.title}</h3>
              <p className="text-2xl">{item.description}</p>
              {index < data.domainCompetences.length - 1 && (
                <hr className="border-t-2 border-purple-700 my-4 ml-40 mb-5" style={{ width: '20%' }} />
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="developed-competences w-full tablet:w-2/5">
        <h2 className="text-4xl font-medium mb-10">Compétences développées :</h2>
        <div className="skills">
          {data.skills.map((skill) => (
            <SkillBar key={skill.name} name={skill.name} level={skill.level} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
