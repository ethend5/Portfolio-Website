/**
* @copyright 2025 Ethen Dhanaraj
* @license Apache-2.0
*/

/**
* Node Modules
*/
import { useState} from "react";

/**
* Components
*/
import Navbar from "./Navbar";

const Header = () => {
   const [navOpen, setNavOpen] = useState(false); // Changed from true to false

   return (
      <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
          <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
         
              <h1>
                  <a
                  href="/"
                  className="Logo"
                  >
                      <img
                      src="/images/logo.svg"
                      width={40}
                      height={40}
                      alt="Ethen Dhanaraj"/>
                  </a>
              </h1>

              <div className="relative md:justify-self-center">
                  <button
                      className="menu-btn md:hidden w-10 h-10 flex items-center justify-center"
                      onClick={() => setNavOpen((prev) => !prev)}
                  >
                      {/* CSS-only hamburger menu */}
                      <div className={`relative w-6 h-6 ${navOpen ? 'hamburger-open' : 'hamburger-closed'}`}>
                          <span className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ${navOpen ? 'rotate-45 top-3' : 'top-1'}`}></span>
                          <span className={`absolute w-6 h-0.5 bg-white transition-all duration-300 top-3 ${navOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                          <span className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ${navOpen ? '-rotate-45 top-3' : 'top-5'}`}></span>
                      </div>
                  </button>
                
                 <Navbar navOpen={navOpen}/>
              </div>
            
              <a
                  href="#contact"
                  className="btn btn-secondary max-md:hidden md:justify-self-end"
              >
                  Contact Me
              </a>
          </div>
      </header>
  )
}

export default Header;
