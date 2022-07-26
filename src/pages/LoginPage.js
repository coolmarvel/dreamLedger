import React from 'react';
import AuthTemplate from '../component/auth/AuthTemplate';
import LoginForm from '../container/auth/LoginForm';
import {Dialog} from "@material-ui/core";


const LoginPage = () => {

  return (


          <AuthTemplate>
              <LoginForm />
          </AuthTemplate>


  );
};

export default LoginPage;

