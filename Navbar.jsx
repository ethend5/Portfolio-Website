/**
* @copyright 2025 Ethen Dhanaraj
* @license Apache-2.0
*/




/**
* Node Modules
*/
import { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";




const Navbar = ({ navOpen }) => {
  const lastActiveLink = useRef();
  const activeBox = useRef();
  const [activeSection, setActiveSection] = useState('home');




  const initActiveBox = () => {
      if (lastActiveLink.current && activeBox.current) {
          activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px'
          activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px'
          activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px'
          activeBox.current.style.height = lastActiveLink.current.offsetHeight + 'px'
      }
  }




  useEffect(() => {
      setTimeout(initActiveBox, 100);
  }, []);




  // Simplified and more reliable scroll-based section detection
  useEffect(() => {
      const sections = document.querySelectorAll('section[id]');
    
      const handleScroll = () => {
          const scrollPosition = window.scrollY;
          const windowHeight = window.innerHeight;
          const documentHeight = document.documentElement.scrollHeight;
        
          // Get navbar height to account for fixed navbar
          const navbarHeight = 80;
          const offset = navbarHeight + 20; // Reduced offset for better accuracy
        
          let currentSection = 'home';
        
          // Check if we're at the very top
          if (scrollPosition < 50) {
              currentSection = 'home';
          }
          // Check if we're near the bottom
          else if (scrollPosition + windowHeight >= documentHeight - 50) {
              // Set to the last section when near bottom
              const lastSection = sections[sections.length - 1];
              currentSection = lastSection ? lastSection.id : 'contact';
          }
          else {
              // Use a simple, reliable method: find the section whose top is closest to our offset point
              // but still above it (meaning we've scrolled past its start)
              let closestSection = null;
              let closestDistance = Infinity;
            
              sections.forEach(section => {
                  const rect = section.getBoundingClientRect();
                  const sectionTop = rect.top + scrollPosition;
                  const distanceFromOffset = scrollPosition + offset - sectionTop;
                
                  // Only consider sections we've scrolled past (distance >= 0)
                  // and find the one we most recently scrolled past (smallest positive distance)
                  if (distanceFromOffset >= 0 && distanceFromOffset < closestDistance) {
                      closestDistance = distanceFromOffset;
                      closestSection = section;
                  }
              });
            
              if (closestSection) {
                  currentSection = closestSection.id;
              }
          }
        
          if (currentSection !== activeSection) {
              setActiveSection(currentSection);
          }
      };




      // Initial call
      handleScroll();
    
      // Throttled scroll listener for better performance
      let ticking = false;
      const throttledScrollHandler = () => {
          if (!ticking) {
              requestAnimationFrame(() => {
                  handleScroll();
                  ticking = false;
              });
              ticking = true;
          }
      };




      window.addEventListener('scroll', throttledScrollHandler);
      window.addEventListener('resize', () => {
          setTimeout(() => {
              handleScroll();
              initActiveBox();
          }, 100);
      });




      return () => {
          window.removeEventListener('scroll', throttledScrollHandler);
          window.removeEventListener('resize', handleScroll);
      };
  }, [activeSection]);




  // Update active box when active section changes
  useEffect(() => {
      // Check if we're on desktop (window width >= 768px)
      const isDesktop = window.innerWidth >= 768;
      const isContactSection = activeSection === 'contact';
    
      // On desktop, hide active box for contact section
      // On mobile, contact is hidden anyway (md:hidden)
      if (isDesktop && isContactSection) {
          if (activeBox.current) {
              activeBox.current.style.transition = 'opacity 0.25s ease-out';
              activeBox.current.style.opacity = '0';
          }
        
          // Remove active class from all links
          if (lastActiveLink.current) {
              lastActiveLink.current.classList.remove('active');
          }
         
          // Add active styling to contact link if it exists
          const contactLink = document.querySelector(`a[href="#contact"]`);
          if (contactLink) {
              contactLink.classList.add('active');
          }
          return;
      }




      const activeLink = document.querySelector(`a[href="#${activeSection}"]`);
      if (activeLink && activeBox.current) {
          const wasInitialized = lastActiveLink.current !== null;
        
          // Remove active class from previous link
          if (lastActiveLink.current) {
              lastActiveLink.current.classList.remove('active');
          }
         
          // Remove active class from contact link
          const contactLink = document.querySelector(`a[href="#contact"]`);
          if (contactLink) {
              contactLink.classList.remove('active');
          }
        
          // Add active class to current link
          activeLink.classList.add('active');
        
          // Check if this is a big jump (more than 1 section difference)
          const allSections = ['home', 'about', 'projects', 'experience'];
          const currentIndex = allSections.indexOf(activeSection);
          const previousIndex = lastActiveLink.current ?
              allSections.indexOf(lastActiveLink.current.getAttribute('href').substring(1)) : -1;
        
          const isBigJump = wasInitialized && Math.abs(currentIndex - previousIndex) > 1;
        
          lastActiveLink.current = activeLink;




          // Update active box position
          requestAnimationFrame(() => {
              if (activeBox.current && activeLink) {
                  if (isBigJump) {
                      // For big jumps: fade out in place, then appear in new position
                      activeBox.current.style.transition = 'opacity 0.15s ease-out';
                      activeBox.current.style.opacity = '0';
                    
                      setTimeout(() => {
                          if (activeBox.current) {
                              // Move instantly while invisible (no position transitions)
                              activeBox.current.style.transition = 'none';
                              activeBox.current.style.top = activeLink.offsetTop + 'px';
                              activeBox.current.style.left = activeLink.offsetLeft + 'px';
                              activeBox.current.style.width = activeLink.offsetWidth + 'px';
                              activeBox.current.style.height = activeLink.offsetHeight + 'px';
                            
                              // Fade back in at new position
                              requestAnimationFrame(() => {
                                  if (activeBox.current) {
                                      activeBox.current.style.transition = 'opacity 0.15s ease-in';
                                      activeBox.current.style.opacity = '1';
                                  }
                              });
                          }
                      }, 150);
                  } else {
                      // Normal smooth transition for adjacent sections
                      activeBox.current.style.transition = 'all 0.25s ease-in-out';
                      activeBox.current.style.opacity = '1';
                      activeBox.current.style.top = activeLink.offsetTop + 'px';
                      activeBox.current.style.left = activeLink.offsetLeft + 'px';
                      activeBox.current.style.width = activeLink.offsetWidth + 'px';
                      activeBox.current.style.height = activeLink.offsetHeight + 'px';
                  }
              }
          });
      }
  }, [activeSection]);




  const activeCurrentLink = (event) => {
      event.preventDefault();
    
      const targetId = event.target.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
    
      if (targetSection) {
          // Calculate scroll position accounting for navbar
          const navbarHeight = 80; // Adjust to match your navbar height
          const elementPosition = targetSection.offsetTop;
          const offsetPosition = elementPosition - navbarHeight;




          window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
          });
        
          // Update active section immediately
          setActiveSection(targetId);
      }
  }




  const navItems = [
      {
          label: 'Home',
          link: '#home',
          className: `nav-link ${activeSection === 'home' ? 'active' : ''}`,
          ref: activeSection === 'home' ? lastActiveLink : null
      },
      {
          label: 'About',
          link: '#about',
          className: `nav-link ${activeSection === 'about' ? 'active' : ''}`
      },
      {
          label: 'Projects',
          link: '#projects',
          className: `nav-link ${activeSection === 'projects' ? 'active' : ''}`
      },
      {
          label: 'Experience',
          link: '#experience',
          className: `nav-link ${activeSection === 'experience' ? 'active' : ''}`
      },
      {
          label: 'Contact',
          link: '#contact',
          className: `nav-link md:hidden ${activeSection === 'contact' ? 'active' : ''}`
      }
  ];
   return (
      <nav className={`navbar ${navOpen ? 'active' : ''}`}>
          {
              navItems.map(({ label, link, className, ref }, key) => (
                  <a
                      href={link}
                      key={key}
                      ref={ref}
                      className={className}
                      onClick={activeCurrentLink}
                  >
                      {label}
                  </a>
              ))
          }
          <div
              className="active-box"
              ref={activeBox}
          ></div>
      </nav>
  )
}




Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired
}




export default Navbar

