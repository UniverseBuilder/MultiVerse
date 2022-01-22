import React from 'react';

import { Accordion } from 'components/Accordion';

export const AccordionDocs = () => {
  return (
    <div className="m-x-10 p-x-20">
      <Accordion model="sample-accordion">
        <Accordion.Wrapper accordionId="first-accordion">
          <Accordion.Header>Lorem Ipsum</Accordion.Header>
          <Accordion.Content>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry`&apos;`s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </Accordion.Content>
        </Accordion.Wrapper>
        <Accordion.Wrapper accordionId="second-accordion">
          <Accordion.Header>Lorem Ipsum</Accordion.Header>
          <Accordion.Content>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry`&apos;`s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </Accordion.Content>
        </Accordion.Wrapper>
      </Accordion>
    </div>
  );
};
