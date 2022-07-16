import React from 'react';

import PropTypes from 'prop-types';

import { useModel } from '../../../utility/hooks';
import { useForm } from '../../../utility/redux/slices/forms/formSlice';
import { TextOverflow } from '../../TextOverflow';

const readFile = async (file, fileNo, format) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const fileName = file.name.substring(0, file.name.lastIndexOf('.'));
      if (format === 'JSON') {
        resolve({ fileName, fileData: JSON.parse(reader.result) });
      } else {
        resolve({ fileName, fileData: reader.result });
      }
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

const getFiles = async (files, format) => {
  const promises = [];
  for (let i = 0; i < files.length; i++) {
    const uploadedFile = await readFile(files[i], format);
    promises.push(uploadedFile);
  }
  return Promise.all(promises);
};

export const UploadFile = ({
  model,
  format,
  className,
  multiple,
  onChange,
}) => {
  const value = useModel(model);
  const { set } = useForm();

  const handleChange = async e => {
    const { files } = e.target;
    if (files.length) {
      const fileData = await getFiles(files, format);
      set({ model: `${model}.data`, value: fileData });
      set({
        model: `${model}.label`,
        value: multiple ? `${fileData.length} Chosen` : fileData[0].fileName,
      });
      onChange(e);
    }
  };

  return (
    <div className="p-t-12 p-b-12">
      <label className="btn-label secondary" htmlFor="filePicker">
        <b>Choose File{multiple ? 's' : ''}</b>
      </label>
      <TextOverflow className="m-l-4">
        <b>
          <i>{value.label}</i>
        </b>
      </TextOverflow>
      <input
        className={className}
        id="filePicker"
        model={model}
        multiple
        onChange={handleChange}
        style={{ display: 'none' }}
        type="file"
      />
    </div>
  );
};

UploadFile.propTypes = {
  model: PropTypes.string.isRequired,
  className: PropTypes.string,
  format: PropTypes.string,
  multiple: PropTypes.bool,
  onChange: PropTypes.func,
};

UploadFile.defaultProps = {
  className: 'form-input secondary-form',
  format: '',
  multiple: true,
  onChange: () => null,
};
