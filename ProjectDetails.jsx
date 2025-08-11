/**
* @copyright 2025 Ethen Dhanaraj
* @license Apache-2.0
*/


import { useParams, Link, Navigate } from 'react-router-dom';


// Import your project data (you can move this to a separate file)
const projectsData = [
 {
   id: 'electromagnetic-car',
   imgSrc: '/images/electrocar.png',
   title: 'Electromagnetic Car',
   tags: ['Electronics', 'Engineering', 'Electromagnetism', 'Circuit Building'],
   projectLink: '',
   githubLink: '', // Add if you have a GitHub repo
   description: 'An innovative electromagnetic car project showcasing principles of electromagnetism and circuit building. This project demonstrates the practical application of electromagnetic forces taught in AP Physics.',
   detailedDescription: `
     This electromagnetic car project represents a breakthrough in understanding electromagnetic principles and their practical applications in AP Physics. The project involved extensive research into electromagnetic field theory, circuit design, and mechanical engineering principles.

     The car utilizes tightly wrapped copper wire around a steel bolt to create the electromagnet. The car uses two AA batteries to power the whole system. Directly wired into the breadboard which runs in parallel to have consistent voltage powering both the DC Motor and the electromagnet. 

     The ultimate objective with this project was to magnetize ten paperclips while driving over them. My electromagnetic car was able to pick up fifteen paperclips due to me running the circuit in parallel.
   `,
   features: [
     'Battery Pack Routed in Parallel',
     'Steel Bolt Wrapped in Copper Wire Charged with Electricity',
     'Motor Connected to a Gear Train to Rotate Back Axle ',
   ],
   technologies: [
     'DC Motor',
     'Breadboard',
     'Electromagnet'
   ],
   challenges: [
     'Optimizing Electromagnetic Field Efficiency',
     'Managing Power Consumption for Extended Operation',
     'Reducing Electromagnetic Interference',
     'Achieving a Balance Between Speed and Magnetism',
   ],
   results: [
     'Successfully Magnetized Fifteen Paperclips',
     'Drove for Over Two Minutes Long',
     'Reached a Maximum Speed of 15 [unit]',
   ],
   gallery: [
     '/images/electrocar.png',
     '/images/electrocar-circuit.jpg',
     '/images/electrocar-testing.jpg',
     '/images/electrocar-components.jpg'
   ]
 },
 {
   id: 'portfolio-website',
   imgSrc: '/images/questionmark.jpg',
   title: 'Portfolio Website',
   tags: ['React', 'NodeJS', 'TailwindCSS', 'JavaScript', 'HTML'],
   projectLink: '',
   githubLink: '',
   description: 'An Online Website to Highlight All of My Projects and Experience.',
   detailedDescription: `
    In today's digital-first world, I recognized the need for a compelling online presence to showcase my electrical engineering projects and technical skills. This project represented a significant learning challenge, as my JavaScript knowledge was initially quite basic, but I embraced the opportunity to expand my skillset through extensive research, YouTube tutorials, and hands-on practice. 
    
    The website is built using modern technologies including React for dynamic interfaces, TailwindCSS for responsive styling, and Node.js for development tooling. I encountered substantial challenges during development, including production crashes and significant code loss near completion, which tested my resilience and problem-solving abilities. 
    
    Despite these setbacks, I persevered and successfully created a professional-grade portfolio that demonstrates both my engineering expertise and my ability to adapt to new technologies. The completed website serves as a comprehensive showcase of my projects while reflecting my commitment to continuous learning in an ever-evolving technological landscape.
    `,
   features: [
     'Navigation Bar',
     'Resume Button',
     'Project and Experience Cards',
     'Web-to-Email Gateway'
   ],
   technologies: ['JavaScript', 'React', 'TailwindCSS', 'HTML', 'NodeJS'],
   challenges: ['The Website Crashing While in Production', 'A Majority of Code Getting Lost When Almost Finished'],
   results: ['A Successful Electrical Engineering Portfolio Website'],
   gallery: ['/images/questionmark.jpg']
 },
 {
   id: 'project-3',
   imgSrc: '/images/questionmark.jpg',
   title: 'In Progress...',
   tags: ['Coming Soon'],
   projectLink: '',
   githubLink: '',
   description: 'Another innovative project in the pipeline. This will showcase advanced engineering principles and modern technological solutions.',
   detailedDescription: 'Project details will be available soon. This project is currently in the planning and design phase.',
   features: [
     'Project details coming soon',
     'Advanced engineering concepts',
     'Cutting-edge technology',
     'Detailed analysis and results planned'
   ],
   technologies: ['TBD'],
   challenges: ['Project in development'],
   results: ['Coming soon'],
   gallery: ['/images/questionmark.jpg']
 }
];


const ProjectDetails = () => {
 const { id } = useParams();
 const project = projectsData.find(p => p.id === id);


 // Redirect to home if project not found
 if (!project) {
   return <Navigate to="/" replace />;
 }


 return (
   <div className="min-h-screen bg-zinc-900 text-zinc-50">
     {/* Header/Navigation */}
     <header className="sticky top-0 z-40 bg-zinc-900/80 backdrop-blur-sm border-b border-zinc-800">
       <div className="container mx-auto px-4 py-4">
         <div className="flex items-center justify-between">
           <Link
             to="/"
             className="flex items-center gap-2 text-zinc-400 hover:text-zinc-200 transition-colors"
           >
             <span className="material-symbols-rounded">arrow_back</span>
             Back to Portfolio
           </Link>
           <h1 className="text-xl font-semibold">{project.title}</h1>
         </div>
       </div>
     </header>


     {/* Hero Section */}
     <section className="py-16 lg:py-24">
       <div className="container mx-auto px-4">
         <div className="grid lg:grid-cols-2 gap-12 items-center">
           <div>
             <div className="flex flex-wrap gap-2 mb-6">
               {project.tags.map((tag, index) => (
                 <span
                   key={index}
                   className="bg-sky-400/10 text-sky-400 px-4 py-2 rounded-full text-sm font-medium"
                 >
                   {tag}
                 </span>
               ))}
             </div>
            
             <h1 className="text-4xl lg:text-5xl font-bold mb-6">
               {project.title}
             </h1>
            
             <p className="text-xl text-zinc-400 leading-relaxed mb-8">
               {project.description}
             </p>


             <div className="flex flex-col sm:flex-row gap-4">
               {project.projectLink && (
                 <a
                   href={project.projectLink}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="flex items-center justify-center gap-2 bg-sky-400 text-zinc-900 px-6 py-3 rounded-lg font-medium hover:bg-sky-300 transition-colors"
                 >
                   <span className="material-symbols-rounded">launch</span>
                   View Live Project
                 </a>
               )}
               {project.githubLink && (
                 <a
                   href={project.githubLink}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="flex items-center justify-center gap-2 bg-zinc-800 text-zinc-200 px-6 py-3 rounded-lg font-medium hover:bg-zinc-700 transition-colors"
                 >
                   <span className="material-symbols-rounded">code</span>
                   View Source Code
                 </a>
               )}
             </div>
           </div>


           <div className="relative">
             <figure className="aspect-square rounded-2xl overflow-hidden bg-zinc-800">
               <img
                 src={project.imgSrc}
                 alt={project.title}
                 className="w-full h-full object-cover"
               />
             </figure>
           </div>
         </div>
       </div>
     </section>


     {/* Detailed Description */}
     <section className="py-16 bg-zinc-800/50">
       <div className="container mx-auto px-4">
         <h2 className="text-3xl font-bold mb-8">Project Overview</h2>
         <div className="prose prose-zinc prose-invert max-w-none">
           <p className="text-lg text-zinc-300 leading-relaxed whitespace-pre-line">
             {project.detailedDescription}
           </p>
         </div>
       </div>
     </section>


     {/* Features & Technologies Grid */}
     <section className="py-16">
       <div className="container mx-auto px-4">
         <div className="grid lg:grid-cols-2 gap-12">
           {/* Features */}
           <div>
             <h2 className="text-3xl font-bold mb-8">Key Features</h2>
             <ul className="space-y-4">
               {project.features.map((feature, index) => (
                 <li key={index} className="flex items-start gap-3">
                   <span className="material-symbols-rounded text-sky-400 text-xl mt-1 flex-shrink-0">
                     check_circle
                   </span>
                   <span className="text-zinc-300 leading-relaxed">{feature}</span>
                 </li>
               ))}
             </ul>
           </div>


           {/* Technologies */}
           <div>
             <h2 className="text-3xl font-bold mb-8">Technologies Used</h2>
             <div className="grid grid-cols-2 gap-3">
               {project.technologies.map((tech, index) => (
                 <div
                   key={index}
                   className="bg-zinc-800 text-zinc-200 px-4 py-3 rounded-lg text-center font-medium"
                 >
                   {tech}
                 </div>
               ))}
             </div>
           </div>
         </div>
       </div>
     </section>


     {/* Challenges & Results */}
     <section className="py-16 bg-zinc-800/50">
       <div className="container mx-auto px-4">
         <div className="grid lg:grid-cols-2 gap-12">
           {/* Challenges */}
           <div>
             <h2 className="text-3xl font-bold mb-8">Challenges Overcome</h2>
             <ul className="space-y-4">
               {project.challenges.map((challenge, index) => (
                 <li key={index} className="flex items-start gap-3">
                   <span className="material-symbols-rounded text-yellow-400 text-xl mt-1 flex-shrink-0">
                     psychology
                   </span>
                   <span className="text-zinc-300 leading-relaxed">{challenge}</span>
                 </li>
               ))}
             </ul>
           </div>


           {/* Results */}
           <div>
             <h2 className="text-3xl font-bold mb-8">Results Achieved</h2>
             <ul className="space-y-4">
               {project.results.map((result, index) => (
                 <li key={index} className="flex items-start gap-3">
                   <span className="material-symbols-rounded text-green-400 text-xl mt-1 flex-shrink-0">
                     emoji_events
                   </span>
                   <span className="text-zinc-300 leading-relaxed">{result}</span>
                 </li>
               ))}
             </ul>
           </div>
         </div>
       </div>
     </section>


     {/* Back to Projects */}
     <section className="py-16">
       <div className="container mx-auto px-4 text-center">
         <Link
           to="/"
           className="inline-flex items-center gap-2 bg-zinc-800 text-zinc-200 px-8 py-4 rounded-lg font-medium hover:bg-zinc-700 transition-colors"
         >
           <span className="material-symbols-rounded">arrow_back</span>
           Back to All Projects
         </Link>
       </div>
     </section>
   </div>
 );
};


export default ProjectDetails;
