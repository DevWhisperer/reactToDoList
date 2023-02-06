import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [id, setId] = useState(0);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const onSubmitHandler = (event) => {
    event.preventDefault();
    let newList = toDoList.concat();
    newList.push({ id: id, title: title, desc: desc });
    setToDoList(newList);
    setId(id + 1);
  };
  return (
    <div id="page">
      <Navbar></Navbar>
      <form onSubmit={onSubmitHandler}>
        제목{" "}
        <input
          name="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        내용{" "}
        <input
          name="desc"
          type="text"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <input type="submit" value="추가하기" />
      </form>
    </div>
  );
}

export default App;
