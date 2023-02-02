const HeaderItem = ({headerGroup}) => (
  <tr {...headerGroup.getHeaderGroupProps()}>
  {headerGroup.headers.map(column => (
  <th {...column.getHeaderProps({
                  style: { minWidth: column.minWidth, width: column.width },
                })} >
  {column.render('Header')}
  </th>
  ))}
  </tr>
  );

  export default HeaderItem ;
