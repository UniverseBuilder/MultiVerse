import React from 'react';

import { Form } from 'components/Form';
import { useForm } from 'utility/hooks';

export const FormDocs = () => {
  const form = useForm();
  console.log(form);
  return (
    <div>
      <div className="flex">
        <div className="flex-50">
          <Form>
            <Form.Label>Textbox</Form.Label>
            <Form.Input model="textbox" placeholder="Textbox" />
            <Form.Label>Select</Form.Label>
            <Form.Select
              model="select"
              options={['Butter', 'Ghee', 'Bread']}
              placeholder="Select"
            />
            <Form.Label>Textarea</Form.Label>
            <Form.TextArea model="textarea" placeholder="TextArea" />
            <Form.Label>Checkbox</Form.Label>
            <Form.Checkbox model="checkbox" placeholder="Checkbox" />
            <Form.Label>Datepicker</Form.Label>
            <Form.Datepicker
              model="datepicker"
              placeholder="Datepicker"
              defaultValue="2022-01-17"
            />
            <Form.RadioGroup model="breakfast">
              <Form.Radio id="Bread" label="Bread" value="Bread" />
              <Form.Label>Bread</Form.Label>
              <Form.Radio id="Butter" label="Butter" value="Butter" />
              <Form.Label>Butter</Form.Label>
              <Form.Radio id="Ghee" label="Ghee" value="Ghee" />
              <Form.Label>Ghee</Form.Label>
            </Form.RadioGroup>
          </Form>
        </div>
        <div className="flex-50">
          <pre>{JSON.stringify(form)}</pre>
        </div>
      </div>
    </div>
  );
};
