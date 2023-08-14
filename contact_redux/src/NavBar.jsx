import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="col-md-12 bg-dark py-2">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-dark py-2">
      <Link to="/" className="navbar-brand ml-5">React Redux Contact Book</Link>
      </nav>
    </div>
  );
};
export default NavBar