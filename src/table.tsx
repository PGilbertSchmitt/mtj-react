import React, { FunctionComponent as FC } from 'react';
import { Table as TableNode } from 'mtj-parser';

import { mapSubNodes } from './sub_node';

const Table: FC<{ node: TableNode }> = ({ node: { body, head } }) => (
  <table className='marked-table'>
    <thead>
      <tr className='marked-header-row'>
        {head.columns.map((cell, colIndex) => (
          <th key={colIndex} align={cell.align}>
            {mapSubNodes(cell.parts)}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {body.map((row, rowIndex) => (
        <tr key={rowIndex}>
          {row.columns.map((cell, colIndex) => (
            <td key={colIndex} align={cell.align}>
              {mapSubNodes(cell.parts)}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

export default Table;
