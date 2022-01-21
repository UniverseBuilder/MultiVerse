/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

export const Icon = ({ name, type, className, width, height }) => {
  const [iconPath, setIconPath] = useState('');
  useEffect(() => {
    if (name) {
      import(
        /* webpackChunkName: "custom-scss-chunk" */
        /* webpackMode: "lazy" */
        /* webpackPrefetch: true */
        /* webpackPreload: true */
        `@multiverses/verse-icon/icons/svg/${type}/${name}.svg`
      ).then(icon => {
        console.log(icon);
        setIconPath(icon.default);
      });
    }
  }, [name]);
  return <img src={iconPath} width={20} height={20} className={className} />;
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

Icon.defaultProps = {
  type: 'base',
  className: 'primary-icon',
  width: 24,
  height: 24,
};
