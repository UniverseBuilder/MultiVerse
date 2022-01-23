import React from 'react';

import { ButtonGroup } from 'components/ButtonGroup';

export const ButtonGroupDocs = () => {
  return (
    <div>
      <ButtonGroup
        activeClass={`radio secondary`}
        activeGroup={'Eagle Fang'}
        groups={['Eagle Fang', 'Cobra Kai', 'Miyagi Do']}
        inactiveClass={`radio secondary-outline`}
      />
    </div>
  );
};
