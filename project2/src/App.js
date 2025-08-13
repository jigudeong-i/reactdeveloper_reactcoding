import { useRef, useState } from "react";
import "./App.css";
import Header from "./component/Header";
import TodoEditor from "./component/TodoEditor";
import TodoList from "./component/TodoList";

  const mockTodo = [
    {
      id: 0,
      isDone: false,
      content: "React 공부하기",
      createdDate: new Date().getTime(),
    },
    {
      id: 1,
      isDone: false,
      content: "빨래 널기",
      createdDate: new Date().getTime(),
    },
    {
      id: 2,
      isDone: false,
      content: "노래 연습하기",
      createdDate: new Date().getTime(),
    },
  ];

const App = () => {
  const [todo, setTodo] = useState(mockTodo);
  const idRef = useRef(3);  //0,1,2

  const OnCreate = (content) => {
    const newItem = {
      id:idRef.current,
      content,
      isDone:false,    // isDone : 할일 완료 여부를 나타내는 boolean
      createdDate:new Date().getTime(),
    };
    //setTodo([newItem, ...todo])  
    setTodo([...todo, newItem]); //배열 
    idRef.current += 1;
  };

  const onUpdate = (targetId) => {
    setTodo(
      todo.map((it) =>
        it.id === targetId ? { ...it, isDone: !it.isDone } : it
      )
    );
  };

  const onDelete = (targetId) =>{
    setTodo(todo.filter((it) => it.id !== targetId));  //해당되지 않는 요소들만 가지고 새로운 배열 만들겠다 
  };

  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate={OnCreate} />
      <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
  );
}
export default App;