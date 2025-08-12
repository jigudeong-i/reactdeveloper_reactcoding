import TodoItem from './Todoitem';
import './TodoList.css';

const TodoList = () => {
    return(
        <div className="TodoList">
            <h4>할 일 목록🎈</h4>
            <input className='searchbar' placeholder='검색어를 입력하세요' />
            <div className='list_wrapper'>
                <TodoItem/>
                <TodoItem/>
                <TodoItem/>
            </div>
        </div>
    );
};
export default TodoList;

