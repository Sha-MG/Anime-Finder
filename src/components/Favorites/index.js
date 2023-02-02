import './styles.scss'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../Loader';
import { Link } from 'react-router-dom';


const Favorites = ({favorites}) => {

  const url = () => {

    console.log(favorites)

    if(favorites){
      let newTruc = 'id='+favorites.join('&id=')
      setEndpoint(newTruc)
    }
    
  }
  const [endpoint, setEndpoint] = useState('/anime?page[limit]=10&page[offset]=0')
  const [animes, setAnimes]= useState();
  const [loadingData, setLoadingData] = useState(true);

  const getAnimes = async () => {
    const response = await axios.get(`https://kitsu.io/api/edge/anime/1`);
    setAnimes(response.data);
    setLoadingData(false);
    console.log(response.data)
  }

  useEffect(() => {
    url()
    getAnimes()
    }, []);

    console.log(animes)
  return(
    <div >
      <h1>Favoris</h1>
      {loadingData ? 
        (
          <Loader/>
        ) : (
        <div>
            {
              animes.map((anime) => { return (<p>{anime.attributes.canonicalTitle}</p> ) 
            })
            }
        </div>
        )
      }
      <Link to='/'>Retour</Link>
    </div>
  )

}

export default Favorites
