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
  return (
    <img className={className} height={height} src={iconPath} width={width} />
  );
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  height: PropTypes.number,
  type: PropTypes.string,
  width: PropTypes.number,
};

Icon.defaultProps = {
  className: 'primary-icon',
  height: 24,
  type: 'base',
  width: 24,
};
