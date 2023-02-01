// == Import
import axios from "axios";
import { useState, useEffect, React } from "react";
import { Link, useParams } from "react-router-dom";

// == Composant
const DetailsAnimes = () => {

  const [anime, setAnime] = useState({});
  const [loadingData, setLoadingData] = useState(true);
  const params = useParams();

  useEffect(() => {
    const fetchAnimes = async () => {
      const response = await axios.get(`https://kitsu.io/api/edge/anime/${params.id}`);
      setAnime(response.data);
      setLoadingData(false);
    };
    fetchAnimes();
  }, []);

  return (
    <div>
    {loadingData ? 
      (
        <p>Loading Please wait...</p>
      ) : (
        <>
          <Link to="/">Retourner au catalogue</Link>
          <p>{anime.data.attributes.canonicalTitle}</p>
          <p>{anime.data.attributes.tank}</p>
          {anime.data.attributes.coverImage 
            ? <img src={anime.data.attributes.coverImage.large}/> 
            : <div> Coucou </div> 
          }
          <img src={anime.data.attributes.posterImage.medium}/>
        </>
      )
    }
    </div>
);
}

// == Export
export default DetailsAnimes;
