/**
* @copyright 2025 Ethen Dhanaraj
* @license Apache-2.0
*/


import PropTypes from "prop-types";
import { Link } from 'react-router-dom';


const ProjectCard = ({
   id,
   imgSrc,
   title,
   tags,
   projectLink,
   classes
}) => {
   return (
       <div className={"relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-zinc-50/5 transition-colors " + (classes || "")}>


           <figure className="img-box aspect-square rounded-lg mb-4">
               <img
                   src={imgSrc}
                   alt={title}
                   loading='lazy'
                   className="img-cover"
               />
           </figure>


           <div className="flex items-center justify-between gap-4">


               <div>
                   <h3 className="title-1 mb-3">
                       {title}
                   </h3>


                   <div className="flex flex-wrap items-center gap-2">
                       {tags.map((label, key) => (
                           <span
                               key={key}
                               className="h-8 text-sm text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg"
                           >
                               {label}
                           </span>
                       ))}
                   </div>
               </div>


               <div className="w-11 h-11 rounded-lg grid place-items-center bg-sky-400 text-zinc-950 shrink-0">
                   {/* Link to project details page */}
                   <Link
                       to={`/project/${id}`}
                       className="material-symbols-rounded w-full h-full flex items-center justify-center"
                       aria-label={`View details for ${title}`}
                   >
                       arrow_outward
                   </Link>
               </div>


           </div>


           {/* Optional: Keep the direct project link as a subtle overlay */}
           {projectLink && (
               <a
                   href={projectLink}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="absolute inset-0 opacity-0"
                   tabIndex={-1}
               >
                   <span className="sr-only">Open {title} directly</span>
               </a>
           )}


       </div>
   )
}


ProjectCard.propTypes = {
   id: PropTypes.string.isRequired,
   imgSrc: PropTypes.string.isRequired,
   title: PropTypes.string.isRequired,
   tags: PropTypes.array.isRequired,
   projectLink: PropTypes.string,
   classes: PropTypes.string
}


export default ProjectCard;

