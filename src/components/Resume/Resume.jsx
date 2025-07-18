import React, { useState } from "react";
import Title from "../layouts/Title";
import Education from "./Education";
import Skills from "./Skills";
import Achievement from "./Achievement";


const Resume = () => {
   const [educationData, setEducationData] = useState(true);
   const [skillData, setSkillData] = useState(false);
   const [achievementData, setAchievementData] = useState(false);


  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="6 MONTH OF EXPERIENCE" des="My Resume" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-3 sm:grid-cols-1 gap-4 ">
          <li onClick={()=>
            setEducationData(true)&
            setSkillData(false)&
            setAchievementData(false)
            } className={`${educationData ? "border-designColor rounded-lg" : "border-transparent"} resumeLi`}>
                Education</li>

          <li onClick={()=>
            setEducationData(false)&
            setSkillData(true)&
            setAchievementData(false) } className={`${skillData ? "border-designColor rounded-lg" : "border-transparent"} resumeLi`}>Professional Skills</li>

          <li onClick={()=>
            setEducationData(false)&
            setSkillData(false)&
            setAchievementData(true)} className={`${achievementData ? "border-designColor rounded-lg" : "border-transparent"} resumeLi`}>Achievements</li>
        </ul>
      </div>
      {educationData && <Education/>}
      {skillData && <Skills/>}
      {achievementData && <Achievement/>}
      {/* <Education/> */}
    </section>
  );
};

export default Resume;