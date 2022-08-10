import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../common/styles/palette';
import Button from '../../common/Button';

/**
 * 회원가입 또는 로그인 폼을 보여줍니다.
 */

const AuthFormBlock = styled.div`
  h3 {
    margin: 0;
    color: ${palette.gray[8]};
    margin-bottom: 1rem;
  }
`;

/**
 * 스타일링된 input
 */
const StyledInput = styled.input`
  font-size: 1rem;
  border:1px solid ${palette.gray[5]};
  border-bottom: 1px solid ${palette.gray[5]};
  padding: 0.5rem;
  outline: 1px;
  width: 100%;
  &:focus {
    color: $oc-teal-7;
    border-bottom: 1px solid ${palette.gray[7]};
  }
  & + & {
    margin-top: 1rem;
  }
`;

/**
 * 폼 하단에 로그인 혹은 회원가입 링크를 보여줌
 */
const Header = styled.div`
  margin-top: 0rem;
  margin-bottom:0.5rem;
  text-align: right;
  a {
    color: ${palette.gray[6]};
    text-decoration: underline;
    &:hover {
      color: ${palette.gray[9]};
    }
  }
`;

const Footer = styled.div`
  margin-top: 0.5rem;
  text-align: right;
  a {
    color: ${palette.gray[6]};
    text-decoration: underline;
    &:hover {
      color: ${palette.gray[9]};
    }
  }
`;

const ButtonWithMarginTop = styled(Button)`
  margin-top: 1rem;
  background-color:#0f696d;
`;

const textMap = {
  login: '로그인',
  register: '회원가입'
};

/**
 * 에러를 보여줍니다
 */
const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
`;

const AuthForm = ({ type, form, onChange, onSubmit,error}) => {
  const text = textMap[type];


  return (
    <AuthFormBlock>
        <Header>
           {/*<Link to="/register">회원가입</Link>*/}
        </Header>
        <div className="login-box">
      <form onSubmit={onSubmit}>
        <StyledInput
          autoComplete="userId"
          name="userId"
          placeholder="아이디"
          onChange={onChange}
          value={form.userId}
        />
        <StyledInput
          autoComplete="new-password"
          name="password"
          placeholder="비밀번호"
          type="password"
          onChange={onChange}
          value={form.password}
        />

        {error && <ErrorMessage>{error}</ErrorMessage>}

        <ButtonWithMarginTop   cyan fullWidth style={{ marginTop: '1rem' }}>
          {text}
        </ButtonWithMarginTop>
      </form>
        </div>
        <div className="member-link-wrap">
            <div className="member-link-left">
        <div className="ick-wrap01"><input type="checkbox" className="ick01" id="cbox01"/><label htmlFor="cbox01">로그인 상태
            유지</label></div>
        </div>
            <Footer>
                <Link to="/">나가기 </Link>
            </Footer>
        </div>
        <p className="login-desc01">소중한 학습이력을 블록체인에 저장하고 관리해보세요!</p>
    </AuthFormBlock>
  );
};

export default AuthForm;
