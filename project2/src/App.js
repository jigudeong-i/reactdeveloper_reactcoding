import { useReducer, useRef, useState } from "react";
import "./App.css";
import Header from "./component/Header";
import TodoEditor from "./component/TodoEditor";
import TodoList from "./component/TodoList";
import TestComponents from "./component/TestComponent"

//   const mockTodo = [
//     {
//       id: 0,
//       isDone: false,
//       content: "React 공부하기",
//       createdDate: new Date().getTime(),
//     },
//     {
//       id: 1,
//       isDone: false,
//       content: "빨래 널기",
//       createdDate: new Date().getTime(),
//     },
//     {
//       id: 2,
//       isDone: false,
//       content: "노래 연습하기",
//       createdDate: new Date().getTime(),
//     },
//   ];

// const App = () => {
//   const [todo, setTodo] = useState(mockTodo);
//   const idRef = useRef(3);  //0,1,2

//   const OnCreate = (content) => {
//     const newItem = {
//       id:idRef.current,
//       content,
//       isDone:false,    // isDone : 할일 완료 여부를 나타내는 boolean
//       createdDate:new Date().getTime(),
//     };
//     //setTodo([newItem, ...todo])  
//     setTodo([...todo, newItem]); //배열 
//     idRef.current += 1;
//   };

//   const onUpdate = (targetId) => {
//     setTodo(
//       todo.map((it) =>
//         it.id === targetId ? { ...it, isDone: !it.isDone } : it
//       )
//     );
//   };

//   const onDelete = (targetId) =>{
//     setTodo(todo.filter((it) => it.id !== targetId));  //해당되지 않는 요소들만 가지고 새로운 배열 만들겠다 
//   };

//   return (
//     <div className="App">
//       <Header />
//       <TodoEditor onCreate={OnCreate} />
//       <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete}/>
//     </div>
//   );
// }
// export default App;





////useReducer 예제 - TestComponents.js
// const App = () => {
//   return(
//     <div className="App">
//       <TestComponents/>
//     </div>
//   );
// };
// export default App;





// 위 기존 예제에서 useReducer를 사용하여 상태변환 코드를 컴포넌트로부터 분리한 것
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

  function reducer(state,action){
    switch(action.type){
      case "CREATE":{
        return[action.newItem, ...state];
      }
      case "UPDATE":{
        return state.map((it) =>
            it.id === action.targetId ? {...it, isDone: !it.isDone,} :it);
      }
      case "DELETE":{
        return state.filter((it) => it.id !== action.targetId);
      }
      default:
        return state;
    }
  }

  const App = () => {
    const [todo, dispatch] = useReducer(reducer, mockTodo);
    const idRef = useRef(3);

    const onCreate = (content) => {
      dispatch ({
        type:"CREATE",
        newItem: {
          id: idRef.current,
          content,
          isDone:false,
          createdDate: new Date().getTime(),
        },
      });
      idRef.current += 1;
    };

    const onUpdate = (targetId) => {
      dispatch({
        type: "UPDATE",
        targetId,
      });
    };

    const onDelete = (targetId) => {
      dispatch({
        type:"DELETE",
        targetId,
      });
    };

    return(
      <div className="App">
        <Header />
        <TodoEditor onCreate={onCreate} />
        <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete}/>
      </div>
    );
  };
  export default App;