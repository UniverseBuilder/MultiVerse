import React from 'react';

import PropTypes from 'prop-types';

import { useModel } from '../../../utility/hooks';
import { useForm } from '../../../utility/redux/slices/forms/formSlice';
import { TextOverflow } from '../../TextOverflow';

const readFile = async (file, fileNo, format) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const splitPaths = file.webkitRelativePath.split('/');
      const filePath = splitPaths.slice(0, splitPaths.length - 1).join('.');
      if (format === 'JSON') {
        resolve({ filePath, fileData: JSON.parse(reader.result) });
      } else {
        resolve({ filePath, fileData: reader.result });
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

export const UploadFolder = ({ model, format, className, onChange }) => {
  const value = useModel(model);
  const { set } = useForm();

  const handleChange = async e => {
    const { files } = e.target;
    if (files.length) {
      const fileData = await getFiles(files, format);
      const folderPath = files[0].webkitRelativePath.split('/');
      set({ model: `${model}.details`, value: fileData });
      set({
        model: `${model}.label`,
        value: folderPath[0],
      });
      onChange(e);
    }
  };

  return (
    <div className="p-t-12 p-b-12">
      <label className="btn-label secondary" htmlFor="folderPicker">
        <b>Choose Folder</b>
      </label>
      <TextOverflow className="m-l-8">
        <b>
          <i>{value.label}</i>
        </b>
      </TextOverflow>
      <input
        className={className}
        directory=""
        id="folderPicker"
        model={model}
        multiple
        onChange={handleChange}
        style={{ display: 'none' }}
        type="file"
        webkitdirectory=""
      />
    </div>
  );
};

UploadFolder.propTypes = {
  model: PropTypes.string.isRequired,
  className: PropTypes.string,
  format: PropTypes.string,
  onChange: PropTypes.func,
};

UploadFolder.defaultProps = {
  className: 'form-input secondary-form',
  format: '',
  onChange: () => null,
};
