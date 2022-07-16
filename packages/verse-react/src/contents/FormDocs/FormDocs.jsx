import React from 'react';

import { Form } from 'components/Form';
import { useModel } from 'utility/hooks';

export const FormDocs = () => {
  const form = useModel();
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
            className="m-t-24"
            groups={['Option 1', 'Option 2', 'Option 3']}
            model="radio"
            type="secondary"
          />
          <Form.Checkbox
            className="m-t-24 m-b-24"
            groups={['Option 1', 'Option 2', 'Option 3']}
            model="checkbox"
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
          <Form.UploadFile model="uploadfile" placeholder="Select" />
          <Form.UploadFolder model="uploadfolder" placeholder="Select" />
        </Form.Wrapper>
        <Form.Wrapper className="flex-45">
          <For each="value" index="idx" of={Object.keys(form)}>
            <b>{value}</b>&nbsp;:&nbsp;{JSON.stringify(form[value])}
            <br />
          </For>
        </Form.Wrapper>
      </Form>
    </div>
  );
};
