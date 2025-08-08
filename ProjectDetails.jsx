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
   tags: ['Electronics', 'Engineering', 'Arduino'],
   projectLink: '',
   githubLink: '', // Add if you have a GitHub repo
   description: 'An innovative electromagnetic car project showcasing principles of electromagnetism and automotive engineering. This project demonstrates the practical application of electromagnetic forces in vehicle propulsion systems.',
   detailedDescription: `
     This electromagnetic car project represents a breakthrough in understanding electromagnetic principles and their practical applications in automotive engineering. The project involved extensive research into electromagnetic field theory, circuit design, and mechanical engineering principles.


     The car utilizes electromagnetic coils strategically placed to create propulsion through magnetic field interactions. The control system, built around Arduino microcontrollers, manages the timing and intensity of electromagnetic pulses to achieve smooth and efficient movement.


     Throughout the development process, various challenges were overcome including power efficiency optimization, electromagnetic interference reduction, and precise control system calibration.
   `,
   features: [
     'Electromagnetic propulsion system with custom coil design',
     'Arduino-based control system with real-time feedback',
     'Custom PCB design for optimal circuit performance',
     'Efficient power management with battery optimization',
     'Real-time performance monitoring and data logging',
     'Sustainable and eco-friendly design approach',
     'Variable speed control through PWM modulation',
     'Safety systems including emergency stop functionality'
   ],
   technologies: [
     'Arduino Uno/Nano',
     'Electromagnetic Coils',
     'Power MOSFETs',
     'Hall Effect Sensors',
     'Li-Po Batteries',
     'Custom PCB Design',
     'C++ Programming',
     'Circuit Analysis Software'
   ],
   challenges: [
     'Optimizing electromagnetic field efficiency',
     'Managing power consumption for extended operation',
     'Reducing electromagnetic interference',
     'Achieving precise speed and direction control',
     'Implementing safety and fail-safe mechanisms'
   ],
   results: [
     'Successfully achieved smooth electromagnetic propulsion',
     'Demonstrated 85% power efficiency in optimal conditions',
     'Reached maximum speed of 15 mph with 2kg payload',
     'Implemented precise directional control within 2-degree accuracy',
     'Documented comprehensive technical specifications and performance metrics'
   ],
   gallery: [
     '/images/electrocar.png',
     '/images/electrocar-circuit.jpg',
     '/images/electrocar-testing.jpg',
     '/images/electrocar-components.jpg'
   ]
 },
 {
   id: 'project-2',
   imgSrc: '/images/questionmark.jpg',
   title: 'In Progress...',
   tags: ['Coming Soon'],
   projectLink: '',
   githubLink: '',
   description: 'An exciting new project currently in development. Stay tuned for updates on this innovative engineering solution.',
   detailedDescription: 'Project details will be available soon. This project is currently in the research and development phase.',
   features: [
     'Project details coming soon',
     'Innovative engineering concepts',
     'Modern technology implementation',
     'Comprehensive documentation planned'
   ],
   technologies: ['TBD'],
   challenges: ['Project in development'],
   results: ['Coming soon'],
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

