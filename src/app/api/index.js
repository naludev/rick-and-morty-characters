import { useState, useEffect } from "react";

export const useCharacters = ({ page, search, status, gender, species }) => {
  const [fetchedData, updateFetchedData] = useState([]);
  let { info, results } = fetchedData;
  const api = `https://rickandmortyapi.com/api/character/?page=${page}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return { info, results };
};

export const useDetails = ({ id }) => {
  let [fetchedData, updateFetchedData] = useState([]);
  let { name, location, origin, gender, image, status, species } = fetchedData;
  const api = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return { name, location, origin, gender, image, status, species };
};
