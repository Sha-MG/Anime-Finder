// == Import
// Externe
import { useTable } from "react-table";
import { useMemo } from "react";
import { Link } from 'react-router-dom';
import moment from "moment"
// Interne
import RowItem from "./RowItem";
import HeaderItem from "./HeaderItem";
import './styles.scss';

// == Composant
// anime contient toutes les données des animes a display
// fourni par TableAnime/index.js
const Table = ({animes}) => {
  
// Définition des colonnes du tableau en suivant les consignes de React-table
// La colonne Date de sortie est reformatée via moment.js
  const columns = useMemo(() => [ 
    { Header: "Titre", accessor: "attributes.canonicalTitle"},
    { Header: "Titre Japonais", accessor: "attributes.titles.ja_jp"},
    { Header: "Age recommandé", accessor: "attributes.ageRatingGuide"},
    { Header: "Date de sortie", accessor: d => moment(d.attributes.startDate).format("DD/MM/YYYY")},
    { Header: "Rang", accessor: "attributes.popularityRank"},
    { Header: " ", accessor: d => <Link to={`/anime/${d.id}`}>Voir les détails</Link>, width:100},
  ]);

// Déclaration de toutes les propriétées nécéssaires a React-table
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({columns, data: animes})

// Composant
  return (
    <>
      <table {...getTableProps()} className='table-container'>
        <thead>
        {headerGroups.map(headerGroup => (
            <HeaderItem headerGroup={headerGroup} key={Date.now()}/>
        ))}
        </thead>
        <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row)
          return (
            <RowItem key={(Date.now()*Math.random())} row={row} />
          )
        })}
        </tbody>
      </table> 
    </>
      
);
}

// == Export
export default Table;
