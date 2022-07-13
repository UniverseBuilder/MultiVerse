import React from 'react';

import { Card } from 'components/Card';

export const CardDocs = () => {
  return (
    <div className="flex space-btw">
      <div className="flex-30">
        <Card>1</Card>
      </div>
      <div className="flex-30">
        <Card>2</Card>
      </div>
      <div className="flex-30">
        <Card>3</Card>
      </div>
    </div>
  );
};
