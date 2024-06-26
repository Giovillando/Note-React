import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FiHome, FiPlusCircle, FiLogOut } from "react-icons/fi";
import { LocaleConsumer } from "../contexts/LocaleContext";

function Navigation({ logout, name }) {
  return (
    <LocaleConsumer>
      {({ locale, toggleLocale }) => {
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
              <li>
                <button onClick={logout}>
                  {name} <FiLogOut />
                </button>
              </li>
            </ul>
          </nav>
        );
      }}
    </LocaleConsumer>
  );
}

Navigation.propTypes = {
  logout: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default Navigation;
