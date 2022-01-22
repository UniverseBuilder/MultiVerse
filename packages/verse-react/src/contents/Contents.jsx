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
import { ModalDocs } from './ModalDocs';
import { OverlayDocs } from './OverlayDocs';
import { RenderHTMLDocs } from './RenderHTMLDocs';
import { RichTextEditorDocs } from './RichTextEditorDocs';
import { TabsDocs } from './TabsDocs';

export const Contents = () => {
  return (
    <Routes>
      <Route path="/" element={<AccordionDocs />} />
      <Route path="/Accordion" element={<AccordionDocs />} />
      <Route path="/Alert" element={<AlertDocs />} />
      <Route path="/Badge" element={<BadgeDocs />} />
      <Route path="/Badge" element={<BadgeDocs />} />
      <Route path="/Button" element={<ButtonDocs />} />
      <Route path="/ButtonGroup" element={<ButtonGroupDocs />} />
      <Route path="/Card" element={<CardDocs />} />
      <Route path="/Carousel" element={<CarouselDocs />} />
      <Route path="/Datagrid" element={<DatagridDocs />} />
      <Route path="/Form" element={<FormDocs />} />
      <Route path="/Icons" element={<IconsDocs />} />
      <Route path="/Image" element={<ImageDocs />} />
      <Route path="/List" element={<ListDocs />} />
      <Route path="/Modal" element={<ModalDocs />} />
      <Route path="/Overlay" element={<OverlayDocs />} />
      <Route path="/RenderHTML" element={<RenderHTMLDocs />} />
      <Route path="/RichTextEditor" element={<RichTextEditorDocs />} />
      <Route path="/Tabs" element={<TabsDocs />} />
    </Routes>
  );
};
