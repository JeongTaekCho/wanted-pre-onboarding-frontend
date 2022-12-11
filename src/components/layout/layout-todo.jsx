import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TodoContainer = styled.div`
  width: 600px;
  padding: 3rem;
  border: 1px solid #111;
  border-radius: 30px;
`;

const Title = styled.h2`
  font-size: 2.4rem;
  font-weight: 600;
  color: #111;
  text-align: center;
  margin-bottom: 2rem;
`;

const LayoutTodoList = () => {
  return (
    <Wrapper>
      <TodoContainer>
        <Title>Todo-List</Title>
      </TodoContainer>
    </Wrapper>
  );
};

export default LayoutTodoList;
