import React from 'react';

import PropTypes from 'prop-types';

import { useModel } from '../../utility/hooks/useModel';
import { useForm } from '../../utility/redux/slices/forms/formSlice';
import { Button } from '../Button';
import { Form } from '../Form';

export const Login = ({ onLogin, footer, tfa }) => {
  const loginData = useModel('login');
  const form = useForm();

  const onLoginClick = () => {
    onLogin(loginData);
    form.set({
      model: 'login',
      value: {},
    });
  };
  console.log(loginData);
  return (
    <React.Fragment>
      <Form className="login flex-center p-x-16 m-x-8">
        <Form.Wrapper className="flex-wrap flex-center gutter p-x-32">
          <Form.Label>Username</Form.Label>
          <Form.Input
            autoComplete="off"
            model="login.username"
            placeholder="User Name"
          />
          <Form.Label>Password</Form.Label>
          <Form.Input
            autoComplete="password"
            model="login.password"
            placeholder="Password"
            type="password"
          />
          <If condition={tfa}>
            <Form.Label>{tfa.label}</Form.Label>
            <Form.Input
              autoComplete={`${tfa.type}`}
              model={`login.${tfa.model}`}
              placeholder={tfa.placeholder}
            />
          </If>
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
  tfa: PropTypes.shape({
    label: PropTypes.string,
    model: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
  }),
};

Login.defaultProps = {
  footer: null,
  onLogin: () => null,
  tfa: null,
};
