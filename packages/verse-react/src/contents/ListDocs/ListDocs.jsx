import React from 'react';

import { List } from 'components/List';

export const ListDocs = () => {
  return (
    <div>
      <List
        bodyKey="description"
        contents={[
          { title: 'DB', description: 'Disc Brakes' },
          { title: 'DB', description: 'Drum Brakes' },
        ]}
        listClass="nFlex-45"
        wrapperClass="flex-container space-around"
      />
    </div>
  );
};
