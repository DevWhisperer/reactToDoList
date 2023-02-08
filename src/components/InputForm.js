import React from "react";

const InputForm = ({ toDoList, setToDoList }) => {
  function guidGenerator() {
    let S4 = function () {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (
      S4() +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      S4() +
      S4()
    );
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    let newList = toDoList.concat();
    let newId = guidGenerator();
    let title = event.target.title.value;
    let desc = event.target.desc.value;
    newList.push({ id: newId, title, desc, isDone: false });
    setToDoList(newList);
    event.target.title.value = "";
    event.target.desc.value = "";
  };

  return (
    <form onSubmit={onSubmitHandler}>
      제목 <input name="title" type="text" placeholder="제목을 입력하세요" />
      내용 <input name="desc" type="text" placeholder="내용을 입력하세요" />
      <input type="submit" value="추가하기" />
    </form>
  );
};

export default InputForm;
