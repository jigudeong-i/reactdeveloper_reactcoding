import React, { useState } from 'react';

const Child = (props) => {
  return (
    <div>
      <h2>자식 컴포넌트</h2>
      <p>부모가 준 값: {props.cnt}</p>
      {/* 버튼 클릭 시 부모 함수 실행 */}
      <button onClick={() => props.handleIncrease()}>+1 올리기</button>
    </div>
  );
};


const Parent = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>부모 컴포넌트</h1>
      <p>현재 카운트: {count}</p>
      <Child cnt={count} handleIncrease={increase} />
    </div>
  );
};

export default Parent;