import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';

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
  findId: '아이디 찾기',
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

const ChangePasswordAuthForm = ({ type, form, onChange, onSubmit,onCancel, error }) => {
  const text = textMap[type];

  return (
    <AuthFormBlock>


      <form onSubmit={onSubmit} onclose={onCancel}>
            <div>

                  <div className="tit-tab-wrap">
                      <div className="tit-tab-wrap">
                          <Link className="tit-tab  on" to=" ">MY</Link>

                      </div>
                  </div>
                  <div className="join-cont">
                      <div className="join-desc"><sub>*</sub> 8~16자의 영문, 숫자, 특수기호로 입력해주세요.</div>
                      <dl className="dl-join">
                          <dt>현재 비밀번호<sub>*</sub></dt>
                          <dd>
                              <StyledInput
                                  name="curPassword"
                                  placeholder="현재 비밀번호를 입력하세요."
                                  onChange={onChange}
                                  value={form.curPassword}
                              />
                          </dd>
                      </dl>

                      <dl className="dl-join">
                          <dt>새 비밀번호<sub>*</sub></dt>
                          <dd>
                              <StyledInput
                                name="newPassword"
                                type={"password"}
                                placeholder="새 비밀번호를 입력해주세요."
                                onChange={onChange}
                                value={form.newPassword}
                              />
                          </dd>
                      </dl>


                      <dl className="dl-join">
                          <dt>새 비밀번호(확인)<sub>*</sub></dt>
                          <dd>
                              <StyledInput
                                  name="newPassword1"
                                  type={"password"}
                                  placeholder="새 비밀번호를 다시 입력해주세요."
                                  onChange={onChange}
                                  value={form.newPassword1}
                              />
                          </dd>
                      </dl>

                      {error && <ErrorMessage>{error}</ErrorMessage>}
                      <ButtonWithMarginTop cyan onClick={onSubmit} style={{ margin: '1rem', width:'10rem' }}>
                        {'변경하기'}
                      </ButtonWithMarginTop>
                      <ButtonWithMarginTop cyan  onClick ={onCancel} style={{ margin: '1rem', width:'10rem'  }} >
                          {'취소'}
                      </ButtonWithMarginTop>
                  </div>

          </div>
      </form>


    </AuthFormBlock>
  );
};

export default ChangePasswordAuthForm;
