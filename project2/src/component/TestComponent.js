import { useReducer, useState } from "react";

// const TestComponents = () => {
//     const[count, setCount] = useState(0);
//     const onIncrease = () => {
//         //setCount(count+1);
//         setCount(prev => prev +1);
//     };
//     const onDecrease = () => {
//         //setCount(count-1);
//         setCount(prev => Math.max(prev -1,0));  // prev-1은 최소 0 까지만 갈 수 있다.
//     };
//   return(
//         <div>
//             <h4>테스트 컴포넌트</h4>
//             <div>
//                 <strong>{count}</strong>
//             </div>
//             <div>
//                 <button type="button" onClick={onIncrease}>+</button>{" "}
//                 <button type="button" onClick={onDecrease}>-</button>
//             </div>
//         </div>
//     );
// }
// export default TestComponents;



const TestComponents = () => {
    //상태 변환 코드 (useReducer)
    //const[state변수, 상태 변환 촉발 함수] = 생성자(상태를 어떻게 바꿀지 정의한 함수, 초깃값);
    const [count, dispatch] = useReducer(reducer, 0);

// 버튼을 클릭했을 때 상태 변환이 필요할 때 이를 촉발하는 dispatch 함수를 호출하도록 onClick 이벤트 핸들러를 설정했다. 
// dispatch 함수에서는 인수로 객체를 전달하는데, 이 객체는 State의 변경 정보를 담고 있다. (이 객체를 action 객체라 함. reduce함수의 변수action의 객체로 받으니까)
// useReducer가 dispatch 함수를 호출하면 얘는 또 reducer 함수를 호출하고, State 값을 업데이트.

function reducer(state, action){
    switch(action.type){
        case "plus":
            return state + action.data;
        case "minus":
            return Math.max(state - action.data, 0);
        case "init":
            return 0;
        default:
            return state;
    }
}
    return(                                       // dispatch: 설정하겠다. type과 data를. data는 후에 reducer 함수의 action 객체로 들어간다
        <div>
            <h4>테스트 컴포넌트</h4> 
            <div>
                <strong>{count}</strong>
            </div>
            <div>             
                <button type="button" onClick={()=> dispatch({type:"plus", data:1})}>  
                    +                           
                </button>{" "}
                <button type="button" onClick={()=> dispatch({type:"minus", data:1})}>
                    -
                </button>
                <button type="button" onClick={()=> dispatch({type:"init"})}>
                    0으로 초기화
                </button>
            </div>
        </div>
    );
}
export default TestComponents;











