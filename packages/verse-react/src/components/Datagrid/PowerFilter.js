import React from 'react';

import PropTypes from 'prop-types';

import { useModel } from '../../utility/hooks/useModel';
import { useForm } from '../../utility/redux/slices/forms/formSlice';
import { Form } from '../Form';
import IconClose from '../Icon/IconClose';
import IconFilter from '../Icon/IconFilter';
import IconPlus from '../Icon/IconPlus';

const stringOptions = [
  'equals',
  'greater than',
  'lesser than',
  'starts With',
  'ends With',
  'includes',
  'not equals',
];
const numOptions = ['equals', 'greater than', 'lesser than', 'not equals'];

const PowerFilter = ({ options, addFilter, resetData, ...props }) => {
  const { set } = useForm();
  const { isFilterEnabled, filterParams = {}, filter = {} } = useModel('grid');
  const { column, input, operator } = filter;

  const handleClick = () => {
    set({ model: 'grid.isFilterEnabled', value: !isFilterEnabled });
  };

  const handleAdd = () => {
    const newObj = {
      ...filterParams,
      [column.dataKey]: { column, operator, input },
    };
    set({ model: 'grid.filterParams', value: newObj });
    addFilter(newObj);
  };

  const handleClose = () => {
    handleClick();
    resetData();
  };

  const operatorOptions =
    column?.dataType === 'Number' ? numOptions : stringOptions;

  return (
    <React.Fragment>
      <div className="flex-center-end">
        <Choose>
          <When condition={isFilterEnabled}>
            <div className="flex-35">
              <Form.Select
                defaultValue={options[0]}
                model="grid.filter.column"
                options={options}
                {...props}
              />
            </div>
            <div className="flex-25">
              <Form.Select
                defaultValue={operatorOptions[0]}
                model="grid.filter.operator"
                options={operatorOptions}
              />
            </div>
            <div className="flex-30">
              <Form.Input model="grid.filter.input" />
            </div>
            <div className="flex-5">
              <div className="text-right m-t-8">
                <IconPlus onClick={handleAdd} />
              </div>
            </div>
            <div className="flex-5">
              <div className="text-right m-t-4">
                <IconClose onClick={handleClose} />
              </div>
            </div>
          </When>
          <Otherwise>
            <div className="text-right m-t-12">
              <IconFilter onClick={handleClick} />
            </div>
          </Otherwise>
        </Choose>
      </div>
    </React.Fragment>
  );
};

PowerFilter.propTypes = {
  resetData: PropTypes.func.isRequired,
  addFilter: PropTypes.func,
  options: PropTypes.array,
};

PowerFilter.defaultProps = {
  addFilter: () => null,
  options: [],
};

export default PowerFilter;
