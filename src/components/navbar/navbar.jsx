import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar is-link"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <h1 className="title has-text-white">UAV Nyilvántartó</h1>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
