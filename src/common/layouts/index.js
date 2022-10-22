import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

export const Layout = ({ children }) => (
  <div className="container">
    <div className="page">{children}</div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node,
};
