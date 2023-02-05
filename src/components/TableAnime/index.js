// == Import
import axios from "axios";
import { useState, useEffect, React, useMemo } from "react";
import Form from "./Form";
import Table from "./Table";
import './styles.scss';
import {AiFillHeart} from 'react-icons/ai';
import Loader from "../Loader";
import { Link } from "react-router-dom";
import {HiArrowUturnLeft, HiArrowUturnRight} from 'react-icons/hi2'

// == Composant
const TableAnime = () => {

  const [animes, setAnimes] = useState({});
  const [loadingData, setLoadingData] = useState(true);
  const [endpoint, setEndpoint] = useState('/anime?page[limit]=10&page[offset]=0')
  const [index, setIndex] = useState(0)

  const getAnimes = async () => {
    const response = await axios.get(`https://kitsu.io/api/edge${endpoint}`);
    setAnimes(response.data);
    setLoadingData(false);
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
  
  const handlePage = async (event, instruction, link) => {
    setLoadingData(true)
    let newIndex = index ;

    switch (instruction) {
      case 'prev' : 
        newIndex = newIndex-1;
        setIndex(newIndex)
        const prevResponse = await getAnimeFromPage(newIndex*10);
        setAnimes(prevResponse);
      break;

      case 'next' : 
        newIndex = newIndex+1;
        setIndex(index+1)
        const nextResponse = await getAnimeFromPage(newIndex*10);
        setAnimes(nextResponse);
      break;

      case 'first' :
        newIndex = 0;
        setIndex(0)
        const firstResponse = await getAnimeFromPage(0);
        setAnimes(firstResponse);
      break;

      case 'last' :
        let lastIndex = parseInt(link.split('=')[2])/10
        setIndex(lastIndex)
        const lastResponse = await getAnimeFromPage(link.split('=')[2]);
        console.log(lastResponse)
        setAnimes(lastResponse);
      break;
    }
    setLoadingData(false)
  }

  const getAnimeFromPage = async (offset) => {
    console.log(offset)
    const response = await axios.get(`https://kitsu.io/api/edge/anime?page[limit]=10&page[offset]=${offset}`);
    console.log(response.data)
    return(response.data)
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

            <div className='tableAnime-container--pagination'>
              <p className="tableAnime-container--arrow" onClick={e => handlePage(e, 'first', animes.links.first)}>First</p>
              <HiArrowUturnRight className="tableAnime-container--arrow" size="30px" onClick={e => handlePage(e, 'next')}/>
              <HiArrowUturnLeft className="tableAnime-container--arrow" size="30px" onClick={e => handlePage(e, 'prev')}/>
              <p className="tableAnime-container--arrow" onClick={e => handlePage(e, 'last', animes.links.last)}>Last</p>
            </div>
            
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
