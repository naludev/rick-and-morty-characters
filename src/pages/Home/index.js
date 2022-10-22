import React, { useState, useEffect } from "react";
import "./styles.scss";
import Logo from "../../assets/logo.png";
import { useCharacters } from "../../app/api";
import Card from "../../common/components/card";
import BackgroundParticles from "./particles";
import Pagination from "../../common/components/pagination";

const Home = () => {
  let [pageNumber, updatePageNumber] = useState(1);
  let [status, updateStatus] = useState("");
  const [fetchedData, updateFetchedData] = useState([]);

  let [gender, updateGender] = useState("");
  let [species, updateSpecies] = useState("");
  let [search, setSearch] = useState("");

  const { info, results } = useCharacters({
    page: pageNumber,
    search: search,
    status: status,
    gender: gender,
    species: species,
  });

  return (
    <div className="homeContainer">
      <BackgroundParticles />
      <img className="icon" src={Logo} alt="" />
      <div className="cards">
        {results ? (
          results.map((i) => (
            <Card
              key={i.id}
              id={i.id}
              image={i.image}
              name={i.name}
              status={i.status}
            />
          ))
        ) : (
          <p>not found</p>
        )}
      </div>
      <Pagination
        info={info}
        pageNumber={pageNumber}
        updatePageNumber={updatePageNumber}
      />
    </div>
  );
};

export default Home;
