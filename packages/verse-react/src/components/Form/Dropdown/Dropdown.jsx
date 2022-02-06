import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import { useModel } from '../../../utility/hooks';
import { useForm } from '../../../utility/redux/slices/forms/formSlice';
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
          autoComplete="off"
          model={model}
          onBlur={handleOptions}
          onFocus={handleOptions}
          placeholder="Select"
          readonly={true}
          type="search"
        />
      </div>
      <If condition={show}>
        <div className="dropdown-content">
          <For each="option" index="idx" of={options}>
            <div
              className={value.includes(option) ? 'secondary' : undefined}
              key={`option_${idx}`}
              onClick={() => handleChange(option)}
              onMouseDown={e => e.preventDefault()}
              tabIndex="0"
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
  defaultValue: PropTypes.any,
  onChange: PropTypes.func,
  options: PropTypes.array,
};

Dropdown.defaultProps = {
  defaultValue: '',
  onChange: () => null,
  options: [],
};
