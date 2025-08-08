/**
* @copyright 2025 Ethen Dhanaraj
* @license Apache-2.0
*/

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
   const { pathname } = useLocation();

   useEffect(() => {
       // Temporarily disable smooth scrolling
       const html = document.documentElement;
       const originalScrollBehavior = html.style.scrollBehavior;
       html.style.scrollBehavior = 'auto';
       
       // Multiple scroll attempts to handle async content loading
       const scrollToTop = () => window.scrollTo(0, 0);
       
       // Immediate scroll
       scrollToTop();
       
       // Additional scrolls to handle content that loads after route change
       const timers = [
           setTimeout(scrollToTop, 50),
           setTimeout(scrollToTop, 100),
           setTimeout(scrollToTop, 200),
           setTimeout(scrollToTop, 500)
       ];
       
       // Restore smooth scrolling after content should be loaded
       const restoreTimer = setTimeout(() => {
           html.style.scrollBehavior = originalScrollBehavior || 'smooth';
       }, 600);

       // Also listen for content changes and scroll to top
       const observer = new MutationObserver(() => {
           if (window.pageYOffset > 0) {
               scrollToTop();
           }
       });
       
       observer.observe(document.body, {
           childList: true,
           subtree: true
       });

       return () => {
           timers.forEach(clearTimeout);
           clearTimeout(restoreTimer);
           observer.disconnect();
           html.style.scrollBehavior = originalScrollBehavior || 'smooth';
       };
   }, [pathname]);

   return null;
};

export default ScrollToTop;
