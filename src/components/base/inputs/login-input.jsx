import styled from "@emotion/styled";

const Input = styled.input`
  display: block;
  width: 100%;
  height: 5.2rem;
  border: 1px solid rgb(217, 217, 217);
  padding: 0px 1.2rem;
  border-radius: 4px;
  font-size: 1.6rem;
  font-weight: 400;
  color: rgb(153, 153, 153);
  outline: none;
`;

const LoginInput = (props) => {
  return (
    <Input
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.onChange}
      name={props.name}
    ></Input>
  );
};

export default LoginInput;
