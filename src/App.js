import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TaskBox from "./components/TaskBox";

function App() {
  const [id, setId] = useState(0);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const onSubmitHandler = (event) => {
    event.preventDefault();
    let newList = toDoList.concat();
    newList.push({ id: id, title, desc, isDone: false });
    setToDoList(newList);
    setId(id + 1);
    console.log(toDoList);
  };
  return (
    <div id="page">
      <Navbar></Navbar>
      <form onSubmit={onSubmitHandler}>
        제목{" "}
        <input
          name="title"
          type="text"
          placeholder="제목을 입력하세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        내용{" "}
        <input
          name="desc"
          type="text"
          placeholder="내용을 입력하세요"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <input type="submit" value="추가하기" />
      </form>
      {toDoList.map((item) => {
        return <TaskBox item={item}></TaskBox>;
      })}
      <TaskBox></TaskBox>
      <TaskBox></TaskBox>
    </div>
  );
}

export default App;
