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
const StyledPartInput = styled.input`
  font-size: 1rem;
  border:1px solid ${palette.gray[5]};
  border-bottom: 1px solid ${palette.gray[5]};
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  outline: 1px;
  width:  ${props => props.width};;
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
    findID: '아이디 찾기',
    findPassword: '비밀번호 찾기'
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

const FindIDAuthForm = ({ type, form, onChange, onSubmit, error ,result}) => {
    const text = textMap[type];
    return (
        <AuthFormBlock>


            <form onSubmit={onSubmit}>
                <div>

                    <div className="tit-tab-wrap">
                        <div className="tit-tab-wrap">
                            <Link className="tit-tab on" to="/findID">아이디 찾기</Link>
                            <Link className="tit-tab" to="/findPassword">비밀번호 찾기</Link>
                            <Header>
                                <Link to="/login">로그인</Link>
                            </Header>
                        </div>
                    </div>
                    <div className="join-cont">
                        <div className="join-desc"><sub>*</sub> 필수 입력 정보입니다.</div>
                        <dl className="dl-join">
                            <dt>이름<sub>*</sub></dt>
                            <dd>
                                <StyledInput
                                    autoComplete="userName"
                                    name="userName"
                                    placeholder="이름(실명)"
                                    onChange={onChange}
                                    value={form.userName}
                                />
                            </dd>
                        </dl>


                        <dl className="dl-join">
                            <dt>이메일<sub>*</sub></dt>
                            <dd>
                                <div className="email-itxt-wrap">
                                    <StyledPartInput
                                        width={"35%"}
                                        autoComplete="emailId"
                                        name="emailId"
                                        placeholder="이메일 계정"
                                        onChange={onChange}
                                        value={form.emailId}
                                    />
                                    <span> @ </span>
                                    <StyledPartInput
                                        width={"55%"}
                                        autoComplete="emailDomain"
                                        name="emailDomain"
                                        placeholder="이메일 도메인"
                                        onChange={onChange}
                                        value={form.emailDomain}
                                    />
                                </div>
                            </dd>
                        </dl>

                        {error && <ErrorMessage>{error}</ErrorMessage>}
                        {result && <h6>{result}</h6>}
                        <ButtonWithMarginTop cyan fullWidth style={{ marginTop: '1rem' }}>
                            {text}
                        </ButtonWithMarginTop>
                    </div>

                </div>
            </form>


        </AuthFormBlock>
    );
};

export default FindIDAuthForm;
