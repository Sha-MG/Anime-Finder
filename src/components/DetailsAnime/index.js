// == Import
// Externes
import axios from "axios";
import { useState, useEffect, React } from "react";
import { Link, useParams } from "react-router-dom";

// Internes
import './styles.scss'
import {TbArrowBackUp, TbHeart} from 'react-icons/tb'
import {AiFillHeart} from 'react-icons/ai'
import Loader from "../Loader";


// == Composant
const DetailsAnimes = ({toggleFavorites, favorites}) => {

// Déclarations nécessaires dans le state, 
// Anime correspond aux données de l'API
// loadingData est pour l'affichage du loader,
// toggled est pour l'affichage du boutton "Ajouter aux favoris" selon son état.
  const params = useParams();
  const [anime, setAnime] = useState({});
  const [loadingData, setLoadingData] = useState(true);
  const [toggled, setToggled] = useState(favorites.includes(params.id))

// fetchAnimes récupère les données de l'anime en fonction de l'id indiqué dans l'URL
  useEffect(() => {

    const fetchAnimes = async () => {
      const response = await axios.get(`https://kitsu.io/api/edge/anime/${params.id}`);
      setAnime(response.data);
      setLoadingData(false);
    };

    fetchAnimes();
  }, []);

  return (
    <div className='details-anime--container'>

{/* Temps qu'on a pas fetch les data de l'Anime dans l'API, on affiche le loader */}
    {loadingData ? 
      (
        <Loader/>
      ) : (
        <>
          <Link to="/" className='details-anime--back'> <TbArrowBackUp size={'30px'}/> Retourner au catalogue</Link>

          {anime.data.attributes.coverImage 
            ? <div style={{backgroundImage: `url(${anime.data.attributes.coverImage.large})`}}  className='details-anime--cover'></div>
            : <div className='details-anime--cover'></div> 
          }
          <div style={{backgroundImage: `url(${anime.data.attributes.posterImage.medium})`}}  className='details-anime--poster'></div>

          <div className='details-anime--desc'>
            <div className='details-anime--desc--title-container'>
              <h1>{anime.data.attributes.canonicalTitle}</h1>
              <span> </span>
              <p>Rang {anime.data.attributes.ratingRank}</p>
            </div>
{/* Bouton avec affichage conditonnel selon si l'anime fait partis des favoris.
Au clic, toggle du favoris et de l'état du bouton */}
            <button 
            className={toggled?'details-anime--desc--fav-toggled' : 'details-anime--desc--fav' } 
            onClick={(e)=>(toggleFavorites(e, anime), setToggled(!toggled))} 
            value={params.id}>
            {toggled ? 'Retirer des' : 'Ajouter aux'} favoris {toggled ? <AiFillHeart size={'24px'} color={'white'}/> : <TbHeart size={'24px'}/> }
            </button>
            <p>{anime.data.attributes.synopsis}</p>
          </div>

          <Link className='details-anime--fav' to='/favorites'>Voir les favoris <AiFillHeart size={'24px'} color={'white'}/></Link>
        </>
      )
    }
    </div>
);
}

// == Export
export default DetailsAnimes;
