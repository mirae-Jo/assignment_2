import React, { useState } from "react";
import "./App.css";
import AddBtn from "./components/AddBtn";
import Done from "./components/Done";

const App = () => {
  const [toDoLists, setToDos] = useState([
    { id: 1, title: "공부", todo: "리액트", isDone: false },
    { id: 2, title: "운동", todo: "달리기", isDone: false },
  ]);

  const [todo, setTodo] = useState("");
  const [title, setTitle] = useState("");

  const todoChangeHandler = (event) => {
    setTodo(event.target.value);
  };

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  // 추가버튼
  const clickAddBtnHandler = () => {
    const newTodo = {
      id: toDoLists.length + 1,
      title,
      todo,
      isDone: false,
    };
    setToDos([...toDoLists, newTodo]);
  };

  // 완료버튼
  const clickDoneBtnHandler = (id) => {
    const newTodos = toDoLists.filter((todo) => todo.id !== id);

    const doneTodos = toDoLists.filter((todo) => todo.id === id);
    const filterd = doneTodos[0];
    filterd.isDone = true;
    setToDos([...newTodos, filterd]);
  };

  // 삭제버튼
  const clickRemoveBtnHandler = (id) => {
    const newTodos = toDoLists.filter((todo) => todo.id !== id);
    setToDos(newTodos);
  };

  // 취소버튼
  const clickCancelBtnHandler = (id) => {
    const newTodos = toDoLists.filter((todo) => todo.id !== id);

    const doneTodos = toDoLists.filter((todo) => todo.id === id);
    const filterd = doneTodos[0];
    filterd.isDone = false;
    setToDos([...newTodos, filterd]);
  };

  return (
    <div className="bodyWrap">
      <div className="center">
        <div className="inputBoxWrap">
          <div className="inputBox">
            <span>제목 :</span>
            <input value={title} onChange={titleChangeHandler} />
          </div>
          <div className="inputBox">
            <span>내용 :</span>
            <input value={todo} onChange={todoChangeHandler} />
          </div>
          <AddBtn clickAddBtnHandler={clickAddBtnHandler}>추가</AddBtn>
        </div>
        <div>
          <h2>진행중</h2>
          <div className="app-style">
            {toDoLists
              .filter((item) => item.isDone === false)
              .map((item) => (
                <Done
                  key={item.id}
                  item={item}
                  clickDoneBtnHandler={clickDoneBtnHandler}
                  clickRemoveBtnHandler={clickRemoveBtnHandler}
                />
              ))}
          </div>
          <h2>완료</h2>
          <div className="app-style">
            {toDoLists
              .filter((item) => item.isDone === true)
              .map((item) => (
                <Cancle
                  key={item.id}
                  item={item}
                  clickCancelBtnHandler={clickCancelBtnHandler}
                  clickRemoveBtnHandler={clickRemoveBtnHandler}
                />
              ))}
          </div>
          {/* {toDoLists.map((item) =>
            item.isDone === true ? (
              <div>
                <h1>Work</h1>
                <div>
                  <DoneBtn
                    key={item.id}
                    item={item}
                    clickRemoveBtnHandler={clickRemoveBtnHandler}
                    clickDoneBtnHandler={clickDoneBtnHandler}
                  />
                </div>
              </div>
            ) : (
              <div>
                <h1>Done</h1>
                <div>
                  <DoneBtn
                    key={item.id}
                    item={item}
                    clickRemoveBtnHandler={clickRemoveBtnHandler}
                    clickDoneBtnHandler={clickDoneBtnHandler}
                  />
                </div>
              </div>
            )
          )} */}
        </div>
      </div>

      {/* <div className="app-style">
        {toDoLists.filter((item) => {
          if (item.isDone === true) {
            return (
              <DoneBtn
                key={item.id}
                item={item}
                clickRemoveBtnHandler={clickRemoveBtnHandler}
                clickDoneBtnHandler={clickDoneBtnHandler}
              />
            );
          }
          return <div></div>;
        })}
      </div> */}
    </div>
  );
};
const Cancle = ({ item, clickCancelBtnHandler, clickRemoveBtnHandler }) => {
  return (
    <div>
      <div className="component-style">
        <div>{item.title}</div>
        <div>{item.todo}</div>

        <button onClick={() => clickRemoveBtnHandler(item.id)}>삭제</button>
        <button onClick={() => clickCancelBtnHandler(item.id)}>취소</button>
      </div>
    </div>
  );
};
export default App;
