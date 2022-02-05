import React from 'react';

import PropTypes from 'prop-types';

import { encode } from '../../utility/functions/encode';
import { useModel } from '../../utility/hooks/useModel';
import { useForm } from '../../utility/redux/slices/forms/formSlice';
import { Button } from '../Button';
import { Form } from '../Form';

export const Login = ({ onLogin, footer }) => {
  const loginData = useModel('login');
  const form = useForm();

  const onLoginClick = () => {
    const encodedPwd = encode(loginData.password);
    const creds = {
      ...loginData,
      password: encodedPwd,
    };
    onLogin(creds);
    form.reset('login');
  };
  console.log(loginData);

  return (
    <React.Fragment>
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
          <Button className="btn-block secondary m-t-16" onClick={onLoginClick}>
            Login
          </Button>
        </Form.Wrapper>
      </Form>
      {footer}
    </React.Fragment>
  );
};

Login.propTypes = {
  footer: PropTypes.node,
  onLogin: PropTypes.func,
};

Login.defaultProps = {
  onLogin: () => null,
};
