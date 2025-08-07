
import './App.css';     // ./  는 현재경로라는 뜻. 
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

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


  const App = ()=>{     // const App = function(){
    return (
      <div className="App">
        <Header />
        <Body />
        <Footer />
      </div>
    );
  };

  const ka = () => {
      const number = 8;
      if (number % 2 === 0){
          return <div>{number}은(는) 짝수입니다.</div>
      } else {
          return <div>{number}은(는) 홀수입니다.</div>
      }
  };


export default App;



















