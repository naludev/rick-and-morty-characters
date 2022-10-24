import React from "react";
import { useParams } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { useDetails } from "../../app/api";
import BackgroundParticles from "../Home/particles";
import { getBadge } from "../../common/components/card/helper";
import "./styles.scss";

const Details = () => {
  let { id } = useParams();

  const { name, location, origin, gender, image, status } = useDetails({ id: id });

  const items = [
    {  id: 1, description: 'name: ', value: name },
    { id: 2, description: 'gender: ', value: gender },
    { id: 3, description: 'origin: ', value: origin?.name },
    { id: 4, description: 'location: ', value: location?.name },
    { id: 5, description: 'status: ', value: getBadge(status) },
  ]

  return (
    <div className="homeContainer">
      <BackgroundParticles />
      <img className="icon" src={Logo} alt="" />
      <div style={{ marginTop: "5rem" }}>
        <img src={image} alt="" />
        <div className="detailsContainer">
          {items.map((i) => (
            <>
            <div className="textContainer" key={i.id}>
            <p className="characterDescription">{i.description}</p><div className="space" /><p className="characterName">{i.value}</p>
          </div>
          <br />
          </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Details;
