// import { useState } from 'react';
// const StateForm = () => {
//     const [message, setMessage] = useState('');
//     const [address, setAddress] = useState('');
//     const onClickEnter = () => setMessage('안녕하세요!');
//     const onClickLeave = () => setMessage('안녕히 가세요!');
//     const onClickPrint = () => setAddress('서울시 서초구 테헤란로');
    
//     return(
//         <div className='body'>
//             <button type='button' onClick={onClickEnter}>입장</button>
//             <button type='button' onClick={onClickLeave}>퇴장</button>
//             <button type='button' onClick={onClickPrint}>주소 출력</button>

//             <div className='body'>
//                 <h1>{message}</h1>
//                 <h3>{address}</h3>
//             </div>
//         </div>
//     );
// };
// export default StateForm;




// 글자 입력출력, 버튼 누르면 글자,배경색 바꾸기 
// import { useState } from "react";
// const StateForm = () => {
//     const [message, setMessage] = useState('');
//     const [color, setColor] = useState('black');
//     const [backgroundColor, setBackgroundColor] = useState('white');

//     const handleOnChange = (e) => setMessage(e.target.value);
//     const handleOnClick = () => alert(message);
//     const changeStyle = (textColor, bgColor) => {
//         setColor(textColor);
//         setBackgroundColor(bgColor);
//     };

//     return(
//         <div className='body'>
//             <input type='text' value={message} onChange={handleOnChange} />
//             <button type='button' onClick={handleOnClick}>출력</button>
//             <h1 style = {{ color, backgroundColor }}>{message}</h1>

//             <button 
//                 type='button'
//                 className='red'
//                 onClick={() => changeStyle('red', 'yellow')}
//                 style={{ color : "red"}}
//             >
//                     빨간색
//             </button>
//             <button 
//                 type='button'
//                 className='green'
//                 onClick={() => changeStyle('green', 'magenta')}
//                 style={{ color : "green"}}
//             >
//                     초록색
//             </button>
//             <button 
//                 type='button'
//                 className='blue'
//                 onClick={() => changeStyle('blue', 'skyblue')}
//                 style={{ color : "blue"}}
//             >
//                     파란색
//             </button>

//         </div>
//     )
// }
// export default StateForm;



// 이름과 나이 입력하고 바로 아래에 출력하기 
import { useState } from "react";
const StateForm = () => {
    const [form, setForm] = useState({
        name : "홍길동",
        age : 25
    });

    const handleForm = (e) =>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        });
    };
    const show = () => {
        console.log(`안녕하세요. ${form.name} (${form.age}세) 님!`);
    };

    return(
        <form className='form'>
            <div>
                <label htmlFor="name">이름: </label>
                <input 
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleForm} />
            </div>
            <div>
                <label htmlFor="age">나이: </label>
                <input 
                    type="number"
                    id="age"
                    name="age"
                    value={form.age}
                    onChange={handleForm} />
            </div>
            <div>
                <button type="button" onClick={show}>출력</button>
            </div>
            <p>안녕하세요. {form.name} ({form.age}) 님!</p>

        </form>
    );
};
export default StateForm

