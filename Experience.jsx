/**
* @copyright 2025 Ethen Dhanaraj
* @license Apache-2.0
*/


/**
* Components
*/
import ExperienceCard from "./ExperienceCard";


const experiences = [
 {
   position: "Electrical Engineering Student",
   company: "University of California Santa Cruz",
   duration: "Sep 2025 - Present",
   location: "Santa Cruz, CA",
   description: "Majoring in Electrical Engineering and Minoring in Technology Information Management",
   technologies: ["Python"],
   logo: "/images/ucsclogo.png"
 },
 {
   position: "Educational Intern",
   company: "Ushur",
   duration: "Jun 2023 - Aug 2023",
   location: "Santa Clara, CA",
   description: "As one of only five students selected for this opportunity, I gained hands-on experience with cutting-edge AI and automation technologies at Ushur. I learned about conversational AI, Natural Language Processing, and workflow automation while working with no-code platforms in regulated industries such as healthcare and financial services. The experience exposed me to machine learning model training, AI-powered workflow development, and enterprise-grade software practices while collaborating with teams to solve complex automation challenges.",
   technologies: ["AI", "Machine Learning", "Natural Language Processing"],
   logo: "/images/ushurlogo.png"
 },
{
   position: "Engineering & Comp Sci Pathway",
   company: "Mountain House High School",
   duration: "Aug 2021 - May 2025",
   location: "Mountain House, CA",
   description: "As a dual PLTW pathway student, I completed both the Engineering and Computer Science pathways simultaneously over four years, mastering circuit design, mechanical systems, and programming fundamentals. I balanced two demanding curricula while completing numerous hands-on projects, including my capstone TV Wall system that combined four televisions into one unified display. This interdisciplinary experience provided me with broad technical expertise and the ability to approach complex problems from multiple perspectives.",
   technologies: ["PLTW", "Python", "Fusion", "JavaScript", "Public Speaking"],
   logo: "/images/mhhslogo.png"
 }
];


const Experience = () => {
   return (
       <section
           id="experience"
           className="section"
       >
           <div className="container">


               <h2 className="headline-2 mb-8 reveal-up">
                   Professional Experience
               </h2>


               <div className="overflow-x-auto overflow-y-hidden pb-4">
                   <div className="flex items-stretch gap-3 w-fit min-w-full">
                       {experiences.map((experience, key) => (
                           <ExperienceCard
                               key={key}
                               {...experience}
                           />
                       ))}
                   </div>
               </div>


           </div>
       </section>
   )
}


export default Experience
