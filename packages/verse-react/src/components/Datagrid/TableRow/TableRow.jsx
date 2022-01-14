import React from 'react';
import PropTypes from 'prop-types';

export const TableRow = ({ fields, data }) => {
  return (
    <tbody>
      <For each="rowData" of={data} index="rowIndex">
        <tr key={`row_${rowIndex}`}>
          <For each="field" of={fields} index="cellIndex">
            <td key={`cell_${cellIndex}`}>{rowData[field.dataKey]}</td>
          </For>
        </tr>
      </For>
    </tbody>
  );
};

TableRow.propTypes = {
  fields: PropTypes.array,
  data: PropTypes.array,
};
