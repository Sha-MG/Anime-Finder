const HeaderItem = ({headerGroup}) => (

  <tr {...headerGroup.getHeaderGroupProps()}>

  {headerGroup.headers.map(column => (
  <th {...column.getHeaderProps(column.getSortByToggleProps())} >
  {column.render('Header')}
    <span>
      {column.isSorted
      ? column.isSortedDesc
        ? ' 🔽'
        : ' 🔼'
      : ''}
    </span>
  </th>
  ))}
  </tr>
  );

  export default HeaderItem ;
