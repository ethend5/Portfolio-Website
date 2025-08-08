/**
* @copyright 2025 Ethen Dhanaraj
* @license Apache-2.0
*/


import SkillCard from "./SkillCard";


const skillItem = [
 {
   imgSrc: '/images/fusionlogo.svg',
   label: 'Fusion',
   desc: 'CAD Software'
 },
 {
   imgSrc: '/images/css3.svg',
   label: 'CSS',
   desc: 'User Interface'
 },
 {
   imgSrc: '/images/javascript.svg',
   label: 'JavaScript',
   desc: 'Interaction'
 },
 {
   imgSrc: '/images/python.png',
   label: 'Python',
   desc: 'Programming'
 },
 {
   imgSrc: '/images/nodejs.svg',
   label: 'NodeJS',
   desc: 'Web Server'
 },
 {
   imgSrc: '/images/react.svg',
   label: 'React',
   desc: 'Framework'
 },
 {
   imgSrc: '/images/tailwindcss.svg',
   label: 'TailwindCSS',
   desc: 'User Interface'
 }
];


const Skill = () => {
 return (
   <section id="skill" className="section">
     <div className="container">


       <h2 className="headline-2 reveal-up">
         Essential Tools I Use
       </h2>


       <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
         Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
       </p>


       <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
         {skillItem.map(({ imgSrc, label, desc }, key) => (
           <SkillCard
             key={key}
             imgSrc={imgSrc}
             label={label}
             desc={desc}
             classes="reveal-up"
           />
         ))}
       </div>


     </div>
   </section>
 )
}


export default Skill
