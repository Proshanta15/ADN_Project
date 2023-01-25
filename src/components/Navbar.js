import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
    <div id="top_bg">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="navbar navbar-expand-lg ">
              
                <NavLink className="navbar-brand" to="#">
                &#123;Finsweet
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
                    <li className="nav-item">
                      <NavLink className="nav-link active_item" aria-current="page" to="#">
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="#">
                        About us
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="#">
                      What We Do
                      </NavLink>
                    </li>
                    
                    <li className="nav-item">
                      <NavLink className="nav-link" to="#">
                      Media
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="#">
                      Contact
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link nav_btn" to="#">
                      Donate
                      </NavLink>
                    </li>
                  </ul>
                </div>
              
            </nav>
          </div>
        </div>
      </div>
    </div>
    
    </>
  );
};

export default Header;
