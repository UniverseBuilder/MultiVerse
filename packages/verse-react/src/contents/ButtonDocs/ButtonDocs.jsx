import React from 'react';
import { Button } from 'components/Button';

export const ButtonDocs = () => {
  return (
    <div>
      <div className="p-l-4">
        <b>Basic Button</b>
        <span className="m-x-16">
          <Button>Primary</Button>
        </span>
      </div>
      <div className="p-l-4">
        <b>Contextual Buttons</b>
        <Button className="btn primary m-x-16">Primary</Button>
        <Button className="btn secondary m-x-16">Secondary</Button>
        <Button className="btn success m-x-16">Success</Button>
        <Button className="btn warning m-x-16">Warning</Button>
        <Button className="btn error m-x-16">Error</Button>
        <Button className="btn info m-x-16">Info</Button>
        <Button className="btn link m-x-16">Link</Button>
      </div>
      <div className="p-l-4">
        <b>Flat Contextual Buttons</b>
        <Button className="btn-flat primary m-x-16">Primary</Button>
        <Button className="btn-flat secondary m-x-16">Secondary</Button>
        <Button className="btn-flat success m-x-16">Success</Button>
        <Button className="btn-flat warning m-x-16">Warning</Button>
        <Button className="btn-flat error m-x-16">Error</Button>
        <Button className="btn-flat info m-x-16">Info</Button>
        <Button className="btn-flat link m-x-16">Link</Button>
      </div>
      <div className="p-l-4">
        <b>Flat Outline Buttons</b>
        <Button className="btn-flat primary-outline m-x-16">Primary</Button>
        <Button className="btn-flat secondary-outline m-x-16">Secondary</Button>
        <Button className="btn-flat success-outline m-x-16">Success</Button>
        <Button className="btn-flat warning-outline m-x-16">Warning</Button>
        <Button className="btn-flat error-outline m-x-16">Error</Button>
        <Button className="btn-flat info-outline m-x-16">Info</Button>
      </div>
    </div>
  );
};
