import React from "react";

const TaskBox = ({ item }) => {
  return (
    <div>
      <div>{item}</div>
      <div>description</div>
      <button>삭제하기</button>
      <button>완료</button>
    </div>
  );
};

export default TaskBox;
