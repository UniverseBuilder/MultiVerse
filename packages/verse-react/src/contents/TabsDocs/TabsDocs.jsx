import React from 'react';

import { Tabs } from 'components/Tabs';
import { useModel } from 'utility/hooks/useModel';

export const TabsDocs = () => {
  const activeTab = useModel('modelTab');

  return (
    <div>
      <Tabs activeTab={activeTab} model="modelTab" tabs={[1, 2, 3]} />{' '}
    </div>
  );
};
