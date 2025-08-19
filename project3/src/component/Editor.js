// import './Editor.css'
// const Editor = () => {
//     return(
//         <div className='Editor'>
//             <div className='editor_section'>
//                 {/*날짜*/}
//                 <h4>오늘의 날짜</h4>
//             </div>
//             <div className='editor_section'>
//                 {/*감정*/}
//                 <h4>오늘의 감정</h4>
//             </div>
//             <div className='editor_section'>
//                 {/*일기*/}
//                 <h4>오늘의 일기</h4>
//             </div>
//             <div className='editor_section'>
//                 {/*작성 완료, 취소*/}
//             </div>
//         </div>
//     );
// }
// export default Editor;

import './Editor.css'
import { useEffect, useState } from "react"
import { emotionList, getFormattedDate } from "../util";
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import EmotionItem from './EmotionItem';

const Editor = ({initData, onSubmit}) => {
    const navigate = useNavigate();
    const[state, setState] = useState({
        date:getFormattedDate(new Date()),
        emotionId:3,
        content:"",
    });

    useEffect(() => {
        if(initData){
            setState({
                ...initData,
                date:getFormattedDate(new Date(parseInt(initData.date))),
            });
        }
    }, [initData]);

    const handlechangeDate = (e) => {
        setState({
            ...state,
            date:getFormattedDate(new Date(e.target.value)),
        });
    };

    const handleChangeEmotion = (emotionId) => {
        setState({
            ...state,
            emotionId,
        });
    };

    const handleChangeContent = (e) => {
        setState({
            ...state,
            content:e.target.value,
        });
    };

    const handleSubmit = () => {
        onSubmit(state);
    };

    const handleGoBack = () => {
        navigate(-1);
    }

    return(
        <div className="Editor">
            <div className="editor_section">
                <h4>오늘의 날짜</h4>
                <div className="input_wrapper">
                    <input
                        type="date"
                        value={state.date}
                        onChange={handlechangeDate}/>
                </div>
            </div>
            <div className="editor_section">
                <h4>오늘의 감정</h4>
                <div className='input_wrapper emotion_list_wrapper'>
                    {emotionList.map((it)=>(
                        <EmotionItem key={it.id} 
                        {...it}
                        onClick={handleChangeEmotion}
                        isSelected={state.emotionId===it.id}/>
                    ))}

                </div>
            </div>
            <div className="editor_section">
                <h4>오늘의 일기</h4>
                <div className='input_wrapper'>
                    <textarea
                        placeholder="오늘의 일기"
                        value={state.content}
                        onChange={handleChangeContent}
                    />
                </div>
            </div>
            <div className="editor section bottom_section">
                <Button 
                    text={"취소"}
                    onClick={handleGoBack}
                />
                <Button 
                    text={"작성 완료"} 
                    type={"positive"}
                    onClick={handleSubmit}    
                />
            </div>
        </div>
    );
};
export default Editor;

//useEffect에 첫 번째 인수로 전달한 콜백 함수는 initData 값이 변경될 때마다 실행된다.
//useEffect의 콜백 함수가 실행될 때 initData가 false 값이면 부모 컴포넌트에서 
//정상적인 initData를 받지 못한 경우이므로 아무런 일도 일어나지 않는다. 
//그러나 true 값이면 if문을 실행한다. State를 업데이트한다. 
