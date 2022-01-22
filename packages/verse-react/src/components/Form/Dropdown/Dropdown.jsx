import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import { useModel } from 'utility/hooks';
import { useForm } from 'utility/redux/slices/forms/formSlice';


import { Input } from '../Input';

export const Dropdown = ({ model, options, onChange, defaultValue }) => {
  const [show, setShow] = useState(false);
  const value = useModel(model);
  const { set } = useForm();

  const handleOptions = () => {
    setShow(!show);
  };
  const handleChange = e => {
    set({ model, value: [e], overWrite: true });
    onChange();
  };

  useEffect(() => {
    if (defaultValue && value !== defaultValue) {
      handleChange(defaultValue);
    }
  }, [defaultValue]);

  return (
    <div className="dropdown">
      <div className="dropdown-select">
        <Input
          model={model}
          type="search"
          placeholder="Select"
          onFocus={handleOptions}
          onBlur={handleOptions}
          autoComplete="off"
          readonly={true}
        />
      </div>
      <If condition={show}>
        <div className="dropdown-content">
          <For each="option" of={options} index="idx">
            <div
              key={`option_${idx}`}
              className={value.includes(option) ? 'secondary' : undefined}
              tabIndex="0"
              onMouseDown={e => e.preventDefault()}
              onClick={() => handleChange(option)}
            >
              {option}
            </div>
          </For>
        </div>
      </If>
    </div>
  );
};

Dropdown.propTypes = {
  model: PropTypes.string.isRequired,
  options: PropTypes.array,
  onChange: PropTypes.func,
  defaultValue: PropTypes.any,
};

Dropdown.defaultProps = {
  options: [],
  defaultValue: '',
  onChange: () => null,
};
