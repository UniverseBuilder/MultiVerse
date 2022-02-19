import React from 'react';

import PropTypes from 'prop-types';

import { useModel } from '../../utility/hooks/useModel';
import { useForm } from '../../utility/redux/slices/forms/formSlice';
import { Form } from '../Form';
import { Icon } from '../Icon';

const PowerFilter = ({ options, resetData, ...props }) => {
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
  };

  const handleClose = () => {
    resetData();
  };

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
                defaultValue="includes"
                model="grid.filter.operator"
                options={[
                  'equals',
                  'greater than',
                  'lesser than',
                  'starts With',
                  'ends With',
                  'includes',
                  'not equals',
                ]}
              />
            </div>
            <div className="flex-30">
              <Form.Input model="grid.filter.input" />
            </div>
            <div className="flex-5">
              <div className="text-right m-t-8">
                <Icon
                  className="primary-icon flex-100"
                  name="plus"
                  onClick={handleAdd}
                />
              </div>
            </div>
            <div className="flex-5">
              <div className="text-right m-t-4">
                <Icon
                  className="primary-icon flex-100"
                  name="close"
                  onClick={handleClose}
                />
              </div>
            </div>
          </When>
          <Otherwise>
            <div className="text-right m-t-12">
              <Icon
                className="primary-icon flex-100"
                name="filter"
                onClick={handleClick}
              />
            </div>
          </Otherwise>
        </Choose>
      </div>
    </React.Fragment>
  );
};

PowerFilter.propTypes = {
  resetData: PropTypes.func.isRequired,
  options: PropTypes.array,
};

PowerFilter.defaultProps = {
  options: [],
};

export default PowerFilter;
