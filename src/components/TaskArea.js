import React from "react";
import TaskBox from "./TaskBox";

const TaskArea = ({ toDoList, setToDoList }) => {
  return (
    <div>
      <div id="undone-area">
        {toDoList
          .filter((item) => item.isDone == false)
          .map((item) => {
            return (
              <TaskBox
                item={item}
                toDoList={toDoList}
                setToDoList={setToDoList}
              ></TaskBox>
            );
          })}
      </div>
      <div>--------------------------------------------</div>
      <div className="done-task">
        <div id="done-area">
          {toDoList
            .filter((item) => item.isDone == true)
            .map((item) => {
              return (
                <TaskBox
                  item={item}
                  toDoList={toDoList}
                  setToDoList={setToDoList}
                ></TaskBox>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default TaskArea;
