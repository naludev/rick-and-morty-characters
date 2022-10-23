import React, { useState } from "react";
import "./styles.scss";
import Logo from "../../assets/logo.png";
import { useCharacters } from "../../app/api";
import Card from "../../common/components/card";
import BackgroundParticles from "./particles";
import Pagination from "../../common/components/pagination";
import Filter from "../../common/components/filter";

const Home = () => {
  const [pageNumber, updatePageNumber] = useState(1);
  const [status, updateStatus] = useState("");
  const [gender, updateGender] = useState("");
  const [species, updateSpecies] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const { info, results } = useCharacters({
    page: pageNumber,
    search: searchQuery,
    status: status,
    gender: gender,
    species: species,
  });

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };


  return (
    <div className="homeContainer">
      <BackgroundParticles />
      <img className="icon" src={Logo} alt="" />
      <Filter
        searchQuery={searchQuery}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        pageNumber={pageNumber}
        status={status}
        updateStatus={updateStatus}
        updateGender={updateGender}
        updateSpecies={updateSpecies}
        updatePageNumber={updatePageNumber}
      />
      <div className="cards">
        {results ? (
          results.map((i) => <Card key={i.id} id={i.id} image={i.image} name={i.name} status={i.status} />)
        ) : (
          <p>not found results</p>
        )}
      </div>
      <Pagination info={info} pageNumber={pageNumber} updatePageNumber={updatePageNumber} />
    </div>
  );
};

export default Home;
