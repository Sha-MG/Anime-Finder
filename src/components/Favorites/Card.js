// Import
import './styles.scss'
import {AiFillHeart} from 'react-icons/ai'

// Composant de chaque carte "Favoris" sur la page Favorites.
// anime contient toutes les infos de l'anime choisis
// toggleFavorites est la fonction qui modifie le tableau des favoris
// déclarée dans App/index.js
const Card = ({anime, toggleFavorites}) => {

  return(
    <>
    <div className='cards--cardsboard' >
        <div className='cards--cardsboard--card'>
{/* Les élements au dos de la carte */}
        <div className="cards--cardsboard--card__side cards--cardsboard--card__side--back">
          <div className="cards--cardsboard--card__cover">
            <h4 className="cards--cardsboard--card__heading">
            <span className="cards--cardsboard--card__heading-span">{anime.data.attributes.canonicalTitle}</span>
            </h4>
          </div>
{/* Listing des détails de l'Anime */}
          <div className="cards--cardsboard--card__details">
            <ul>
              <li>Rang {anime.data.attributes.popularityRank}</li>
              <li>{anime.data.attributes.description}</li>
              <li>
              {anime.data.attributes.ageRatingGuide
                ? <p>{anime.data.attributes.ageRatingGuide}</p>
                : <p>Pas d'âge indiqué</p>
              }
              </li>
              <li className='cards--cardsboard--card__details--link' onClick={(e)=>(toggleFavorites(e, anime))}>Retirer des favoris <AiFillHeart size='24px'/></li>  
            </ul>
          </div>
        </div>
{/* Les élements du devant de la carte */}
        <div style={{backgroundImage:`url(${anime.data.attributes.posterImage.small})`}} className='cards--cardsboard--card__side--front cards--cardsboard--card__side'>
        </div>
      </div>
    </div>
    </>
  )
}

// Export
export default Card;
