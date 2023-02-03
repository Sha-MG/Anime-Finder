// == Import
import './styles.scss'
import {FiSearch} from 'react-icons/fi'
import Select from 'react-select'
import customStyles from '../../../styles/selectStyles'
import optionsYears from '../../../data/optionsYears'
import optionsAge from '../../../data/optionsAge'
import { useState, useRef, useEffect } from 'react'
//  == Component
const Form = ({handleForm}) => {

  const handleChangeYear = (selectedOption) => {
    handleForm(selectedOption, 'seasonYear');
  };
  
  const handleChangeAge = (selectedOption) => {
    handleForm(selectedOption, 'ageRating');
  };

  const handleInputSearch = (e) => {

    setSearchValue(e.target.value)

    setTimeout(()=> {
      handleForm(e.target.value)
    }, 400)

  }

  const [searchValue, setSearchValue] = useState("");


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
