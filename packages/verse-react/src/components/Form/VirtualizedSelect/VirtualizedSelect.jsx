import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import createFilterOptions from 'react-select-fast-filter-options';
import Select from 'react-virtualized-select'; // or from 'react-select'

import { useModel } from '../../../utility/hooks';
import { useForm } from '../../../utility/redux/slices/forms/formSlice';

import 'react-select/dist/react-select.css';
import 'react-virtualized-select/styles.css';
export const VirtualizedSelect = ({ model, onChange, options, ...props }) => {
  const [filterOptions, setFilterOptions] = useState([]);
  const value = useModel(model);
  const { set } = useForm();

  const handleChange = e => {
    console.log(e);
    set({ model, value: e });
    onChange(e);
  };

  useEffect(() => {
    setFilterOptions(createFilterOptions({ options }));
  }, [options]);

  return (
    <Select
      filterOptions={filterOptions}
      onChange={handleChange}
      options={options}
      value={value}
      {...props}
    />
  );
};

VirtualizedSelect.propTypes = {
  model: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  options: PropTypes.array,
};

VirtualizedSelect.defaultProps = {
  onChange: () => null,
  options: [],
};
