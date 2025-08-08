/**
* @copyright 2025 Ethen Dhanaraj
* @license Apache-2.0
*/

/**
* Node Modules
*/
import PropTypes from 'prop-types'

/**
* Primary Button
*/
const ButtonPrimary = ({
   href,
   target = '_self',
   label,
   icon,
   iconPosition = 'left',
   classes
}) => {   
   const buttonContent = (
       <>
           {icon && iconPosition === 'left' && (
               <span className="material-symbols-rounded mr-2">{icon}</span>
           )}
           {label}
           {icon && iconPosition === 'right' && (
               <span className="material-symbols-rounded ml-2">{icon}</span>
           )}
       </>
   );

   if (href) {
       return (
           <a
               href={href}
               target={target}
               className={"btn btn-primary flex items-center " + classes}
           >
               {buttonContent}
           </a>
       )
   } else {
       return (
           <button className={"btn btn-primary flex items-center " + classes}>
               {buttonContent}
           </button>
       )
   }
}

ButtonPrimary.propTypes = {
   label: PropTypes.string.isRequired,
   href: PropTypes.string,
   target: PropTypes.string,
   icon: PropTypes.string,
   iconPosition: PropTypes.oneOf(['left', 'right']),
   classes: PropTypes.string
}

/**
* Outline Button
*/
const ButtonOutline = ({
   href,
   target = '_self',
   label,
   icon,
   iconPosition = 'left',
   classes
}) => {   
   const buttonContent = (
       <>
           {icon && iconPosition === 'left' && (
               <span className="material-symbols-rounded mr-2">{icon}</span>
           )}
           {label}
           {icon && iconPosition === 'right' && (
               <span className="material-symbols-rounded ml-2">{icon}</span>
           )}
       </>
   );

   if (href) {
       return (
           <a
               href={href}
               target={target}
               className={"btn btn-outline flex items-center " + classes}
           >
               {buttonContent}
           </a>
       )
   } else {
       return (
           <button className={"btn btn-outline flex items-center " + classes}>
               {buttonContent}
           </button>
       )
   }
}

ButtonOutline.propTypes = {
   label: PropTypes.string.isRequired,
   href: PropTypes.string,
   target: PropTypes.string,
   icon: PropTypes.string,
   iconPosition: PropTypes.oneOf(['left', 'right']),
   classes: PropTypes.string
}

export {
   ButtonPrimary,
   ButtonOutline
}
