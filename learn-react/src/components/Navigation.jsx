import React from "react";
import { Link } from "react-router-dom";
import { FiHome, FiPlusCircle } from "react-icons/fi";

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <FiHome className="navigation" />
          </Link>
        </li>
        <li>
          <Link to="/add">
            <FiPlusCircle className="navigation" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
