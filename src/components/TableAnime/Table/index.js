// == Import
import { useTable, useSortBy } from "react-table";
import { useMemo, useState } from "react";
import { Link } from 'react-router-dom';
import moment from "moment"

import RowItem from "./RowItem";
import HeaderItem from "./HeaderItem";


// == Composant
const Table = ({animes}) => {

  const data = useMemo(() => animes, [])
  
  const columns = useMemo(() => [ 
    { Header: "Titre", accessor: "attributes.canonicalTitle"},
    { Header: "Titre Japonais", accessor: "attributes.titles.ja_jp"},
    { Header: "Age recommandé", accessor: "attributes.ageRatingGuide"},
    { Header: "Date de sortie", accessor: d => moment(d.attributes.startDate).format("DD/MM/YYYY")},
    { Header: "Rang", accessor: "attributes.popularityRank"},
    { Header: " ", accessor: d => <Link to={`/anime/${d.id}`}>Voir les détails</Link>},
  ]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data:data}, useSortBy )


  return (

    <>
        <table {...getTableProps()}>
        <thead>
        {headerGroups.map(headerGroup => (
            <HeaderItem headerGroup={headerGroup} key={Date.now()}/>
        ))}
        </thead>
        <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row)
          return (
            <RowItem key={row.id} row={row} />
          )
        })}
        </tbody>
      </table> 
    </>
      
);
}

// == Export
export default Table;
