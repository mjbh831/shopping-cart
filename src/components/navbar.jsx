import React from "react";

const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="navbar-brand" href="#">
        Cart:
        <span className="badge badge-pill badge-secondary m-1">
          {totalCounters}
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
