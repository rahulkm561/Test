import React, { useEffect, useState } from 'react';
// Import useLocation hook
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';
const Navbar= () =>{
  const location = useLocation(); // once ready it returns the 'window.location' object
  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);
  return (
    <header
      className="navbar navbar-static-top "
      id="instanda-header"
      role="banner"
    >
      <nav className="navbar navbar-default" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target=".navbar-ex1-collapse"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>

            <a
              rel="home"
              href="https://www.toolboxbyadmiral.com/"
              className="navbar-brand"
            >
              <img
                className="hidden-xs"
                src="new-logo-white-cropped.png"
                alt="https://www.toolboxbyadmiral.com/"
              />
              <img
                className="visible-xs"
                src="new-logo-white-cropped.png"
                alt="https://www.toolboxbyadmiral.com/"
              />
            </a>
          </div>

          <div className="collapse navbar-collapse navbar-ex1-collapse">
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Navbar;