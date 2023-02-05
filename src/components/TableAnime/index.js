// == Import
// Externe
import axios from "axios";
import { useState, useEffect, React } from "react";
import {AiFillHeart} from 'react-icons/ai';
import { Link } from "react-router-dom";
import {HiArrowUturnLeft, HiArrowUturnRight} from 'react-icons/hi2'
// Interne
import './styles.scss';
import Form from "./Form";
import Table from "./Table";
import Loader from "../Loader";


// == Composant
const TableAnime = () => {

// loadingData sert à l'affichage du loader
// endpoint sert à setup des filtres et afficher les résultats en fonction
// index et lastPage sont la gestion de la pagination 
// et pour l'affichage conditionnel de la pagination
  const [loadingData, setLoadingData] = useState(true);
  const [animes, setAnimes] = useState({});
  const [endpoint, setEndpoint] = useState('/anime?page[limit]=10&page[offset]=0')
  const [index, setIndex] = useState(0);
  const [lastPage, setLastPage] = useState(10);

// Fonction qui contact l'API selon le endpoint renseigné
// Puis qui défini lastPage et animes selon la réponse
// Fini par setLoading a false pour ne plus afficher le loader
  const getAnimes = async () => {
    const response = await axios.get(`https://kitsu.io/api/edge${endpoint}`);
    setAnimes(response.data);
    let lastPage = (response.data.links.last.split('=')[2])/10
    setLastPage(lastPage)
    setLoadingData(false);
  }

// A chaque modification du endpoint on lance getAnimes,
// et donc on contact l'API.
  useEffect(() => {
    getAnimes()
    }, 
  [endpoint]);

// Fonction appellée à chaque fois qu'un filtre est défini par l'utilisateur. 
// selectedOption est une option de React-select qui correspond à tous les champs
// séléctionnés, leurs labels et leurs valeurs.
// type est défini directement sur chaque formulaire afin de renseigner quel
// select est concerné. En fonction, on enclanche le loader et on modifie 
// le endpoint qui va déclancher getAnimes() avec le nouveau endpoint.
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
  
// Fonction de gestion de la pagination. Appelée au clic sur un des éléments de pagination.
// instruction est défini sur les boutons directement
// selon l'instruction passée a la fonction on fait appelle a getAnimeFromPage
// avec comme param l'offset qu'on veux indiquer à l'API.
// link est fourni par l'API afin de connaitre la last page.
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
        setAnimes(lastResponse);
      break;
    }
    setLoadingData(false)
  }

// Fonction appellée par handlePage, appellée au clic sur un des
// élements de pagination. Contact l'API selon l'offset fourni par
// handlePage et retourne la réponse.
  const getAnimeFromPage = async (offset) => {
    const response = await axios.get(`https://kitsu.io/api/edge/anime?page[limit]=10&page[offset]=${offset}`);
    return(response.data)
  }

// Composant 
// Form correspond à la barre de recherche
// Loader est un ... loader :D Affiché pendant le fetch des données
// Table est le tableau composé de toutes les données
// La div en dessous de Table contient tous les éléments de pagination
// qui sont liés à des affichages conditionnels pour éviter d'afficher 
// les flèches si on est déjà à un extrême.

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
              { index != 0 &&
                <HiArrowUturnLeft className="tableAnime-container--arrow" size="30px" onClick={e => handlePage(e, 'prev')}/>
              }
              {index != lastPage &&
                <HiArrowUturnRight className="tableAnime-container--arrow" size="30px" onClick={e => handlePage(e, 'next')}/>
              }
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
