import React from 'react';

import { Route, Routes } from 'react-router-dom';

import { AccordionDocs } from './AccordionDocs';
import { AlertDocs } from './AlertDocs';
import { BadgeDocs } from './BadgeDocs';
import { ButtonDocs } from './ButtonDocs';
import { ButtonGroupDocs } from './ButtonGroupDocs';
import { CardDocs } from './CardDocs';
import { CarouselDocs } from './CarouselDocs';
import { DatagridDocs } from './DatagridDocs';
import { FormDocs } from './FormDocs';
import { IconsDocs } from './IconsDocs';
import { ImageDocs } from './ImageDocs';
import { ListDocs } from './ListDocs';
import { LoginDocs } from './LoginDocs';
import { ModalDocs } from './ModalDocs';
import { OverlayDocs } from './OverlayDocs';
import { RenderHTMLDocs } from './RenderHTMLDocs';
import { RichTextEditorDocs } from './RichTextEditorDocs';
import { TabsDocs } from './TabsDocs';

export const Contents = () => {
  return (
    <Routes>
      <Route element={<LoginDocs />} path="/" />
      <Route element={<AccordionDocs />} path="/Accordion" />
      <Route element={<AlertDocs />} path="/Alert" />
      <Route element={<BadgeDocs />} path="/Badge" />
      <Route element={<BadgeDocs />} path="/Badge" />
      <Route element={<ButtonDocs />} path="/Button" />
      <Route element={<ButtonGroupDocs />} path="/ButtonGroup" />
      <Route element={<CardDocs />} path="/Card" />
      <Route element={<CarouselDocs />} path="/Carousel" />
      <Route element={<DatagridDocs />} path="/Datagrid" />
      <Route element={<FormDocs />} path="/Form" />
      <Route element={<IconsDocs />} path="/Icons" />
      <Route element={<ImageDocs />} path="/Image" />
      <Route element={<ListDocs />} path="/List" />
      <Route element={<ModalDocs />} path="/Modal" />
      <Route element={<OverlayDocs />} path="/Overlay" />
      <Route element={<RenderHTMLDocs />} path="/RenderHTML" />
      <Route element={<RichTextEditorDocs />} path="/RichTextEditor" />
      <Route element={<TabsDocs />} path="/Tabs" />
    </Routes>
  );
};
