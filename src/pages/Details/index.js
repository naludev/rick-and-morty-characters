import React from "react";
import { useParams } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { useDetails } from "../../app/api";
import BackgroundParticles from "../Home/particles";
import "./styles.scss";
import { getBadge } from "../../common/components/card/helper";

const Details = () => {
  let { id } = useParams();

  const { name, location, origin, gender, image, status } = useDetails({ id: id });

  return (
    <div className="homeContainer">
      <BackgroundParticles />
      <img className="icon" src={Logo} alt="" />
      <div style={{ marginTop: "5rem" }}>
        <img src={image} alt="" />
        <div className="detailsContainer">
          <div className="textContainer">
            <p className="characterDescription">name:</p><div className="space" /><p className="characterName">{name}</p>
          </div>
          <br />
          <div className="textContainer">
            <p className="characterDescription">gender:</p><div className="space" /><p className="characterName">{gender}</p>
          </div>
          <br />
          <div className="textContainer">
            <p className="characterDescription">origin:</p><div className="space" /><p className="characterName">{origin?.name}</p>
          </div>
          <br />
          <div className="textContainer">
            <p className="characterDescription">location:</p><div className="space" /><p className="characterName">{location?.name}</p>
          </div>
          <br />
          <div className="textContainer">
            <p className="characterDescription">status:</p><div className="space" /><p className="characterName">{getBadge(status)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
