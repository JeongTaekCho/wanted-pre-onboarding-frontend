import styled from "@emotion/styled";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Wrapper } from "../../styles/commonStyle";
import LoginBtn from "../base/buttons/login-button";
import LoginInput from "../base/inputs/login-input";

const JoinContainer = styled.div`
  width: 384px;
  margin: 0 auto;
`;

const JoinBox = styled.div`
  width: 100%;
`;

const JoinLabel = styled.label`
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

const GoJoin = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  color: #111;
  margin-top: 20px;
  text-decoration: underline;
  cursor: pointer;
`;

const LayoutJoin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  const navigation = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      navigation("/todo");
    }
  }, [navigation]);

  const onChangeInput = (event) => {
    const { name, value } = event.target;

    if (name === "email") {
      setEmail(value);
      if (
        event.target.value.includes("@") &&
        password.length > 7 &&
        passwordConfirm.length > 7
      ) {
        setIsDisabled(false);
      } else {
        setIsDisabled(true);
      }
    } else if (name === "password") {
      setPassword(value);
      if (
        email.includes("@") &&
        event.target.value.length > 7 &&
        passwordConfirm.length > 7
      ) {
        setIsDisabled(false);
      } else {
        setIsDisabled(true);
      }
    } else if (name === "passwordConfirm") {
      setPasswordConfirm(value);
      if (
        email.includes("@") &&
        password.length > 7 &&
        event.target.value.length > 7
      ) {
        setIsDisabled(false);
      } else {
        setIsDisabled(true);
      }
    }
  };

  const onClickToLogin = () => {
    navigation("/");
  };

  const onClickJoin = async () => {
    try {
      if (!email.includes("@")) {
        alert("이메일 형식으로 다시 입력해 주세요.");
      } else if (password < 8) {
        alert("비밀번호를 8자 이상 입력해주세요.");
      } else if (password !== passwordConfirm) {
        alert("비밀번호가 서로 다릅니다.");
      } else {
        await axios.post(
          "https://pre-onboarding-selection-task.shop/auth/signup",
          {
            email,
            password,
          }
        );

        alert("회원가입이 완료되었습니다.");
        navigation("/");
      }
    } catch (error) {
      alert("회원가입 실패");
    }
  };

  return (
    <Wrapper>
      <JoinContainer>
        <Title>회원가입</Title>
        <JoinBox>
          <InputBox>
            <JoinLabel>이메일</JoinLabel>
            <LoginInput
              type="text"
              placeholder="이메일을 입력해 주세요."
              onChange={onChangeInput}
              name="email"
            />
          </InputBox>
          <InputBox>
            <JoinLabel>비밀번호</JoinLabel>
            <LoginInput
              type="password"
              placeholder="비밀번호를 입력해 주세요."
              onChange={onChangeInput}
              name="password"
            />
          </InputBox>
          <InputBox>
            <JoinLabel>비밀번호 확인</JoinLabel>
            <LoginInput
              type="password"
              placeholder="비밀번호를 다시 입력해 주세요."
              onChange={onChangeInput}
              name="passwordConfirm"
            />
          </InputBox>
          <LoginBtn
            value="회원가입"
            onClick={onClickJoin}
            disabled={isDisabled}
          />
        </JoinBox>
        <GoJoin onClick={onClickToLogin}>로그인 하러가기</GoJoin>
      </JoinContainer>
    </Wrapper>
  );
};

export default LayoutJoin;
