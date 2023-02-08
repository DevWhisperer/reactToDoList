import React from "react";

const taskBox = ({ item, toDoList, setToDoList }) => {
  const deleteTask = (item, toDoList, setToDoList) => {
    let newList = toDoList.filter((one) => item.id !== one.id);
    setToDoList(newList);
  };

  const doneTask = (item, toDoList, setToDoList) => {
    let newList = [];
    toDoList.map((one) => {
      if (item.id !== one.id) {
        newList.push(one);
      } else {
        one.isDone = !one.isDone;
        newList.push(one);
      }
    });
    setToDoList(newList);
  };
  return (
    <div>
      <div>{item?.isDone ? "[완료]" : "[미완료]"}</div>
      <h1>{item?.title}</h1>
      <p>{item?.desc}</p>
      <button onClick={() => deleteTask(item, toDoList, setToDoList)}>
        삭제하기
      </button>
      <button onClick={() => doneTask(item, toDoList, setToDoList)}>
        {item?.isDone ? "취소" : "완료"}
      </button>
    </div>
  );
};

export default taskBox;
