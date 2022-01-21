import React from 'react';

import { Icon } from 'components/Icon';
import { Wrapper } from 'components/Wrapper';

const icons = [{ name: 'plus' }, { name: 'minus' }];

const fillIcons = [
  { name: 'plus', type: 'fill' },
  { name: 'minus', type: 'fill' },
];

export const IconsDocs = () => {
  return (
    <Wrapper>
      <Wrapper className="flex">
        <For each="icon" of={icons} index="idx">
          <Wrapper className="iconWrapper">
            <Icon
              {...icon}
              key={`icon_${idx}`}
              className="primary-icon flex-100"
            />
            <div className="text-center m-t-8">{icon.name}</div>
          </Wrapper>
        </For>
      </Wrapper>
      <Wrapper className="flex">
        <For each="icon" of={fillIcons} index="idx">
          <Wrapper className="iconWrapper">
            <Icon
              {...icon}
              key={`icon_${idx}`}
              className="primary-icon flex-100"
            />
            <div className="text-center m-t-8">{icon.name}</div>
          </Wrapper>
        </For>
      </Wrapper>
    </Wrapper>
  );
};
