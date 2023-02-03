// == Import
import axios from "axios";
import { useState, useEffect, React, useMemo } from "react";
import Form from "./Form";
import Table from "./Table";
import './styles.scss';
import {AiFillHeart} from 'react-icons/ai';
import Loader from "../Loader";
import { Link } from "react-router-dom";
import {HiArrowUturnRight} from 'react-icons/hi2'

// == Composant
const TableAnime = () => {

  const [animes, setAnimes] = useState({});
  const [loadingData, setLoadingData] = useState(true);
  const [endpoint, setEndpoint] = useState('/anime?page[limit]=10&page[offset]=0')

  const getAnimes = async () => {
    const response = await axios.get(`https://kitsu.io/api/edge${endpoint}`);
    setAnimes(response.data);
    setLoadingData(false);
    console.log(response.data)
  }

  useEffect(() => {
    getAnimes()
    }, 
  [endpoint]);

  const handleForm = (selectedOption, type) => {

    if (typeof selectedOption === 'string' && selectedOption.length > 0) {

      setLoadingData(true)
      setEndpoint(`/anime?filter[text]=${selectedOption}`)

    }else if(selectedOption.length === 0 || selectedOption === ''){
      
      setLoadingData(true)
      setEndpoint('/anime?page[limit]=10&page[offset]=10')
      
    }else{

      let filter = type ;
      let newEndpoint = `/anime?filter[${filter}]=`
      let values = []
      selectedOption.forEach(element => {
        values.push(element.value)
      });
      
      newEndpoint= newEndpoint+values.join('&')
  
      setLoadingData(true)
      setEndpoint(newEndpoint)
    }
  }
  
  return (
    <div className='tableAnime-background'>
      <div className="tableAnime-container">
        <Form handleForm={handleForm}/>
        <h1 className="tableAnime-container--title">Catalogue</h1>
        {loadingData ? 
          (
            <Loader/>
          ) : (
          <div className="tableAnime-container--table">
            <Table animes={animes.data} />  

            <HiArrowUturnRight/>
          </div>
          )
        }
        <Link to='/favorites' className='tableAnime-container--button'>Voir les favoris <AiFillHeart size='24px'/></Link>
      </div>
    </div>
);
}

// == Export
export default TableAnime;
