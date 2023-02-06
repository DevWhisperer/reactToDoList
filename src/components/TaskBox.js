import React from "react";

const TaskBox = ({ task, setToDoList, toDoList }) => {
  const deleteTask = () => {
    let newList = [];
    toDoList.map((item) => {
      if (item.id !== task.id) {
        newList.push(item);
      }
      setToDoList(newList);
    });
  };
  const doneTask = () => {
    let newList = [];
    for (let i = 0; i < toDoList.length; i++) {
      if (toDoList[i].id !== task.id) {
        newList.push(toDoList[i]);
      } else {
        let doneOne = toDoList[i];
        doneOne.isDone = !doneOne.isDone;
        newList.push(doneOne);
      }
    }
    setToDoList(newList);
  };
  return (
    <div>
      <div>{task.title}</div>
      <div>{task.desc}</div>
      <button onClick={deleteTask}>삭제하기</button>
      <button onClick={doneTask}>완료</button>
    </div>
  );
};

export default TaskBox;
