// Import 
// Interne
import './styles.scss'
import Card from './Card';
// Externes
import { Link } from 'react-router-dom';
import { TbArrowBackUp } from 'react-icons/tb';


// Composant Favorites, 
// favorites est le tableau qui contient tous les anims indiqués en fav
// Par l'utilisateur, déclaré et gérér dans App/index.js
// toggleFavorites est la fonction qui gère l'ajout ou le retrait
// d'un anim du tableau favorites, déclaré dans App/index.js
const Favorites = ({favorites, toggleFavorites}) => {

  return(
    <div className='favorite-page'>
      <div className='favorite-page--title'>
        <h1>Mes favoris</h1>
        <Link to='/' className='favorite-page--title--button'> <TbArrowBackUp size={'30px'}/> Retour au catalogue</Link>
      </div>
      <div className='anime-card--container'>
        {
          favorites.map((anime) => (
            <Card
              key={anime.data.id}
              anime={anime}
              toggleFavorites={toggleFavorites}
            />
          ))
        }
        { favorites.length === 0 &&
            <p className='anime-card--message'> Tu n'as pas encore de favoris ! </p>
        }
      </div>
    </div>
  )

}

export default Favorites
