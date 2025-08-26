import React, { useEffect, useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import List from "./pages/List";

export const stateContext = React.createContext();

const serviceKey = '37e276a5a628951fdef2a0eba3f51cae64effac405a5bf069b2a2de5a66dcca2';
const busanUrl = `http://apis.data.go.kr/6260000/RecommendedService/getRecommendedKr?serviceKey=${serviceKey}&pageNo=1&numOfRows=5&resultType=json`;
const gyeongnamUrl = `http://apis.data.go.kr/6480000/gyeongnamtourculture/gyeongnamtourculturelist?serviceKey=${serviceKey}&pageNo=1&numOfRows=5&resultType=json`;

const App = () => {
  const[isDataLoaded,setIsDataLoaded] = useState(false);
  const[result, setResult] = useState([]);

  const[isRowsLoaded, setIsRowsLoaded] = useState(false);
  const[rows,setRows] = useState([]);

  const location = useLocation();


  useEffect(() => {
    fetch(busanUrl)
    .then(response => response.json())
    .then(data => {
      //console.log(data.getWalkingKr.item.map((it) => it.MAIN_TITLE));
      setResult(data.getRecommendedKr.item);
      setIsDataLoaded(true);
    })
    .catch(error => console.log(error));

    fetch(gyeongnamUrl)
    .then(response => response.json())
    .then(data => {
      //console.log(data.gyeongnamtourculturelist.body.items.item.map((it) => it.data_title));
      setRows(data.gyeongnamtourculturelist.body.items.item);
      setIsRowsLoaded(true);
    })
    .catch(error => console.log(error));
  },[]);

  const value = location.pathname === "/list"? rows : result;

  if(!isDataLoaded && !isRowsLoaded){
    return <div>데이터를 불러오는 중입니다... </div>;
  }
  else{
    return(
      <>
        <stateContext.Provider value = {value}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/detail/:UC_SEQ' element={<Detail />} />
            <Route path='/list' element={<List />} />
          </Routes>
        </stateContext.Provider>
      </>
    );
  }
  // return(
  //   <div className="App">
    
  //     {/* <h3>경상남도_박물관 정보</h3>
  //     <table className="App-table">
  //       <thead>
  //         <tr>
  //           <th>고유번호</th>
  //           <th>기관명</th>
  //           <th>소재지</th>
  //           <th>홈페이지</th>
  //           <th>연락처</th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         {
  //           result.map( item => (
  //             <tr key={item.entid}>
  //               <td>{item.entid}</td>
  //               <td>{item.title}</td>
  //               <td>{item.roadaddress}</td>
  //               <td>{item.homepage}</td>
  //               <td>{item.tel}</td>
  //             </tr>
  //           ))
  //         }
  //       </tbody>
  //     </table> */}
  //   </div>
  // );
};
export default App;