
import './App.css';    
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import MyComponent from './components/MyComponent';

// 함수 컴포넌트
// function App(){
//   return (
//     <div className="App">
//       <Header />
//       <Body />
//       <Footer />
//     </div>
//   );
// };

// 화살표 함수 컴포넌트
//   const App = ()=>{     // const App = function(){
//     return (
//       <div className="App">
//         <Header />
//         <Body />
//         <Footer />
//       </div>
//     );
//   };
// export default App;


// -----------------------------------------------prop으로 값 받기 
// const App = () => {
//   const name = "홍길동";
//   return (
//     <div className="App">
//       <Header />
//       <Body name={name} age={25} location="서울시 서초구" />
//       <Footer />
//     </div>
//   );
// };
// export default App; 



// const App = () => {
//   const BodyProps = {
//     name: "김철수",
//     location: "경기도 수원시 장안구",
//     favorList:["피자", "햄버거", "떡볶이"]
//   };
//   return (
//     <div className="App">
//       <Header />
//       <Body {...BodyProps} />
//       <Footer />
//     </div>
//   );
// }
// export default App;


// ------------------------------------------props로 컴포넌트 전달 
// const Apple = () => {
//   return <div>자식 컴포넌트에 전달</div>;
// };

// const App = () => {
//   const data = {
//     name : "박지원",
//     age : 30,
//     email : "wlrnejddl@naver.com",
//     quote : "시간은 금이다.",
//     hobby : ["climbing", "drawing"]
//   }

//   return (
//     <div className="App">
//       <Header></Header>
//       <Body><Apple /></Body>
//       <MyComponent {... data}/>
//       <Footer></Footer>
//     </div>
//   );
// }
// export default App;


// const App = () =>{
//   return (
//     <div className="App">
//       <Header />
//       <Body />
//       <Footer />
//     </div>
//   );
// }
// export default App;


//예제 
// import StateForm from "./components/StateForm";
// const App = () => {
//     return (
//         <div className="App">
//             <StateForm />
//         </div>
//     );
// }
// export default App;



import ItemMain from "./product/itemMain";

const App = () => {
  return(
    <div className="App">
      <ItemMain />
    </div>
  );
}
export default App;



// import NoticeMain from "./notice/NoticeMain";

// const App = () => {
//   return (
//     <div className="App">
//       <NoticeMain />
//     </div>
//   );
// }
// export default App;