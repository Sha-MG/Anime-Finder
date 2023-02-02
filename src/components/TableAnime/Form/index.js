// == Import
import './styles.scss'
import {FiSearch} from 'react-icons/fi'

//  == Component
const Form = ({handleForm}) => {
  return(
    <div className='form-container'>
      <div className='form-container--search-input'>
        <FiSearch className="search-icon" size="24px"/>
        <input type='text' placeholder='Recherche'/>
      </div>
        <select onChange={handleForm} className='form-container--select form-container--select--year' >
            <option>Année</option>
            <option>2022</option>
            <option>2021</option>
            <option>2020</option>
            <option>2019</option>
            <option>2018</option>
        </select>
      <select className='form-container--select form-container--select--age'>
        <option>Age recommandé</option>
        <option>NSFW</option>
        <option>17+</option>
        <option>13</option>
        <option>Child</option>
      </select>

    </div>
  )

}

//  == Export
export default Form ;
