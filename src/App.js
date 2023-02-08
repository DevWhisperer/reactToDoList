import { useState } from "react";
import "./App.css";
import InputForm from "./components/InputForm";
import Navbar from "./components/Navbar";
import TaskArea from "./components/TaskArea";

function App() {
  const [toDoList, setToDoList] = useState([]);
  return (
    <div id="page">
      <Navbar></Navbar>
      <InputForm toDoList={toDoList} setToDoList={setToDoList}></InputForm>
      <TaskArea toDoList={toDoList} setToDoList={setToDoList}></TaskArea>
    </div>
  );
}

export default App;
