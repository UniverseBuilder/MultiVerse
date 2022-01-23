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
        <For each="icon" index="idx" of={icons}>
          <Wrapper className="iconWrapper">
            <Icon
              {...icon}
              className="primary-icon flex-100"
              key={`icon_${idx}`}
            />
            <div className="text-center m-t-8">{icon.name}</div>
          </Wrapper>
        </For>
      </Wrapper>
      <Wrapper className="flex">
        <For each="icon" index="idx" of={fillIcons}>
          <Wrapper className="iconWrapper">
            <Icon
              {...icon}
              className="primary-icon flex-100"
              key={`icon_${idx}`}
            />
            <div className="text-center m-t-8">{icon.name}</div>
          </Wrapper>
        </For>
      </Wrapper>
    </Wrapper>
  );
};
