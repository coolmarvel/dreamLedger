import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import palette from "../../common/styles/palette";
import Button from "../../common/Button";

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
  border: 1px solid ${palette.gray[5]};
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
  border: 1px solid ${palette.gray[5]};
  border-bottom: 1px solid ${palette.gray[5]};
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  outline: 1px;
  width: ${(props) => props.width};
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
  margin-bottom: 0.5rem;
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
  background-color: #0f696d;
`;

/**
 * 에러를 보여줍니다
 */
const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
`;

const UpdateAuthForm = ({ id, form, onChange, onSubmit, error }) => {
  return (
    <AuthFormBlock>
      <form onSubmit={onSubmit}>
        <div>
          <div className="tit-tab-wrap">
            <a href="#" className="tit-tab on">
              회원정보
            </a>
          </div>
          <div className="join-cont">
            <div className="join-desc">
              <sub>*</sub> 필수 입력 정보입니다.
            </div>
            <dl className="dl-join">
              <dt>
                이름<sub>*</sub>
              </dt>
              <dd>
                <StyledInput
                  autoComplete="username"
                  name="userName"
                  placeholder="이름(실명)"
                  onChange={onChange}
                  value={form.userName}
                />
              </dd>
            </dl>
            <dl className="dl-join">
              <dt>
                아이디<sub>*</sub>
              </dt>
              <dd>
                <span>{id}</span>
              </dd>
            </dl>

            <dl className="dl-join">
              <dt>
                이메일<sub>*</sub>
              </dt>
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
            <dl className="dl-join">
              <dt>개인정보 유효기간</dt>
              <dd>
                <div className="info-ird-wrap">
                  <input
                    type="radio"
                    className="ird01"
                    id="rd01_01"
                    name="rd01"
                    onChange={onChange}
                  />
                  <label htmlFor="rd01_01">1년</label>
                  <input
                    type="radio"
                    className="ird01"
                    id="rd01_02"
                    name="rd01"
                    onChange={onChange}
                  />
                  <label htmlFor="rd01_02">3년</label>
                  <input
                    type="radio"
                    className="ird01"
                    id="rd01_03"
                    name="rd01"
                    onChange={onChange}
                    checked
                  />
                  <label htmlFor="rd01_03">회원 탈퇴시</label>
                </div>
              </dd>
            </dl>
            <div className="terms-cont">
              <div className="cont-top">
                필수동의 항목 및 개인정보 수집 및 이용 동의(선택)에 모두
                동의합니다.{" "}
                <input
                  type="checkbox"
                  className="ick01 ck-parent"
                  title="전체 동의"
                />
              </div>
              <div className="cont-body">
                <div className="terms-child-wrap">
                  <span className="fc-red">[필수]</span> 이용약관 동의
                  <button
                    type="button"
                    className="btn-arr"
                    onClick="fnOpenLpop('.lpop-cont-wrap.terms01');"
                  >
                    내용보기
                  </button>
                  <input
                    type="checkbox"
                    className="ick01 ck-child"
                    title="[필수] 이용약관 동의"
                  />
                </div>
                <div className="terms-child-wrap">
                  <span className="fc-red">[필수]</span> 개인정보 수집 및 이용
                  동의
                  <button
                    type="button"
                    className="btn-arr"
                    onClick="fnOpenLpop('.lpop-cont-wrap.terms02');"
                  >
                    내용보기
                  </button>
                  <input
                    type="checkbox"
                    className="ick01 ck-child"
                    title="[필수] 개인정보 수집 및 이용 동의"
                  />
                </div>
              </div>
            </div>

            {error && <ErrorMessage>{error}</ErrorMessage>}
            <ButtonWithMarginTop cyan fullWidth style={{ marginTop: "1rem" }}>
              정보수정
            </ButtonWithMarginTop>
          </div>

          <div className="menu-mask"></div>
        </div>
        <div className="lpop-cont-wrap terms01">
          <div className="lpop-cont">
            <h1 className="lpop-tit">이용약관</h1>
            <div className="cont-body">
              <div className="scroll-wrap">
                <div className="scroll-cont">
                  <p>약관 내용</p>
                </div>
              </div>
            </div>
            <button type="button" className="btn-lpop-close">
              팝업 닫기
            </button>
          </div>
        </div>
        <div className="lpop-cont-wrap terms02">
          <div className="lpop-cont">
            <h1 className="lpop-tit">개인정보 수집 및 이용</h1>
            <div className="cont-body">
              <div className="scroll-wrap">
                <div className="scroll-cont">
                  <p>약관 내용</p>
                </div>
              </div>
            </div>
            <button type="button" className="btn-lpop-close">
              팝업 닫기
            </button>
          </div>
        </div>

        <div className="full-mask"></div>
        <div className="media-check">
          <div className="media-web"></div>
          <div className="media-mob"></div>
        </div>
      </form>
    </AuthFormBlock>
  );
};

export default UpdateAuthForm;
