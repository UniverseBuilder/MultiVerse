import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "hooks/useForm";
import { FAIcon } from "../../../Icons";
import { Input } from "../Input";
import { valueChange } from "features/form/formSlice";
import PropTypes from "prop-types";
import "../../Form.scss";

export const SelectPaginator = ({
  id,
  labelName,
  model,
  options,
  selectedValue,
  onChange,
  placeholder,
  disabled,
  defaultValue,
  labelKey,
  valueKey,
  formClass,
  pageNo,
  totalPages,
  onPageChange,
  loading,
}) => {
  const value = useForm(model);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const option = valueKey
      ? options.find((item) => item[valueKey] === e.target.value)
      : e.target.value;
    dispatch(valueChange({ model, value: option }));
    onChange(e.target.value);
  };
  useEffect(() => {
    if (defaultValue) {
      dispatch(valueChange({ model, value: defaultValue }));
    }
  }, [defaultValue]);

  const handlePrevious = () => {
    console.log(pageNo);
    if (pageNo !== 1) onPageChange(pageNo - 1);
  };

  const handleNext = () => {
    console.log(pageNo, totalPages, onPageChange);
    if (pageNo + 1 <= totalPages) onPageChange(pageNo + 1);
  };

  return (
    <div className={formClass}>
      <div htmlFor={labelName} className="formLabelClass pb-1">
        {labelName}
      </div>
      <div className="flex-container flex-align-center bg-light bord bord-rad-4">
        <div className="nFlex-15">
          <Choose>
            <When condition={loading}>
              <div className="textCenter">
                <FAIcon className="fa fa-refresh icon-color c-pointer textCenter spinner-icon" />
              </div>
            </When>
            <Otherwise>
              <Input
                model={`${model}.page`}
                defaultValue={pageNo}
                formClass="no-class"
              />
            </Otherwise>
          </Choose>
        </div>
        <div className="nFlex-65">
          <select
            className="form-control bord-none"
            id={id}
            value={valueKey ? value[valueKey] : value}
            onChange={handleChange}
            placeholder={placeholder}
            disabled={disabled}
          >
            <option value="" key="">
              {placeholder}
            </option>
            <Choose>
              <When condition={options[0]?.[labelKey]}>
                {options.map((option) => (
                  <option value={option[valueKey]} key={option[valueKey]}>
                    {option[labelKey]}
                  </option>
                ))}
              </When>
              <Otherwise>
                {options.map((option) => (
                  <option value={option} key={option}>
                    {option}
                  </option>
                ))}
              </Otherwise>
            </Choose>
          </select>
        </div>
        <div className="nFlex-10" onClick={handlePrevious}>
          <div className="textCenter">
            <FAIcon className="fa fa-arrow-left icon-color c-pointer" />
          </div>
        </div>
        <div className="nFlex-10" onClick={handleNext}>
          <div className="textCenter">
            <FAIcon className="fa fa-arrow-right icon-color c-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

SelectPaginator.propTypes = {
  id: PropTypes.string,
  labelName: PropTypes.string,
  model: PropTypes.string,
  options: PropTypes.any,
  selectedValue: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  labelKey: PropTypes.string,
  valueKey: PropTypes.string,
  formClass: PropTypes.string,
  pageNo: PropTypes.number,
  totalPages: PropTypes.number,
  onPageChange: PropTypes.func,
  loading: PropTypes.bool,
};

SelectPaginator.defaultProps = {
  options: [],
  model: null,
  disabled: false,
  onChange: () => null,
  formClass: "form-group",
  pageNo: 1,
  totalPages: 1,
  onPageChange: () => null,
  loading: false,
};
