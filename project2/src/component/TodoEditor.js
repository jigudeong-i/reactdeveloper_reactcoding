import { useRef, useState } from 'react';
import './TodoEditor.css'

const TodoEditor = ({onCreate}) => {
    const[content, setContent] = useState("");
    const inputRef = useRef();    

    const onChangeContent = (e) => {
        setContent(e.target.value);     //input의 content 요소
    };

    const onSubmitContent = () => {
        if (!content.trim()) {      //기본값은 false. 즉, !이면 true : '비어있지 않으면'
            inputRef.current.focus();    //커서를 주겠다.
            alert("할 일을 입력하세요");
            return;
        }
        onCreate(content);
        setContent("");             // 공백으로 초기화
    };

     const onKeyDown = (e) => {     //엔터를 누르면 함수 호출 
        if (e.key === 'Enter') {
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