/**
* @copyright 2025 Ethen Dhanaraj
* @license Apache-2.0
*/


const aboutItems = [
 {
   label: 'Projects Done',
   number: 2
 },
 {
   label: 'Years of Experience',
   number: 4
 }
];


const About = () => {
   return (
       <section
           id="about"
           className="section"
       >
           <div className="container">


               <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12">
                   <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                       Hey! I&apos;m Ethen, a student at the University of California, Santa Cruz studying Electrical Engineering. I'm driven by a love for engineering innovation and fascinated by the analytical nature of finance—two fields that fuel my curiosity about how systems and patterns work and evolve to progress society.
                   </p>


                   <div className="flex flex-wrap items-center gap-4 md:gap-7">
                       {
                         aboutItems.map(({ label, number}, key) => (
                           <div key={key}>
                               <div className="flex items-center md:mb-2">
                                   <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                                   <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                               </div>


                               <p className="text-sm text-zinc-400">{label}</p>
                           </div>
                         )) 
                       }


                       <img
                       src="/images/logo.png"
                       alt="Logo"
                       width={40}
                       height={40}
                       className="ml-auto md:w-[50px] md:h-[40px]" />
                   </div>
               </div>


           </div>
       </section>
   )
}


export default About

