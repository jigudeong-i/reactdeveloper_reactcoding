import { useState } from "react";
import TodoItem from "./Todoitem";
import "./TodoList.css";

const TodoList = ({todo, onUpdate, onDelete}) => {
    const [search, setSearch] = useState("");

    const onChangeSearch = (e) => {
        setSearch(e.target.value);  
    };
    
    const getSearchResult = () => {
        return search === "" ? todo :   //비어있지 않으면? 
            todo.filter((it) =>    // 새로운 배열을 반환하겠다.     
                it.content.toLowerCase().includes(search.toLowerCase())
        );      //내용    대소문자 다 찾고 싶으니까 싹다 소문자 만들어서    포함돼있나? 포함된 것만 찾아서 
    };   

    return (
        <div className="TodoList">
            <h4>할 일 목록🌱</h4>
            <input
                value={search}
                onChange={onChangeSearch}
                className="searchbar"
                placeholder="검색어를 입력하세요"
            />
            <div className="list_wrapper">
                { getSearchResult().map((it) => (           
                    <TodoItem 
                    key={it.id}
                    {...it} 
                    onUpdate={onUpdate}  // 리스트에 모든 자식 요소는 key라는 고유한 prop을 반드시 가져야 한다.
                    onDelete={onDelete}               // 이 key로 어떤 컴포넌트를 CRUD 작업할지 결정하기 때문.
                />
                ))}                               
            </div>
        </div>
    );
};
export default TodoList; 