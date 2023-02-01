// == Import
import axios from "axios";
import { useState, useEffect, React, useMemo } from "react";
import Form from "./Form";
import Table from "./Table";

// == Composant
const TableAnime = () => {

  const [animes, setAnimes] = useState({});
  const [loadingData, setLoadingData] = useState(true);
  const [endpoint, setEndpoint] = useState('/anime?page[limit]=10&page[offset]=0')

  useEffect(() => {
    const fetchAnimes = async () => {
      const response = await axios.get(`https://kitsu.io/api/edge${endpoint}`);
      setAnimes(response.data);
      setLoadingData(false);
    };
    fetchAnimes();
  }, []);

  return (
    <div>

    <Form setEndpoint={setEndpoint}/>
    <h1>Catalogue</h1>

    {loadingData ? 
      (
        <p>Loading Please wait...</p>
      ) : (
        <Table animes={animes.data} />
      )
    }
    </div>
);
}

// == Export
export default TableAnime;
