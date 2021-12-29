import React from "react";

export const Imager = ({ className, imageSrc, imageAlt, style }) => {
  return (
    <img src={imageSrc} alt={imageAlt} className={className} style={style} />
  );
};
