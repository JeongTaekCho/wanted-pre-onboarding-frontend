import styled from "@emotion/styled";
import LoginInput from "../base/inputs/login-input";

const LoginContainer = styled.div`
  width: 384px;
  margin: 0 auto;
`;

export const LoginBox = styled.div`
  width: 100%;
`;

export const LoginLabel = styled.label`
  font-size: 1.3rem;
  font-weight: 400;
  color: #131313;
`;

export const InputBox = styled.div`
  width: 100%;
  margin-bottom: 2rem;
`;

const LayoutLogin = () => {
  return (
    <LoginContainer>
      <div>로그인</div>
      <LoginBox>
        <InputBox>
          <LoginLabel>이메일</LoginLabel>
          <LoginInput type="text" placeholder="이메일을 입력해 주세요." />
        </InputBox>
        <InputBox>
          <LoginLabel>비밀번호</LoginLabel>
          <LoginInput type="text" placeholder="비밀번호를 입력해 주세요." />
        </InputBox>
      </LoginBox>
    </LoginContainer>
  );
};

export default LayoutLogin;
