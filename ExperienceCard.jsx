/**
* @copyright 2025 Ethen Dhanaraj
* @license Apache-2.0
*/

import PropTypes from "prop-types";
import { MapPin, Calendar } from "lucide-react";

const ExperienceCard = ({
    position,
    company,
    duration,
    location,
    description,
    technologies,
    logo
}) => {
    return (
        <div className="bg-zinc-800 p-5 rounded-xl min-w-[320px] flex flex-col lg:min-w-[420px]">
            
            {/* Header with logo, position and company */}
            <div className="flex items-start gap-3 mb-3">
                <figure className="img-box rounded-lg w-12 h-12 overflow-hidden flex-shrink-0">
                    <img
                        src={logo}
                        alt={`${company} logo`}
                        width={48}
                        height={48}
                        loading="lazy"
                        className="w-full h-full object-cover" 
                    />
                </figure>
                <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-1">
                        {position}
                    </h3>
                    <p className="text-blue-400 font-medium">
                        {company}
                    </p>
                </div>
            </div>

            {/* Duration and Location */}
            <div className="mb-4 ml-15">
                <div className="flex items-center gap-2 mb-2">
                    <Calendar size={14} className="text-zinc-400 flex-shrink-0" />
                    <p className="text-sm text-zinc-300">
                        {duration}
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-zinc-400 flex-shrink-0" />
                    <p className="text-sm text-zinc-400">
                        {location}
                    </p>
                </div>
            </div>

            {/* Description */}
            <p className="text-zinc-300 mb-4 flex-grow ml-15">
                {description}
            </p>

            {/* Technologies */}
            {technologies && technologies.length > 0 && (
                <div className="mb-4 ml-15">
                    <div className="flex flex-wrap gap-2">
                        {technologies.map((tech, index) => (
                            <span 
                                key={index}
                                className="px-2 py-1 bg-zinc-700 text-zinc-300 text-xs rounded-md"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            )}

        </div>
    )
}

ExperienceCard.propTypes = {
    position: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string),
    logo: PropTypes.string.isRequired,
}

export default ExperienceCard
