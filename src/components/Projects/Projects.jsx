import React from "react";
import Title from "../layouts/Title";
import ProjectCards from "./ProjectCards";
import project1 from "../../assets/banner-1.webp";
import project2 from "../../assets/zapchat.png";
import project3 from "../../assets/project3.jpg";


const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title 
         title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
         des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectCards 
         title="E-commerce Cloth-Store"
         des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga in a eligendi placeat animi ammu is grat guy to ! "
          src={project1}
          siteLink={"https://playful-pie-ee1d29.netlify.app/"}
        />
        <ProjectCards
        title="Real-Time ChatApp"
        des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga in a eligendi placeat animi ammu is grat guy to ! "
         src={project2}
         siteLink={"https://thriving-donut-093477.netlify.app/"}
        />
        <ProjectCards
        title="Todo App"
        des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga in a eligendi placeat animi ammu is grat guy to ! "
         src={project3}
        />
        <ProjectCards 
        title="Real-Time ChatApp"
        des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga in a eligendi placeat animi ammu is grat guy to ! "
         src={project2}
          siteLink={"https://thriving-donut-093477.netlify.app/"}
        />
        <ProjectCards 
        title="Todo App"
        des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga in a eligendi placeat animi ammu is grat guy to ! "
         src={project3}
        />
        <ProjectCards
        title="E-commerce website"
        des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga in a eligendi placeat animi ammu is grat guy to ! "
         src={project1}
         siteLink={"https://playful-pie-ee1d29.netlify.app/"}
        />
      </div>
    </section>
  );
};

export default Projects;
