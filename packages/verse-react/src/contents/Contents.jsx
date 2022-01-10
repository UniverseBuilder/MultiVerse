import React from 'react';
import { ButtonDocs } from './ButtonDocs';
import { Route, Routes } from 'react-router-dom';

export const Contents = () => {
  return (
    <Routes>
      <Route path="/" element={<ButtonDocs />} />
    </Routes>
  );
};
