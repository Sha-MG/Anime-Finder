
const Form = ({setEndpoint}) => {
  return(
    <>
      <input type='text' placeholder='Recherche'/>
      <select onChange={() => (setEndpoint('/anime?filter[startDate]=2020'))}>
        <option>Année</option>
        <option>2022</option>
        <option>2021</option>
        <option>2020</option>
        <option>2019</option>
        <option>2018</option>
      </select>
      <select>
        <option>Age recommandé</option>
        <option>NSFW</option>
        <option>17+</option>
        <option>13</option>
        <option>Child</option>
      </select>

    </>
  )

}

export default Form ;
