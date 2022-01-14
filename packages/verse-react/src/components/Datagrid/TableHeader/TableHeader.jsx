import React from 'react';
import PropTypes from 'prop-types';

export const TableHeader = ({ fields }) => {
  return (
    <thead>
      <tr>
        <For each="field" of={fields} index="idx">
          <th key={`header_${idx}`}>{field.label}</th>
        </For>
      </tr>
    </thead>
  );
};

TableHeader.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
