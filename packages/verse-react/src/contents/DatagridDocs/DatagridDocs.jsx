import React from 'react';

import { Datagrid } from 'components/Datagrid';
import mockData from 'utility/mocks/MOCK_DATA.json';
import mockSchema from 'utility/mocks/MOCK_SCHEMA.json';

export const DatagridDocs = () => {
  return (
    <div className="">
      <Datagrid data={mockData} schema={mockSchema} title="Mock Table" />
    </div>
  );
};
