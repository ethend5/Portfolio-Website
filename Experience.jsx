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
   duration: "2025 - Present",
   location: "Santa Cruz, CA",
   description: "Majoring in Electrical Engineering and Minoring in Technology Information Management",
   technologies: ["Python"],
   logo: "/images/ucsclogo.png"
 },
 {
   position: "Educational Intern",
   company: "Ushur",
   duration: "June 2023 - August 2023",
   location: "Santa Clara, CA",
   description: "FINISH THIS.",
   technologies: ["AI", "Machine Learning"],
   logo: "/images/ushurlogo.png"
 },
{
   position: "Engineering & Comp Sci Pathway",
   company: "Mountain House High School",
   duration: "August 2021 - May 2025",
   location: "Mountain House, CA",
   description: "FINISH THIS.",
   technologies: ["Python", "Fusion"],
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

