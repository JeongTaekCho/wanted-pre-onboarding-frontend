import styled from "@emotion/styled";

const Button = styled.button`
  width: 100%;
  padding: 2rem 0;
  border: none;
  background: #000;
  font-size: 1.8rem;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  :disabled {
    background-color: gray;
  }
`;

const LoginBtn = (props) => {
  return (
    <Button onClick={props.onClick} disabled={props.disabled}>
      {props.value}
    </Button>
  );
};

export default LoginBtn;
