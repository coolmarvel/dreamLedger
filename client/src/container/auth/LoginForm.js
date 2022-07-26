import React, { useEffect, useState } from "react";
import { useSelector, useDispatch, batch } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  searchCode,
  changeField,
  initializeForm,
  login,
  loginSearch,
} from "../../modules/auth";
import AuthForm from "../../component/auth/AuthForm";

const LoginForm = ({ history }) => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const {
    form,
    authError,
    typeCodeArray,
    loginReturnValue,
    loginError,
    searchError,
    searchSuccess,
  } = useSelector(({ auth }) => ({
    form: auth.login,
    loginReturnValue: auth.login.returnValue,
    loginError: auth.login.error,
  }));

  // 인풋 변경 이벤트 핸들러
  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: "login",
        key: name,
        value,
      })
    );
  };

  // 폼 등록 이벤트 핸들러
  const onSubmit = (e) => {
    e.preventDefault();
    const { userId, password } = form;

    if ([userId, password].includes("")) {
      setError("빈 칸을 모두 입력하세요.");
      return;
    }
    dispatch(
      changeField({
        form: "login",
        key: "returnValue",
        value: null,
      })
    );
    dispatch(
      changeField({
        form: "login",
        key: "error",
        value: null,
      })
    );
    dispatch(login({ userId, password }));
    setError(null);
  };

  // // 컴포넌트가 처음 렌더링 될 때 form 을 초기화함
  // useEffect(() => {
  //   dispatch(initializeForm('login'));
  // }, [dispatch]);

  useEffect(() => {
    if (loginError) {
      console.log("오류 발생");
      console.log(loginError);
      console.log(
        "[" +
          loginError.response.status +
          "] " +
          loginError.response.data.error +
          ":" +
          loginError.response.data.message
      );
      setError("로그인에  실패하였습니다.");
      return;
    }

    if (loginReturnValue) {
      return;
    }
  }, [loginReturnValue, loginError]);

  return (
    <AuthForm
      type="login"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default withRouter(LoginForm);
