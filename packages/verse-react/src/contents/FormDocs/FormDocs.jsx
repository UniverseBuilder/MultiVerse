import React from 'react';

import { Form } from 'components/Form';
import { useForm } from 'utility/hooks';

export const FormDocs = () => {
  const form = useForm();
  console.log(form);
  return (
    <div>
      <Form className="form m-x-32">
        <Form.Wrapper className="flex-45">
          <Form.Label>Textbox</Form.Label>
          <Form.Input model="textbox" placeholder="Textbox" />
          <Form.Label>Select</Form.Label>
          <Form.Select
            model="select"
            options={['Butter', 'Jam', 'Bread']}
            placeholder="Select"
          />
          <Form.Label>Textarea</Form.Label>
          <Form.TextArea model="textarea" placeholder="TextArea" />
          <Form.RadioGroup
            model="radio"
            groups={['Option 1', 'Option 2', 'Option 3']}
            className="m-t-24"
            type="secondary"
          />
          <Form.Checkbox
            model="checkbox"
            groups={['Option 1', 'Option 2', 'Option 3']}
            className="m-t-24 m-b-24"
            type="secondary"
          />
          <Form.Label>Multi Select</Form.Label>
          <Form.Dropdown
            model="multiselect"
            options={['Butter', 'Bread', 'Jam']}
            placeholder="Select"
          />
          <Form.Label>Datepicker</Form.Label>
          <Form.Datepicker model="datepicker" />
        </Form.Wrapper>
        <Form.Wrapper className="flex-45">
          <For each="value" of={Object.keys(form)} index="idx">
            <b>{value}</b>&nbsp;:&nbsp;{JSON.stringify(form[value])}
            <br />
          </For>
        </Form.Wrapper>
      </Form>
    </div>
  );
};
