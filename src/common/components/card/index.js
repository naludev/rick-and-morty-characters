import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { getBadge } from "./helper";
import "./styles.scss";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../app/routes/paths";

const Card = ({ id, image, name, status, location }) => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log(id);
  });
  return (
    <div className="card" key={id} onClick={() => navigate(ROUTES.DETAIL(id))}>
      <img className="characterImage" src={image} alt="" />
      <div className="content">
        <div className="headerContainer">
          <p className="name">{name}</p>
          {getBadge(status)}
        </div>
        <div className="descriptionContainer">
          <button
            className="viewMore"
            onClick={() => navigate(ROUTES.DETAIL(id))}
          >
            VIEW MORE {"->"}
          </button>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.node,
  name: PropTypes.string,
  image: PropTypes.node,
  status: PropTypes.string,
  location: PropTypes.string,
};

export default Card;
