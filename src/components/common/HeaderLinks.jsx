import React from "react";
import { links } from "./helper";

const HeaderLinks = ({ setIsLeftMenu, locomotiveRef }) => {
  const handleScroll = (url) => {
    setIsLeftMenu(false);
    setTimeout(() => {
      if (locomotiveRef.current) {
        locomotiveRef.current.scrollTo(url);
      }
    }, 100);
  };

  const handleClick = (event, url) => {
    // If the URL is a hash link
    if (url.startsWith('#')) {
      event.preventDefault();
      handleScroll(url); // Function to handle scrolling to the section
    } else {
      // Create a new anchor element to parse the URL
      const link = document.createElement('a');
      link.href = url;

      // Check if the link is within the same website
      if (link.hostname === window.location.hostname) {
        // Check if it's the same page with a hash (section)
        if (link.pathname === window.location.pathname) {
          event.preventDefault(); // Prevent default routing
          handleScroll(link.hash); // Scroll to the proper section
        } else {
          // If routing to a different page and a section
          event.preventDefault(); // Prevent default routing
          window.location.href = link.href; // Route to the new page
        }
      }
      // If it's an external URL, do nothing to allow default behavior
    }
  };

  return (
    <>
      {links.map((link, index) => (
        <li key={index} className="md:px-[15px] md:mb-0 mb-[15px] last:mb-0">
          <a
            href={link.url}
            target={'_self'}
            onClick={(event) => handleClick(event, link.url)}
            className="md:inline-block block cursor-pointer leading-[16px] py-[6px] px-4 text-black text-sm font-medium no-underline hover:bg-primary hover:text-white rounded-[4px]"
          >
            {link.title}
          </a>
        </li>
      ))}
    </>
  );
};

export default HeaderLinks;
