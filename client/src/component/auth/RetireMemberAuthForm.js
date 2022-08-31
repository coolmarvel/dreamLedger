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

const textMap = {
  findId: "아이디 찾기",
  findPassword: "비밀번호 찾기",
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

const RetireMemberAuthForm = ({
  userId,
  type,
  form,
  onChange,
  onSubmit,
  onCancel,
  error,
}) => {
  return (
    <AuthFormBlock>
      <form onSubmit={onSubmit} onclose={onCancel}>
        <div>
          <div className="tit-tab-wrap">
            <div className="tit-tab-wrap">
              <Link className="tit-tab  on" to=" ">
                MY
              </Link>
            </div>
          </div>
          <div className="join-cont">
            <p className="mydel-tit">에듀블록 통합 회원탈퇴</p>
            <p className="mydel-desc01">
              지금까지 이용해주셔서 감사 드립니다. 탈퇴하기 전 아래 유의사항을
              확인해주세요.
            </p>
            <ul className="mydel-list01">
              <li>
                탈퇴하신 아이디는 복구가 불가능하며, 추후 동일한 아이디로
                재가입이 되지 않습니다.
              </li>
              <li>에듀블록 모든 사이트에서도 동시 탈퇴됩니다.</li>
              <li>
                학습 이력 정보는 모두 삭제되며, 삭제된 데이터는 복구되지
                않습니다.
              </li>
            </ul>

            <dl className="dl-join">
              <dt>아이디</dt>
              <dd className="dd-txt">{userId}</dd>
            </dl>

            <dl className="dl-join">
              <dt>
                비밀번호<sub>*</sub>
              </dt>
              <dd>
                <StyledInput
                  name="password"
                  type={"password"}
                  placeholder="비밀번호를 입력해주세요."
                  onChange={onChange}
                  value={form.password}
                />
              </dd>
            </dl>

            {error && <ErrorMessage>{error}</ErrorMessage>}
            <ButtonWithMarginTop
              cyan
              onClick={onSubmit}
              style={{ margin: "1rem", width: "10rem" }}
            >
              {"탈퇴하기"}
            </ButtonWithMarginTop>
            <ButtonWithMarginTop
              cyan
              onClick={onCancel}
              style={{ margin: "1rem", width: "10rem" }}
            >
              {"취소"}
            </ButtonWithMarginTop>
          </div>
        </div>
      </form>
    </AuthFormBlock>
  );
};

export default RetireMemberAuthForm;
