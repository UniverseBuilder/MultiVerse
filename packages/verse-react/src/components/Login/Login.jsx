import React from 'react';

import { Button } from 'components/Button';
import { Form } from 'components/Form';

export const Login = () => {
  return (
    <Form className="login flex-center p-x-16 m-x-8">
      <Form.Wrapper className="flex-wrap flex-center gutter p-x-32">
        <Form.Label>Username</Form.Label>
        <Form.Input model="login.username" placeholder="User Name" />
        <Form.Label>Password</Form.Label>
        <Form.Input
          model="login.password"
          placeholder="Password"
          type="password"
        />
        <Form.Label>DOB</Form.Label>
        <Form.Input model="login.dob" placeholder="DOB" />
        <Button className="btn-block secondary m-t-16">Login</Button>
      </Form.Wrapper>
    </Form>
  );
};
