import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {initializeForm, logout} from '../../redux/BlockManagerReducer.js';


const LogoutForm = ({ history }) => {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const {logoutSuccess} = useSelector(({auth}) => ({
    logoutSuccess: auth.logout.returnValue
  }));


  useEffect(() => {
    if (logoutSuccess) {
      console.log('로그아웃 성공');
      localStorage.setItem('login','');
      localStorage.setItem('Authorization','');
      history.push('/login');

    }
  }, [logoutSuccess]);



    if (count === 0) {
      setCount(count => count+1);
      dispatch(initializeForm('logout'));
      dispatch(logout(''));

    }


  return (
      <div />
  );
};

export default withRouter(LogoutForm);
