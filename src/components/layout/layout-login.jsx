import styled from "@emotion/styled";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginBtn from "../base/buttons/login-button";
import LoginInput from "../base/inputs/login-input";

const LoginContainer = styled.div`
  width: 384px;
  margin: 0 auto;
`;

const LoginBox = styled.div`
  width: 100%;
`;

const LoginLabel = styled.label`
  font-size: 1.3rem;
  font-weight: 400;
  color: #131313;
`;

const InputBox = styled.div`
  width: 100%;
  margin-bottom: 2rem;
`;

const Title = styled.h2`
  font-size: 4rem;
  font-weight: 600;
  color: #111;
  margin-bottom: 4rem;
`;

const LayoutLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const navigation = useNavigate();

  const onChangeInput = (event) => {
    const { name, value } = event.target;

    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onClickLogin = async () => {
    try {
      const result = await axios.post(
        "https://pre-onboarding-selection-task.shop/auth/signin",
        {
          email,
          password,
        }
      );
      localStorage.setItem("accessToken", result.data.access_token);

      alert("로그인 성공");
      navigation("/todo");
    } catch (error) {
      alert("로그인 실패");
    }
  };

  return (
    <LoginContainer>
      <Title>로그인</Title>
      <LoginBox>
        <InputBox>
          <LoginLabel>이메일</LoginLabel>
          <LoginInput
            type="text"
            placeholder="이메일을 입력해 주세요."
            name="email"
            onChange={onChangeInput}
          />
        </InputBox>
        <InputBox>
          <LoginLabel>비밀번호</LoginLabel>
          <LoginInput
            type="password"
            placeholder="비밀번호를 입력해 주세요."
            name="password"
            onChange={onChangeInput}
          />
        </InputBox>
        <LoginBtn value="로그인" onClick={onClickLogin} />
      </LoginBox>
    </LoginContainer>
  );
};

export default LayoutLogin;
