/**
* @copyright 2025 Ethen Dhanaraj
* @license Apache-2.0
*/


import ProjectCard from "./ProjectCard";


const project = [
 {
   id: 'project-3',
   imgSrc: '/images/questionmark.jpg',
   title: 'In Progress...',
   tags: ['Coming Soon'],
   projectLink: '',
   date: 'TBD'
 },
 {
   id: 'portfolio-website',
   imgSrc: '/images/questionmark.jpg',
   title: 'Portfolio Website',
   tags: ['React', 'NodeJS', 'TailwindCSS', 'JavaScript', 'HTML'],
   projectLink: '',
   date: 'August 2025'
 },
 {
   id: 'electromagnetic-car',
   imgSrc: '/images/electrocar.png',
   title: 'Electromagnetic Car',
   tags: ['Electronics', 'Engineering', 'Electromagnetism', 'Circuit Building'],
   projectLink: '',
   date: 'May 2025'
 }
];


const Project = () => {
   return (
       <section
           id="projects"
           className="section"
       >
           <div className="container">


               <h2 className="headline-2 mb-8 reveal-up">
                   Featured Projects
               </h2>


               <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                   {project.map(({id, imgSrc, title, tags, projectLink, date }, key) => (
                       <ProjectCard
                           key={key}
                           id={id}
                           imgSrc={imgSrc}
                           title={title}
                           tags={tags}
                           projectLink={projectLink}
                           date={date}
                           classes="reveal-up"
                       />
                   ))}
               </div>
           </div>
       </section>
   )
}


export default Project;
