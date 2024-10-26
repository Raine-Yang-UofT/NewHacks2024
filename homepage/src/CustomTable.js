import React from 'react';
import './CustomTable.css';

function CustomTable() {
  return (
    <table>
      <tbody>
        <tr>
          <td className="cell-1"></td>
            <ul>
                <li>Object 1</li>
                <li>Object 2</li>
                <li>Object 3</li>
                <li>Object 4</li>
            </ul>
          <td className="cell-2"></td>
        </tr>
      </tbody>
    </table>
  );
}

export default CustomTable;
