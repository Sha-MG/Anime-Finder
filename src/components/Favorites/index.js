import './styles.scss'
import { Link } from 'react-router-dom';
import Card from './Card';
import { TbArrowBackUp } from 'react-icons/tb';

const Favorites = ({favorites}) => {

  console.log(favorites.length)
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
