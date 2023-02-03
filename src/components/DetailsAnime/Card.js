import './styles.scss'

const Card = ({anime}) => {
  console.log(anime)

  return(
    <div style={{backgroundImage: `url(${anime.data.attributes.posterImage.small})`}} className='anime-card--card'>
      <p>{anime.data.attributes.canonicalTitle}</p>
    </div>
  )
}


export default Card;
