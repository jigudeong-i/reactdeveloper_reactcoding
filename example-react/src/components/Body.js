
// const chanung = () => {
//     const Body = () => {
//         const name = "박지원"
//         const address = "서울시 장안동"
//         const pn = "01023123123"
//         return(
//             <>
//             <div
//                 className="react" //시작태그를 여러 줄로 작성하게 된다면 여기에 주석을 작성할 수 있다.
//             ></div>      
//             {/*주석문 명시*/}
//             <h3>{name}</h3>
//             <h3>{address}</h3> 
//             <h3>{pn}</h3>
//             </>
//         )
//     };
//     const Ka = () => {
//         const number = 8;
//         if (number % 2 === 0){
//             return <div>{number}은(는) 짝수입니다.</div>
//         } else {
//             return <div>{number}은(는) 홀수입니다.</div>
//         }
//     };

//     return(
//         <div>
//             <Body />
//             <Ka />
//         </div>
//     );
// }
// export default chanung;


// [요구사항 2]
// 3개 이상의 프로그래밍 언어를 배열로 정의하여 구조 분해 할당하여 데이터를 출력해 주세요.
// const Body = () => {
//     const language = ["자바", "오라클", "서블릿", "리액트"];
//     const [j, o, s, r] = language;  //구조 분해 할당

//     const style = {
//         listStyleType : 'none',
//         color : 'pink'
//     };
//     return (
//         <div>
//             <h1>우리가 배운 프로그래밍</h1>
//             <ul style={style}>
//                 <li>{j}</li>
//                 <li>{o}</li>
//                 <li>{s}</li>
//                 <li>{r}</li>
//             </ul>
//         </div>
//     );
// }
// export default Body;


// const Body = () => {
//   const name = "리액트";
//   // 스타일 객체 선언
//   const style = {
//     backgroundColor : 'black',
//     color : 'aqua',
//     fontSize : '48px',
//     fontWeight : 'bold',
//     padding : 16, // 단위 생략 시 px
//     marginBottom: 15
//   };
//   return (
//         <>
//             <div style={style}>{name}</div>
//             <div style={
//                 {
//                     backgroundColor : 'pink',
//                     color : 'black',
//                     fontSize : '48px',
//                     fontWeight : 'bold',
//                     padding : 16
//                 }
//             }>
//                 {name}
//             </div>
//         </>
//     );
// }
// export default Body;


// import "./Body.css";
// const Body = () => {
//     return (
//         <div className="body">
//             <h1>body</h1>
//         </div>
//     );
// };
// export default Body;


// ---------------------------------------------prop으로 값 받기 
// import "./Body.css";
// const Body = (props) => {
//     console.log(props);
//     return (
//         <div className="body">
//             <h1>{props.name}님은 
//                 {props.age} 살이고 
//                 {props.location}에 거주합니다.
//             </h1>
//         </div>
//     );
// }
// export default Body;

// import "./Body.css";
// const Body = (props) => {
//     const {name, location, age} = props;  // props 값 전달을 구조 분해 할당 으로 더 간편하게!  
//     return (
//         <div className="body">
//             <h1>{name}님은 
//                 {age}살이며 
//                 {location}에 거주합니다.</h1>
//         </div>
//     );  
// }
// export default Body;


// const Body = ({name, location, favorList}) => {     //괄호 안에 props를 쓰는게 아닌 아예 객체 명을 쓴다. 
//     return (
//         <div className="body">
//             <p>{name}님은 {location}에 거주합니다.</p>
//             <p>{favorList.length}개의 음식을 좋아합니다.</p>
            
//             <ul style= {
//                 {
//                     listStyle:"none",
//                 }
//             }>
//                 {favorList.map((food, index) => (    // map 타입에선 각각 구분할 수 있는 대상이 필요해 key 삽입 
//                     <li key={index}>{food}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// };
// export default Body;


// ------------------------------------------props로 컴포넌트 전달 
// const Body = ({children}) => {  //App.js에서 Body 태그 안에 있으면 props로 받지만, 시작, 종료태그 사이에 있으면 children으로 받는다. children은 변수명이 아닌 이미 정의돼있는 함수 같은 것. 
//     return (                    //children 에는 컴포넌트 Apple 이 저장되어 있고 해당 컴포넌트를 렌더링한다.
//         <div className="body">
//             {children}
//         </div>
//     );
// }
// export default Body;


// ------------------------------------------------버튼 클릭
// const Body = () => {
//     const handleOnClick = () => {
//         alert("버튼 클릭");
//     }    
//     return (
//         <div>
//             <button onClick={handleOnClick}>클릭하세요</button>
//             <button onClick={() => {
//                 alert("리액트에서 이벤트 처리.");
//             }}>버튼 클릭</button>
//         </div>
//     );
// }
// export default Body;


//--------------------------------------------버튼 클릭시 색상변경 
// const Body = () => {
//     const handleOnClick = (e) => {
//         console.log(e.target.name, e.target.id);
//         if (e.target.id === "btn1") {
//             e.target.style.backgroundColor = "lightgreen";
//         } else if (e.target.id === "btn2") {
//             e.target.style.backgroundColor = "yellow";
//         }
//     }
//     return (
//         <div>
//             <button
//                 type="button"
//                 name="button1"
//                 id="btn1"
//                 onClick={handleOnClick}
//             >
//                 첫 번째 클릭하세요
//             </button>
//             <button
//                 type="button"
//                 name="button2"
//                 id="btn2"
//                 onClick={handleOnClick}
//             >
//                 두 번째 클릭하세요
//             </button>
//         </div>
//     );
// }
// export default Body;


// import {useState} from "react";
// const Body = () => {
//     console.log("업데이트!");
//     let [count, setCount] = useState(0);
//     const onIncrease = () => {
//       setCount(count + 1);
//     }
//     return (
//       <div>
//         <h2>{count}</h2>
//         <button type="button" onClick={onIncrease}> + </button>
//       </div>
//     );
// }
// export default Body;
// //+ 버튼을 클릭할 때마다 숫자가 1씩 늘어난다. set 함수를 호출해 State 값을 변경하면, 변경 값을 페이지에 반영하기 위해 컴포넌트를 다시 렌더링 한다. 
// // 리액트에서는 이것을 ‘컴포넌트 업데이트’라고 한다. 컴포넌트가 페이지에 렌더링하는 값은 컴포넌트 함수의 반환값이다. 
// // 따라서 컴포넌트를 다시 렌더링 한다는 것은 컴폰너트를 다시 호출한다라는 의미이다.


// -------------------------------------------------------글 상자 입력 
// import { useState } from "react";
// const Body = () => {
//     const [text, setText] = useState("");
//     const handleOnChange = (e) => {
//         setText(e.target.value);
//     }
//     return (
//         <div>
//             <input value={text} onChange={handleOnChange} />
//             <div>{text}</div>
//         </div>

//         // -----날짜 바꾸기
//         //  <div>
//         //     <input type = "date" value={"date"} onChange={handleOnChange} />
//         //     <div>{text}</div>
//         // </div>
//     );
// }
// export default Body;




//----------------------------------드롭다운 상자로 여러 옵션 선택 중 하나 선택
// import { useState } from "react";
// const Body = () => {
//     const [option, setOption] = useState("");
//     const handleOnChange = (e) => {
//         console.log("변경된 값: ", e.target.value);
//         setOption(e.target.value);
//     }
//     return (
//         <div>
//             <select value={option} onChange={handleOnChange}>
//                 <option key={1}>1</option>
//                 <option key={2}>2</option>
//                 <option key={3}>3</option>
//             </select>
//             <div>{option} 학년</div>    
//         </div>
//     );
// }
// export default Body;




//useState로 State 생성
import { useState } from "react";       // useState는 상태를 변화시키는 함수
const Body = () => {
    const [text, setText] = useState("");  // text의 기본값은 공백이고("") setText 형식으로 상태 변화를 주겠다.
    
    const handleOnChange = (e) => {
        console.log("변경된 값: ", e.target.value);
        setText(e.target.value);         // e.target.value 로 상태변경 하겠다. value는 {text}니까 {text}가 바뀜  
    }
    return (
        <div>                                                           
            <input value={text} onChange={handleOnChange} />   {/* 값이 바뀔 때마다 handleOnChange 실행(onChange) */}
            <div><br />{text}</div>
        </div>          // type 안 쓰면 기본값 text 
    );
}
export default Body;
























