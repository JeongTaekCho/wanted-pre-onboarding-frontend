import styled from "@emotion/styled";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TodoLi from "../module/todo-list";

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

export const TodoBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4rem;
`;

const TodoInput = styled.input`
  width: 440px;
  height: 50px;
  border: 1px solid #dedede;
  font-size: 1.8rem;
  font-weight: 400;
  color: #111;
  outline: none;
`;

const TodoBtn = styled.button`
  width: 80px;
  height: 50px;
  background-color: #111;
  font-size: 1.8rem;
  font-weight: 500;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const TodoUl = styled.ul`
  height: 300px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const TodoMent = styled.p`
  font-size: 2.4rem;
  font-weight: 400;
  color: #929292;
  text-align: center;
`;

const LayoutTodoList = () => {
  const [todo, setTodo] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [refetch, setRefetch] = useState(0);

  const navigation = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      navigation("/");
    }
  }, []);

  useEffect(() => {
    const result = localStorage.getItem("accessToken");
    setAccessToken(result);

    const getTodoList = async () => {
      const { data } = await axios.get(
        "https://pre-onboarding-selection-task.shop/todos",
        {
          headers: {
            Authorization: `Bearer ${result}`,
          },
        }
      );
      setTodoList(data);
    };
    getTodoList();
  }, [refetch]);

  const onChangeTodo = (event) => {
    setTodo(event.target.value);
  };

  const onClickTodoSubmit = async () => {
    await axios.post(
      "https://pre-onboarding-selection-task.shop/todos",
      {
        todo,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    setTodo("");
    setRefetch((prev) => prev + 1);
    alert("할일이 등록되었습니다.");
  };

  return (
    <Wrapper>
      <TodoContainer>
        <Title>Todo-List</Title>
        <TodoBox>
          <TodoInput onChange={onChangeTodo} value={todo} />
          <TodoBtn onClick={onClickTodoSubmit}>등록</TodoBtn>
        </TodoBox>
        <TodoUl>
          {todoList.length > 0 ? (
            todoList.map((el) => {
              return <TodoLi el={el} key={el.id} setRefetch={setRefetch} />;
            })
          ) : (
            <TodoMent>할일을 등록해주세요.</TodoMent>
          )}
        </TodoUl>
      </TodoContainer>
    </Wrapper>
  );
};

export default LayoutTodoList;
