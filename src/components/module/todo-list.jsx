import styled from "@emotion/styled";
import axios from "axios";
import { useState } from "react";

const TodoBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TodoList = styled.li`
  list-style: disc;
  font-size: 2rem;
  font-weight: 400;
  color: #111;
`;

const BtnBox = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const TodoBtn = styled.button`
  width: 50px;
  height: 35px;
  border: none;
  background-color: #111;
  font-size: 1.6rem;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
`;

const UpdateInput = styled.input`
  width: 400px;
  height: 40px;
  border: 1px solid #aaa;
  outline: none;
  font-size: 2rem;
  font-weight: 400;
  color: #111;
`;

const CompleteImg = styled.div`
  width: 30px;
  img {
    width: 100%;
  }
`;

const TodoLi = ({ el, setRefetch }) => {
  const [isUpdate, setIsUpdate] = useState(false);
  const [updateTodo, setUpdateTodo] = useState("");
  const [dataId, setDataId] = useState("");

  const onClickDelete = async () => {
    await axios.delete(
      `https://pre-onboarding-selection-task.shop/todos/${el.id}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    alert("삭제되었습니다.");
    setRefetch((prev) => prev + 1);
  };

  const ToggleUpdateBtn = (dataId) => () => {
    setIsUpdate(true);
    setDataId(dataId);
  };

  const UpdateCancelBtn = () => {
    setIsUpdate(false);
  };

  console.log(dataId);

  const onChangeUpdateInput = (event) => {
    setUpdateTodo(event.target.value);
  };

  const onClickUpdate = async () => {
    await axios.put(
      `https://pre-onboarding-selection-task.shop/todos/${dataId}`,
      {
        todo: updateTodo,
        isCompleted: true,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    alert("제출하였습니다.");
    setIsUpdate(false);
    setRefetch((prev) => prev + 1);
  };

  return (
    <>
      {isUpdate ? (
        <TodoBox>
          <UpdateInput
            type="text"
            defaultValue={el.todo}
            onChange={onChangeUpdateInput}
          />
          <BtnBox>
            <TodoBtn onClick={onClickUpdate}>제출</TodoBtn>
            <TodoBtn onClick={UpdateCancelBtn}>취소</TodoBtn>
          </BtnBox>
        </TodoBox>
      ) : (
        <TodoBox>
          <TodoList
            style={{ textDecoration: el.isCompleted ? "line-through" : "none" }}
          >
            {el.todo}
          </TodoList>
          {el.isCompleted ? (
            <CompleteImg>
              <img src="https://img.icons8.com/color/512/checked--v4.png" />
            </CompleteImg>
          ) : (
            <BtnBox>
              <TodoBtn onClick={ToggleUpdateBtn(el.id)}>수정</TodoBtn>
              <TodoBtn onClick={onClickDelete}>삭제</TodoBtn>
            </BtnBox>
          )}
        </TodoBox>
      )}
    </>
  );
};

export default TodoLi;
