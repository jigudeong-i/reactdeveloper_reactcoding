import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';        // app 컴포넌트를 import 하겠다. 
//import reportWebVitals from './reportWebVitals';

//리액트에서 컴포넌트를 렌더링한다는 것은, 해당 컴포넌트를 ReactDOM을 통해 HTML 페이지의 특정 요소(root)에 연결하여 화면에 표시하는 것이다.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
//  <React.StrictMode>
    <App />
//  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

