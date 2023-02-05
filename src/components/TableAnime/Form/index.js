// == Import
// Interne
import './styles.scss'
import customStyles from '../../../styles/selectStyles'
import optionsYears from '../../../data/optionsYears'
import optionsAge from '../../../data/optionsAge'
// Externe
import { useState} from 'react'
import {FiSearch} from 'react-icons/fi'
import Select from 'react-select'

//  == Component
const Form = ({handleForm}) => {

// handleChangeYear & handleChangeAge renvoient à handleForm l'option
// séléctionnée ainsi qu'une valeur qui défini le champs à chercher
  const handleChangeYear = (selectedOption) => {
    handleForm(selectedOption, 'seasonYear');
  };
  
  const handleChangeAge = (selectedOption) => {
    handleForm(selectedOption, 'ageRating');
  };

// Défini pour le champs contrôlé de recherche
const [searchValue, setSearchValue] = useState("");

// Fonction qui contrôle l'input et déclanche handleForm après 
// un certain délais pour éviter les surcharge
  const handleInputSearch = (e) => {

    setSearchValue(e.target.value)

    setTimeout(()=> {
      handleForm(e.target.value)
    }, 400)

  }


// Composant
// Utilisation de React-Select pour les select
// Afin de soulager le code :
// Les styles sont tous définis dans ../../styles/selectStyles.js
// Les options sont toutes définies dans ../../data
  return(
    <div className='form-container'>
      <div className='form-container--search-input'>
        <FiSearch className="search-icon" size="24px"/>
        <input type='text' placeholder='Recherche' value={searchValue} onChange={e => handleInputSearch(e)}/>
      </div>
        <Select 
        options={optionsYears}
        className="form-container--select form-container--select--year"
        classNamePrefix="form-container--select--option"
        placeholder='Année'
        styles={customStyles}
        onChange={handleChangeYear}
        isMulti
        />

        <Select 
        options={optionsAge}
        className="form-container--select"
        classNamePrefix="form-container--select--option"
        styles={customStyles}
        onChange={handleChangeAge}
        placeholder='Age recommandé'
        isMulti
        />

    </div>
  )
}

//  == Export
export default Form ;
