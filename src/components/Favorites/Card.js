import './styles.scss'

const Card = ({anime, toggleFavorites}) => {
  console.log(anime)

  return(
    <>
    <div className='cards--cardsboard' >
        <div className='cards--cardsboard--card'>
{/* Les élements au dos de la carte */}
        <div className="cards--cardsboard--card__side cards--cardsboard--card__side--back">
{/* Titre du dos de la carte avec la ligne en biais */}
          <div className="cards--cardsboard--card__cover">
            <h4 className="cards--cardsboard--card__heading">
            <span className="cards--cardsboard--card__heading-span">{anime.data.attributes.canonicalTitle}</span>
            </h4>
          </div>
{/* Listing des caractéristiques du projet */}
          <div className="cards--cardsboard--card__details">
            <ul>
              <li>Rang {anime.data.attributes.popularityRank}</li>
              <li>{anime.data.attributes.description}</li>
              <li>{anime.data.attributes.ageRatingGuide}</li>
              <li className='cards--cardsboard--card__details--link' onClick={(e)=>(toggleFavorites(e, anime))}>Retirer des favoris</li>  
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


export default Card;
