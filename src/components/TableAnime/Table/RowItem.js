const RowItem = ({row}) => {
  return (
    <tr {...row.getRowProps()} className='table-container--row'>
      {row.cells.map(cell => {
        return (
          <td {...cell.getCellProps({
                      style: {
                        minWidth: cell.column.minWidth,
                        width: cell.column.width,
                      },
                    }) } >
            {cell.render('Cell')}
          </td>
        )
      })}
    </tr>
  );
  
}

export default RowItem
