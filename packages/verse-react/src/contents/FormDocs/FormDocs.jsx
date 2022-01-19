import React from 'react';

import { Form } from 'components/Form';
import { useForm } from 'utility/hooks';

export const FormDocs = () => {
  const form = useForm();
  return (
    <div>
      <Form className="form m-x-32">
        <Form.Wrapper className="flex-45">
          <Form.Label>Textbox</Form.Label>
          <Form.Input model="textbox" placeholder="Textbox" />
        </Form.Wrapper>
        <Form.Wrapper className="flex-45">
          <Form.Label>Select</Form.Label>
          <Form.Select
            model="select"
            options={['Butter', 'Ghee', 'Bread']}
            placeholder="Select"
          />
        </Form.Wrapper>
        <Form.Wrapper className="flex-100">
          <Form.Label>Textarea</Form.Label>
          <Form.TextArea model="textarea" placeholder="TextArea" />
        </Form.Wrapper>
        <Form.Wrapper className="flex-45">
          <Form.RadioGroup
            model="breakfast"
            groups={['Bread', 'Butter', 'Ghee']}
            className="m-t-32"
            type="secondary"
          />
        </Form.Wrapper>
        <Form.Wrapper className="flex-45">
          <Form.Checkbox
            model="breakfast2"
            groups={['Bread', 'Butter', 'Ghee']}
            className="m-t-32"
            type="secondary"
          />
        </Form.Wrapper>

        {/* 
           
           
            <Form.Label>Datepicker</Form.Label>
            <Form.Datepicker
              model="datepicker"
              placeholder="Datepicker"
              defaultValue="2022-01-17"
            />
           */}
      </Form>
      <div className="flex m-x-32">
        <pre>{JSON.stringify(form)}</pre>
      </div>
    </div>
  );
};
