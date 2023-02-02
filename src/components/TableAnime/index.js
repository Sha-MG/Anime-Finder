// == Import
import axios from "axios";
import { useState, useEffect, React, useMemo } from "react";
import Form from "./Form";
import Table from "./Table";
import './styles.scss';
import {AiFillHeart} from 'react-icons/ai';
import Loader from "../Loader";
import { Link } from "react-router-dom";
// == Composant
const TableAnime = () => {

  const [animes, setAnimes] = useState({});
  const [loadingData, setLoadingData] = useState(true);
  const [endpoint, setEndpoint] = useState('/anime?page[limit]=10&page[offset]=0')

  const getAnimes = async () => {
    const response = await axios.get(`https://kitsu.io/api/edge${endpoint}`);
    setAnimes(response.data);
    setLoadingData(false);
  }

  useEffect(() => {
    getAnimes()
    }, []);

  const handleForm = async () => {

    const results = await axios.get(`https://kitsu.io/api/edge/anime`);
    setAnimes(results.data)
  }
  
  return (
    <div className="tableAnime-container">
      <Form handleForm={handleForm}/>
      <h1 className="tableAnime-container--title">Catalogue</h1>
      {loadingData ? 
        (
          <Loader/>
        ) : (
        <div className="tableAnime-container--table">
          <Table animes={animes.data} />  
        </div>
        )
      }
      <Link to='/favorites' className='tableAnime-container--button'>Voir les favoris <AiFillHeart size='24px'/></Link>
    </div>
);
}

// == Export
export default TableAnime;
