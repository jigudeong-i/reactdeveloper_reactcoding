import { useRef, useState } from 'react';
import './TodoEditor.css';

const TodoEditor = ({onCreate}) => {
    const[content, setContent] = useState("");
    const inputRef = useRef();    

    const onChangeContent = (e) => {
        setContent(e.target.value);     
    };

    const onSubmitContent = () => {       // " 안녕 ".trim() => "안녕"
        if (!content.trim()) {          // trim():앞뒤 공백 제거. 조건문 기본값은 false인데 부정이니까 true : '비어있으면'
            inputRef.current.focus();    // current:ref가 연결된 dom요소. 커서를 주겠다.
            alert("할 일을 입력하세요");
            return;
        }
        onCreate(content);              // if에 안 걸리면 onCreate, 즉 할일 추가 하고 
        setContent("");                 // 공백으로 초기화하겠다.
    };

    const onKeyDown = (e) => {     //엔터를 누르면 함수 호출 
        if (e.key === "Enter") {
            onSubmitContent();
        }
    };

    return(
        <div className='TodoEditor'>
            <h4>새로운 할 일 작성하기🖍</h4>
            <div className='editor_wrapper'>
                <input 
                    ref={inputRef}
                    value={content}
                    onChange={onChangeContent}
                    onKeyDown={onKeyDown}
                    placeholder='새로운 할 일...'
                />
                <button type="button" onClick={onSubmitContent}>추가</button>
            </div>
        </div>
    );
};
export default TodoEditor;
